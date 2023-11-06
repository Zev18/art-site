import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function Error404() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative flex h-full w-full max-w-md flex-col gap-10 text-white">
        <div>
          <h1
            className={`${majorMono.className} my-2 bg-white p-2 text-6xl text-black`}>
            404
          </h1>
          <p>{"That's an error."}</p>
        </div>
        <div className={`${caffeineMono.className} text-sm`}>
          <p>{"It seems like the page you're looking for doesn't exist."}</p>
          <p>
            {"Lost child... why don't you "}
            <Link href="/" className="text-cyan-400">
              go home?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
