import {initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCdOEGsqTGOaAiFtZSmP9f4itKSfHmELr8",
    authDomain: "fir-app-cc066.firebaseapp.com",
    projectId: "fir-app-cc066",
    storageBucket: "fir-app-cc066.appspot.com",
    messagingSenderId: "32749480634",
    appId: "1:32749480634:web:df22fba82342d11dacf083"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);

  async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }