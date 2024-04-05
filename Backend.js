/* import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
//import { getDatabase } from "firebase/database";


import { getDatabase, ref, set } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //...
    apiKey: "AIzaSyAQSLYkKF_Z8uz5c1Eh5iO5gS-dqnQkbh0",
    authDomain: "roomies-test-d196d.firebaseapp.com",
    projectId: "roomies-test-d196d",
    storageBucket: "roomies-test-d196d.appspot.com",
    messagingSenderId: "133731129448",
    appId: "1:133731129448:web:d4fc47b1e1482ef356c3dd",
    measurementId: "G-22QCWMZ0JL",
    databaseURL: "https://roomies-test-d196d-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
console.log("sgjsgj"); */

async function getDetails() {
    // Make a GET request using fetch
    fetch('https://roomies-test-d196d-default-rtdb.firebaseio.com/main.json')
        .then(response => {
            // Check if the response is successful (status code 200)
            if (response.ok) {
                // Parse the JSON response
                return response.json();
            } else {
                // If response is not successful, throw an error
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            // Log the data to the console
            console.log(data);
        })
        .catch(error => {
            // Log any errors to the console
            console.error('Error:', error);
        });

}
getDetails();