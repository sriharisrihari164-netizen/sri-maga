const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const twilio = require('twilio');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Sri Megha Aircon API is running.' });
});

// Helper function to append data to Google Sheets
async function appendToGoogleSheet(data) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.warn('Google Sheets credentials not fully configured. Skipping sheet update.');
      return false;
    }

    // Initialize auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo(); 
    
    // Assumes the first sheet is the one we want to append to
    const sheet = doc.sheetsByIndex[0]; 
    
    // Append row (ensure your sheet has matching headers: Date, Name, Phone, Email, ServiceType, Message)
    await sheet.addRow({
      Date: new Date().toLocaleString(),
      Name: data.name,
      Phone: data.phone,
      Email: data.email || 'N/A',
      ServiceType: data.serviceType,
      Message: data.message
    });
    
    console.log('Successfully added row to Google Sheet.');
    return true;
  } catch (error) {
    console.error('Error updating Google Sheet:', error);
    return false;
  }
}

// Helper function to send WhatsApp notification via Twilio
async function sendWhatsAppNotification(data) {
  try {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_WHATSAPP_NUMBER || !process.env.BUSINESS_WHATSAPP_NUMBERS) {
      console.warn('Twilio credentials not fully configured. Skipping WhatsApp notification.');
      return false;
    }

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const numbersToNotify = process.env.BUSINESS_WHATSAPP_NUMBERS.split(',');

    const messageBody = `*New Inquiry: Sri Megha Aircon*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Service:* ${data.serviceType}\n*Email:* ${data.email || 'N/A'}\n\n*Message:* ${data.message}`;

    const messagePromises = numbersToNotify.map(num => {
      return client.messages.create({
        body: messageBody,
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: num.trim()
      });
    });

    await Promise.all(messagePromises);
    console.log('Successfully sent WhatsApp notifications.');
    return true;
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return false;
  }
}

// Contact Form Handler
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, serviceType, message } = req.body;
  
  // Basic validation
  if (!name || !phone || !serviceType || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('--- New Contact Inquiry ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Service Type: ${serviceType}`);
  console.log(`Message: ${message}`);
  console.log('---------------------------');

  // Attempt external integrations asynchronously
  try {
    await Promise.all([
      appendToGoogleSheet({ name, email, phone, serviceType, message }),
      sendWhatsAppNotification({ name, email, phone, serviceType, message })
    ]);
  } catch (err) {
    console.error('Non-blocking error during external integrations:', err);
  }

  // Always respond to the user quickly, even if external integrations fail or are unconfigured
  res.status(200).json({ 
    success: true, 
    message: 'Inquiry received successfully. Our team will contact you soon.' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
