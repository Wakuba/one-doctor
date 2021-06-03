"use strict";
// import * as functions from "firebase-functions";
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;
// メールサーバー設定
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
exports.sendMail = functions.https.onCall((data) => {
    // メール設定
    const adminMail = {
        from: gmailEmail,
        to: adminEmail,
        subject: "ホームページお問い合わせ",
        text: adminContents(data),
    };
    // 管理者へのメール送信
    mailTransport.sendMail(adminMail, (err) => {
        if (err) {
            return console.error(`send failed. ${err}`);
        }
        return console.log("send success.");
    });
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//# sourceMappingURL=index.js.map