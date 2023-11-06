"use client";

import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import { easeInOut, easeOut, motion, useScroll } from "framer-motion";
import Image from "next/image";
import ZevPortrait from "../../public/zev.webp";
import Metadata from "@/components/Metadata";

function yearsSinceBirthday() {
  const date = new Date("2001-07-10");
  const currentDate = new Date();
  const yearDifference = currentDate.getFullYear() - date.getFullYear();

  // Check if the current month and day is before the date's month and day
  const isBeforeMonthDay =
    currentDate.getMonth() < date.getMonth() ||
    (currentDate.getMonth() === date.getMonth() &&
      currentDate.getDate() < date.getDate());

  // Subtract 1 from the year difference if the current date is before the date's month and day
  const yearsPassed = isBeforeMonthDay ? yearDifference - 1 : yearDifference;

  return yearsPassed;
}

export default function About() {
  const { scrollY } = useScroll();

  return (
    <>
      <Metadata pageName="About" />
      <motion.div className="relative flex max-h-min w-full flex-col items-center justify-center overflow-hidden duration-200 xl:flex-row xl:py-20">
        <motion.div
          style={{ translateY: scrollY }}
          className="z-0 m-8 sm:max-w-xl xl:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: easeInOut, duration: 0.2 }}>
          <Image
            priority
            src={ZevPortrait}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAABAAAAAQAAAAEAAAAB/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADwAUAwEiAAIRAQMRAf/EABkAAAIDAQAAAAAAAAAAAAAAAAAGAgMHCP/EACUQAAICAQMDBAMAAAAAAAAAAAECAwQRAAUGITFRBxITFTJBcf/EABYBAQEBAAAAAAAAAAAAAAAAAAUDBv/EAB0RAQACAQUBAAAAAAAAAAAAAAECAwAEBRETIUH/2gAMAwEAAhEDEQA/AJbxHPV4rbfbrEFfcHiK1Wlx1c/oA92xnA840rele83jc3GtyHe45afsiFVrkyh/lYtlQxxk4Gcaqebl9jkBsQ7TWtrEcbes1kCKDzJ7QQS5Hnt41kXJbm5ryq798Ee2lhjMMKVRy3cAdMdh/NbncNZZXcWogee8g4dVUSixc6Uv7ZEbLEKNGkfbPU+jJSj+0imS0qhXMKAq2B+XUjGfGjS8N00zEewyHXM+Z//Z"
            alt="Portrait of Zev Ross"
            className="rounded-xl object-cover xl:hidden"
          />
        </motion.div>
        <motion.div
          className="z-0 m-8 hidden sm:max-w-xl xl:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: easeInOut, duration: 0.2 }}>
          <Image
            priority
            src={ZevPortrait}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAABAAAAAQAAAAEAAAAB/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgADwAUAwEiAAIRAQMRAf/EABkAAAIDAQAAAAAAAAAAAAAAAAAGAgMHCP/EACUQAAICAQMDBAMAAAAAAAAAAAECAwQRAAUGITFRBxITFTJBcf/EABYBAQEBAAAAAAAAAAAAAAAAAAUDBv/EAB0RAQACAQUBAAAAAAAAAAAAAAECAwAEBRETIUH/2gAMAwEAAhEDEQA/AJbxHPV4rbfbrEFfcHiK1Wlx1c/oA92xnA840rele83jc3GtyHe45afsiFVrkyh/lYtlQxxk4Gcaqebl9jkBsQ7TWtrEcbes1kCKDzJ7QQS5Hnt41kXJbm5ryq798Ee2lhjMMKVRy3cAdMdh/NbncNZZXcWogee8g4dVUSixc6Uv7ZEbLEKNGkfbPU+jJSj+0imS0qhXMKAq2B+XUjGfGjS8N00zEewyHXM+Z//Z"
            alt="Portrait of Zev Ross"
            className="rounded-xl object-cover"
          />
        </motion.div>

        <motion.div
          className="relative z-20 flex w-full max-w-prose flex-col items-center"
          initial={{ y: 100, scale: 0.8, opacity: 0 }}
          animate={{
            y: 0,
            scale: 1,
            opacity: 1,
            transition: { ease: easeInOut, duration: 0.3 },
          }}
          exit={{
            y: 50,
            scale: 1,
            opacity: 0,
            transition: { ease: easeOut, duration: 0.2 },
          }}>
          <motion.div className="mx-8 mb-32 min-h-max overflow-x-visible rounded-xl bg-slate-800/80 text-slate-400 backdrop-blur xl:mb-0">
            <div className="flex items-center justify-between gap-3 px-6 py-4">
              <h1 className={`${majorMono.className} text-2xl text-white`}>
                ZEV ROSS
              </h1>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <p className={`${caffeineMono.className} translate-y-1`}>
                //profile
              </p>
            </div>
            <div
              className={`relative text-white ${caffeineMono.className} bg-gray-950 p-4`}>
              <ul className="border-l-2 pl-4">
                <li>
                  <p>{yearsSinceBirthday()} years old</p>
                </li>
                <li>
                  <p>Jewish</p>
                </li>
                <li>
                  <p>Canadian-American</p>
                </li>
                <li>
                  <p>
                    ENG /<span className="font-mono"> עבר </span>/ 日本語
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-6 pt-4">
              <p
                className={`text-xl font-bold text-white ${majorMono.className}`}>
                {"My name is Zev, and i'm an artist."}
              </p>{" "}
              <p>{`I started getting into art in July
              2017 at the age of 16, when I was reading a comic I liked so much
              that it made me want to make some fanart for it. I've been making art ever since then.`}</p>
              <p>{` I've come a long way, though. I've managed to gain a
              small following on social media over the years, which has helped me
              stay motivated and continue to practice and improve my skills. It
              has proven to be a great place for me to not only express myself,
              but also a great place to make friends.`}</p>
              <p>{`Now I'm in college. And although I don't plan on pursuing art professionally, I know it will be a part of me for the rest of my life.`}</p>
              <div className="my-2 h-[2px] w-[30%] self-center rounded-full bg-slate-400 opacity-60" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
