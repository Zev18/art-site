import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import LargeNav from "@/components/LargeNav";
import SmallNav from "@/components/SmallNav";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <div className="noise" />
      <div className="-z-2 fixed h-full w-full bg-black" />
      <div
        className={`background-global -z-1 fixed`}
        style={{ height: "100vh", width: "100vw" }}
      />
      <SmallNav path={router.pathname} />
      <div className="flex h-full w-full flex-col">
        <LargeNav path={router.pathname} />
        <div className={`w-full flex-1 ${workSans.className}`}>
          <AnimatePresence mode="wait" key="mainAnimatePresence">
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
