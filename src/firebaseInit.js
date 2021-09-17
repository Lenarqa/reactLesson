import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCpAhq1tZRqDDD7lE2zMSl5YxKjTY90kT0",

  authDomain: "testproject-6c7db.firebaseapp.com",

  projectId: "testproject-6c7db",

  storageBucket: "testproject-6c7db.appspot.com",

  messagingSenderId: "696552021523",

  appId: "1:696552021523:web:84d05c79eb4af40733a9e6",
};

// Initialize Firebase
let instance;

export default function getFirebase () {
    if(typeof window !== undefined) {
        if(instance) return instance;
        instance = firebase.initializeApp(firebaseConfig);
        return instance;
    }
    return null;
}
