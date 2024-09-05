"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  const pathName: string = usePathname();
  return (
    <div className=" h-screen ">
      <h2 className=" text-3xl font-semibold">BcL</h2>
      <ul>
        <li
          className={clsx(` my-2 hover:bg-gray-500 px-1 py-1 rounded-sm`, {
            "bg-sky-100 text-blue-600": pathName === "/dashboard",
          })}
        >
          <Link href={"/dashboard"}>Home</Link>
        </li>
        <li
          className={clsx(` my-2 hover:bg-gray-500 px-1 py-1 rounded-sm`, {
            "bg-sky-100 text-blue-600": pathName === "/dashboard/invoice",
          })}
        >
          {" "}
          <Link href={"/dashboard/invoice"}>Invoice</Link>
        </li>
        <li
          className={clsx(` my-2 hover:bg-gray-500 px-1 py-1 rounded-sm`, {
            "bg-sky-100 text-blue-600": pathName === "/dashboard/customers",
          })}
        >
          {" "}
          <Link href={"/dashboard/customers"}>Customers</Link>
        </li>
        <li
          className={clsx(` my-2 hover:bg-gray-500 px-1 py-1 rounded-sm`, {
            "bg-sky-100 text-blue-600": pathName === "/dashboard/vouchers",
          })}
        >
          <Link href={"/dashboard/vouchers"}>Vouchers</Link>
        </li>
        <li className=" my-2 hover:bg-gray-500 px-1 py-1 mt-[30rem] rounded-sm">
          SignOut
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
