import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCvcUugYuYQcK6zVYmlqxyyaBGPHSmlTQ",
  authDomain: "gupta-cosmetic-shop.firebaseapp.com",
  databaseURL: "https://gupta-cosmetic-shop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gupta-cosmetic-shop",
  storageBucket: "gupta-cosmetic-shop.firebasestorage.app",
  messagingSenderId: "648214036605",
  appId: "1:648214036605:web:dc541d3d7e21f5f072b114"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log("Firebase Connected Successfully");
