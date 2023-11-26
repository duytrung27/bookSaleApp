"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";

function Nav() {
  const [activeItem, setActiveItem] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const items = [
    {
      label: "Explorer",
      href: "/",
      active: 0,
    },
    {
      label: "Shop",
      href: "/",
      active: 1,
    },
    {
      label: "Blog",
      href: "/",
      active: 2,
    },
  ];

  return (
    <div className="z-50 container flex absolute left-2/4 -translate-x-2/4 top-0 pt-[10px] md:pt-[33px] items-center justify-between h-[58px]">
      <div>
        <h1
          className="text-[16px] md:text-[18px] cursor-pointer"
          onClick={() => router.push("/ ")}
        >
          <span className="font-extrabold text-[20px] md:text-[28px]">
            HD Book{" "}
          </span>
          Store
        </h1>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <ul className="hidden md:flex items-center gap-10 text-white">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`hover:opacity-80 text-[16px] ${
                activeItem === item.active
                  ? "font-bold border-b pb-1 border-b-white"
                  : ""
              }`}
              onClick={() => setActiveItem(item.active)}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer transition duration-200 hover:scale-105 font-semibold bg-white shadow-md text-[14px] md:text-[18px] px-6 md:px-10 py-1 rounded-3xl">
          Login
        </div>
        <RxHamburgerMenu
          color="white"
          className={`${!openMenu ? "visible" : "invisible"} md:hidden`}
          size={30}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      {openMenu && (
        <div className="relative md:hidden">
          <ul
            className={`p-10 animate__animated animate__fadeInRight flex flex-col rounded-[10px] bg-white shadow-md fixed top-0 right-0 w-3/4 h-screen`}
          >
            <IoMdCloseCircle
              className="absolute top-0 right-0 mr-5 mt-5"
              size={30}
              onClick={() => setOpenMenu(false)}
            />
            {items.map((item, i) => (
              <li
                key={i}
                className={`p-5 border-b-[1px] border-gray-200 ${
                  activeItem === item.active ? "font-bold" : ""
                }`}
                onClick={() => {
                  setOpenMenu(false);
                  setActiveItem(item.active);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
