import { auth } from "firebase-admin";

import firebaseApp from "../firebase";

const authContainer = auth(firebaseApp);

export default authContainer;
