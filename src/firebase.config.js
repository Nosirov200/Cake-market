import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB2cz3RSm95-9UDM9dZpEEVAuRli6oQywg",
    authDomain: "cake-shop-91497.firebaseapp.com",
    databaseURL: "https://cake-shop-91497-default-rtdb.firebaseio.com",
    projectId: "cake-shop-91497",
    storageBucket: "cake-shop-91497.appspot.com",
    messagingSenderId: "212756189441",
    appId: "1:212756189441:web:8944523d681272ed480b00"
  };

  const app = getApps.length> 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app)

  export{app, firestore, storage}