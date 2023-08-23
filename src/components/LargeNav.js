import React from "react";
import Link from "next/link";
import { capitalize } from "lodash";
import { caffeineMono, majorMono } from "@/assets/fonts/fonts";

const pages = ["about", "portfolio", "commissions", "contact"];

const getTitle = (path) => {
  const title = path.split("/").pop();

  if (pages.includes(title)) {
    return capitalize(title);
  }
  return "nah";
};

export default function LargeNav({ path }) {
  const title = getTitle(path);

  return (
    <div className="z-100 relative mx-8 hidden justify-center text-slate-400 sm:flex">
      <div className="my-8 flex flex-1 items-center justify-between md:gap-8 xl:max-w-[70%]">
        <Link
          href="/"
          className={`text-white ${majorMono.className} link max-w-min cursor-pointer text-3xl md:max-w-max`}>
          ZEV ROSS
        </Link>
        <div
          className={`relative max-w-min overflow-hidden ${caffeineMono.className}`}>
          <div className="flex translate-y-[4px] items-center gap-4 px-8 md:gap-8">
            {pages.map((page) => (
              <Link className="link" key={page} href={page}>
                {capitalize(page)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
