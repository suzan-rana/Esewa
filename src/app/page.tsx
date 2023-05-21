"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const amtValue = useRef<HTMLInputElement>(null);
  const txAmtValue = useRef<HTMLInputElement>(null);
  const pscValue = useRef<HTMLInputElement>(null);
  const pdcValue = useRef<HTMLInputElement>(null);

  return (
    <main className="flex min-h-screen  min-w-[50%] flex-col items-center ">
      <h1 className="font-bold text-3xl my-8 text-gray-200">Hello, User</h1>
      <form
        className="flex flex-col gap-6 min-w-[40%]"
        action="https://uat.esewa.com.np/epay/main"
        method="POST"
      >
        <label className="flex flex-col gap-2" htmlFor="">
          <span className="text-gray-400">Amount</span>
          <input
          readOnly
            placeholder="Base Amount"
            name="amt"
            value={"85"}
            className="px-4 py-3 bg-slate-900 border border-slate-500 rounded-md"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span className="text-gray-400">Tax Amount</span>
          <input readOnly
            placeholder="Tax Amount"
            name="txAmt"
            value={"10"}
            className="px-4 py-3 bg-slate-900 border border-slate-500 rounded-md"
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span className="text-gray-400">Product service charge</span>
          <input readOnly
            placeholder="Product Service Charge"
            name="psc"
            value={"2"}
            className="px-4 py-3 bg-slate-900 border border-slate-500 rounded-md"
          />{" "}
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span className="text-gray-400">Product Delivery Charge</span>
          <input readOnly
            value={"3"}
            placeholder="Product Delivery Charge"
            name="pdc"
            className="px-4 py-3 bg-slate-900 border border-slate-500 rounded-md"
          />{" "}
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span className="text-gray-400">Total Amount</span>
          <input readOnly
            type="number"
            placeholder="Total Amount"
            name="tAmt"
            value={"100"}
            className="px-4 py-3 bg-slate-900 border border-slate-500 rounded-md"
          />{" "}
        </label>
        <input value="EPAYTEST" name="scd" type="hidden" />
        <input
          value={`${Date.now()}--${
            Math.random() * 10
          }--${Date.now()}-fjlkawf-SuzanRana`}
          name="pid"
          type="hidden"
        />
        <input
          value={process.env.NEXT_PUBLIC_ESEWA_SUCCESS_URL}
          type="hidden"
          name="su"
        />
        <input
          value={process.env.NEXT_PUBLIC_ESEWA_FAILURE_URL}
          type="hidden"
          name="fu"
        />
        <input
          className="bg-white px-5 text-black cursor-pointer py-3 rounded-md"
          value="Pay 100$ with Esewa"
          type="submit"
        />
      </form>
    </main>
  );
}
