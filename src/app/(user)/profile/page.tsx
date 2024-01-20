"use client";
import { useState, useEffect } from "react";
import firebase from "@/lib/firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";

const getData = async (data: any) => {
  const db = firebase.firestore();

  for (let entry of data) {
    console.log(entry[0], entry[1]);
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
