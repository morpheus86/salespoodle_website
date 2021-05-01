import nodemailer from "nodemailer";
export default async function tradeHandler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end(); //Method Not Allowed
    return;
  }
  try {
    const {
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      selectTrade,
      checkboxValue,
    } = req.body;

    let transport = await nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER_LOGIN,
        pass: process.env.MAILTRAP_USER_PASSWORD,
      },
    });
    const reachOut = checkboxValue
      ? `${selectTrade} and I am also interested in multiple trades`
      : selectTrade;
    const message = {
      from: email,
      to: "salesPoodle@mail.com",
      subject: "SalesPoodle trades reach out",
      text: `My name is ${
        firstName + " " + lastName
      }. My organization is ${companyName} I am interested in Joining your organization regarding this partucular trades: ${reachOut}. I can be contacted at this number: ${phoneNumber}`,
    };
    try {
      await transport.sendMail(message);
    } catch (error) {
      console.log(error);
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
