import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAB-xzJMFMLvH2inmlCTvnQB7wPBss7Em4",
    authDomain: "login-6cb8c.firebaseapp.com",
    projectId: "login-6cb8c",
    storageBucket: "login-6cb8c.appspot.com",
    messagingSenderId: "366348921279",
    appId: "1:366348921279:web:e32dca8be9d009bc63990a",
    measurementId: "G-2DB7H1LR20"
  };
  const app=initializeApp(firebaseConfig);

//  export const analytics = getAnalytics(app);
 export const auth = getAuth(app);