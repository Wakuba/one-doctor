
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
// 管理者用のメールテンプレート
const adminContents = (data) => {
  return `以下内容でホームページよりお問い合わせを受けました。

お名前：
${data.name}

メールアドレス：
${data.email}

内容：
${data.content}
`;
};

exports.sendMail =
  functions.region("asia-northeast1").https.onCall((data, context) => {
    const adminMail = {
      from: gmailEmail,
      to: adminEmail,
      subject: "ホームページお問い合わせ",
      text: adminContents(data),
    };
    mailTransport.sendMail(adminMail, (err) => {
      if (err) {
        return console.error(`send failed. ${err}`);
      }
      return console.log("send success.");
    });
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
