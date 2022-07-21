import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8H-2xeSiofwC343dNRdkOUOXeCpomZ6s",
  authDomain: "animeflix-d752c.firebaseapp.com",
  projectId: "animeflix-d752c",
  storageBucket: "animeflix-d752c.appspot.com",
  messagingSenderId: "212898482368",
  appId: "1:212898482368:web:3733b19dbe62e904c88525",
  measurementId: "G-TK635XM2LW"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
