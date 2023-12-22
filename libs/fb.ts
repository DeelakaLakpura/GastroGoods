import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvFtI1mBjag4t2YSnu_vQXtZ3WRF7klSI",
  authDomain: "gastrogoods-d728a.firebaseapp.com",
  projectId: "gastrogoods-d728a",
  storageBucket: "gastrogoods-d728a.appspot.com",
  messagingSenderId: "963666505204",
  appId: "1:963666505204:web:117841b15c041f7f0b9da1"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
