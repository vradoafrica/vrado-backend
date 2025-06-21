import {createTestAccount,createTransport,getTestMessageUrl} from "nodemailer"


export default async function sendTestEmail(to, otp) {
    const transporter = createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

  const info = await transporter.sendMail({
    from: '"Vradoware" <no-reply@vrado.com>',
    to: to,
    subject: 'Your OTP Code',
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', getTestMessageUrl(info));

  return getTestMessageUrl(info); // Open this in browser to preview
}


