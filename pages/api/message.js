import nodemailer from "nodemailer";
export default async function messageHandler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end(); //Method Not Allowed
    return;
  }
  try {
    const { name, emailContact, messageSent } = req.body;
    let transport = await nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER_LOGIN,
        pass: process.env.MAILTRAP_USER_PASSWORD,
      },
    });
    const message = {
      from: name,
      to: "salespoodle@mail.com",
      subject: "SalesPoodle reach out",
      text: `You can reach me at this address: ${emailContact} and here is my message: ${messageSent}`,
    };
    try {
      await transport.sendMail(message);
    } catch (error) {
      console.log(`error`, error);
    }
    res.status(200).send("success");
  } catch (error) {
    res.end(
      JSON.stringify({
        status: error,
      })
    );
  }
}
