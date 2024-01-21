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
    <div>
      <h1>Contact form</h1>
      <form
        method="POST"
        action={getData}
        className="relative w-fit flex-col h-fit text-base text-primeColor border-[1px] border-black items-center gap-2 justify-evenly px-6 rounded-md"
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="relative flex w-fit h-fit text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="relative flex w-fit h-fit text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md"
          />
        </div>
        <div>
          <label>Shipping Address</label>
          <textarea
            name="Shipping Address"
            className="relative flex w-fit h-fit text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black align-middle text-slate-100 w-fit h-fit  text-base font-semibold hover:bg-primeColor duration-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
