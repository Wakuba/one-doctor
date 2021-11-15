import {createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "./firebaseConfig";

import { SignupType } from "../type";

const signUp = async ({email, password}: SignupType): Promise<void> => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export default signUp;
