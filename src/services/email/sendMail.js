import nodemailer from "nodemailer"
export default async function sendMail (email,otp) {
    
    return true
}



// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "me@gmail.com",
//       pass: process.env.GOOGLE_APP_PASSWORD,
//     },
//   });

// // Wrap in an async IIFE so we can use await.
// (async () => {
//   const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
//     to: "bar@example.com, baz@example.com",
//     subject: "Hello ✔",
//     text: "Hello world?", // plain‑text body
//     html: "<b>Hello world?</b>", // HTML body
//   });

//   console.log("Message sent:", info.messageId);
// })();