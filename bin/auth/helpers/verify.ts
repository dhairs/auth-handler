import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import authContainer from "../auth";

async function verifyToken(idToken: string): Promise<DecodedIdToken> {
  return authContainer.verifyIdToken(idToken);
}

export default { verifyToken };
