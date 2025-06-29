import {createTransport} from "nodemailer"


export default async function sendEmail({ to, subject, text, html }) {
  // Create reusable transporter using SMTP transport
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587, // or 465 for SSL
    secure: false, // true for port 465
    service: 'gmail', // or another SMTP provider like 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.MAIL_ADDRESS, // your email address
      pass: process.env.MAIL_PASSWORD  // your email password or app-specific password
    }
  });

  // Set up email options
  const mailOptions = {
    from: `"Vrado AI" <${process.env.MAIL_ADDRESS}>`,
    to,
    subject,
    text,   // plain text body
    html    // HTML body (optional)
    
  };
  console.log(mailOptions)

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


