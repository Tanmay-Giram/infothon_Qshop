"use client";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { m } from "framer-motion";

const firebaseConfig = {
  apiKey: "AIzaSyBkw33UFrhlAqz7jCQmkp4WA7BR-5KPtOc",
  authDomain: "infothon-2.firebaseapp.com",
  projectId: "infothon-2",
  storageBucket: "infothon-2.appspot.com",
  messagingSenderId: "140269448929",
  appId: "1:140269448929:web:887771b1cb160dc30451a0",
  measurementId: "G-J66066Z0R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const getData = async (data: any) => {
  var db = getFirestore(app);
  var name = "",
    email = "",
    address = "";

  for (let entry of data) {
    console.log(entry[0], entry[1]);
    if (entry[0] == "name") {
      name = entry[1];
    }
    if (entry[0] == "email") email = entry[1];
    if (entry[0] == "Shipping Address") address = entry[1];
  }
  try {
    await setDoc(doc(db, "users", email), {
      name: name,
      email: email,
      "Shipping Address": address,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default function Profile() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1>Contact form</h1>
        <form
          method="POST"
          action={getData}
          className="text-base text-primeColor border-[1px] border-black px-6 rounded-md"
        >
          <div className="my-2">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border-[1px] border-black rounded-md px-2 py-1"
            />
          </div>

          <div className="my-2">
            <label className="block">Email</label>
            <input
              type="text"
              name="email"
              className="w-full border-[1px] border-black rounded-md px-2 py-1"
            />
          </div>

          <div className="my-2">
            <label className="block">Shipping Address</label>
            <textarea
              name="Shipping Address"
              className="w-full border-[1px] border-black rounded-md px-2 py-1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-slate-100 w-full py-2 text-base font-semibold hover:bg-primeColor duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
