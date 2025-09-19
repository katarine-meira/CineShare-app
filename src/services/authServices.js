import { auth } from "src/firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Criar usuário
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logoutUser() {
  return signOut(auth);
}
