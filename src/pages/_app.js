import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import AnimationContext from "../components/AnimationContext";
import { AnimatePresence } from "framer-motion";
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
      <div className={`h-full w-full  ${workSans.className}`}>
        <AnimatePresence mode="wait">
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}
