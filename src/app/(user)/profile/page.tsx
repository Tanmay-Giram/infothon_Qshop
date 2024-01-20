"use client";
import { useState, useEffect } from "react";

const getData = (data: any) => {
  for (let entry of data) {
    // Process data here
    console.log(entry)
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
