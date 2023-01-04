import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBn13HkDv35OIhxWjz0qKh6eQoUFiD-Gvw",
  authDomain: "bookify-ac428.firebaseapp.com",
  projectId: "bookify-ac428",
  storageBucket: "bookify-ac428.appspot.com",
  messagingSenderId: "40943072990",
  appId: "1:40943072990:web:cb3040f07b48f70470744f",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
