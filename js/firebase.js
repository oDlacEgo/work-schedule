// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
			apiKey: "AIzaSyAeBlaGdh4f4Z2qjsOR2Ib7QvHfg0OtVzM",
			authDomain: "work-schedule-dc5aa.firebaseapp.com",
			databaseURL: "https://work-schedule-dc5aa-default-rtdb.europe-west1.firebasedatabase.app",
			projectId: "work-schedule-dc5aa",
			storageBucket: "work-schedule-dc5aa.firebasestorage.app",
			messagingSenderId: "1027800982553",
			appId: "1:1027800982553:web:6b60be4c4ddc99a5a83688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export functions for use in other files
export {
    database,
    ref,
    set,
    onValue
};
