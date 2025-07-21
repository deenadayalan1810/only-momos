const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter with your email service configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });
};

// Controller function to handle contact form submission
const sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, menu, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !menu || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const transporter = createTransporter();

    // Email content for shop owner
    const mailOptionsToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.SHOP_EMAIL || process.env.EMAIL_USER, // Shop owner's email
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #d97706; text-align: center;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Customer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Menu:</strong> ${menu}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="text-align: center; color: #666; font-size: 12px;">
            This email was sent from your momos shop contact form.
          </p>
        </div>
      `,
    };

    // Confirmation email for customer
    const mailOptionsToCustomer = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us - Momos Shop',
      html: `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #d97706; text-align: center;">Thank You for Contacting Us!</h2>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your details:</p>
        <div style="background-color: #fff; padding: 15px; border-left: 4px solid #d97706; margin: 15px 0;">
          <p style="margin: 0; color: #555;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 0; color: #555;"><strong>Menu:</strong> ${menu}</p>
          <p style="margin: 0; color: #555;"><strong>Message:</strong> ${message}</p>
        </div>
        <p>We typically respond within 24 hours during business days.</p>
      </div>
      <div style="text-align: center; margin: 20px 0;">
        <p style="color: #d97706; font-weight: bold;">Best regards,<br>Momos Shop Team</p>
      </div>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="text-align: center; color: #666; font-size: 12px;">
        If you didn't send this message, please ignore this email.
      </p>
    </div>
      `,
    };

    // Send email to shop owner
    await transporter.sendMail(mailOptionsToOwner);
    
    // Send confirmation email to customer
    await transporter.sendMail(mailOptionsToCustomer);

    // Log successful submission (optional)
    console.log(`Contact form submission from ${name} (${email}) processed successfully`);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Handle specific nodemailer errors
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        success: false,
        message: 'Email authentication failed. Please check email configuration.'
      });
    }
    
    if (error.code === 'ECONNECTION') {
      return res.status(500).json({
        success: false,
        message: 'Failed to connect to email server. Please try again later.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
};

module.exports = {
  sendContactEmail
};