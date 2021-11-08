import * as functions from "firebase-functions";

import { expressReceiver } from "./slack/app";
import usePostMessage from "./slack/postMessage";

export const slack = functions.https.onRequest(expressReceiver.app);
export const postMessageToSlackChannelWithUserData = functions.https.onCall((data, context) => usePostMessage(data.username, data.useremail));
