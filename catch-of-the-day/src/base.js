import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWViajeKC3X24OORxBLCkjMWVOl2urTgA",
  authDomain: "catch-the-fish-thiru.firebaseapp.com",
  databaseURL: "https://catch-the-fish-thiru.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }; // Named Export
export default base;
