

import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDVWf_Qq0uORtQcgcZt6GwUFQ3hR_eIiws",
  authDomain: "restaurant-1c160.firebaseapp.com",
  projectId: "restaurant-1c160",
  storageBucket: "restaurant-1c160.appspot.com",
  messagingSenderId: "569740470350",
  appId: "1:569740470350:web:8890719e15d4e6b046fb1f",
  measurementId: "G-MZ4D5FMNTP"
};
 

 
class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.db = app.firestore();
        this.storage = app.storage();
    }
}
 

 
const  firebase =new Firebase();



export default firebase;
