import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import AnimationContext from "../components/AnimationContext";
import { AnimatePresence } from "framer-motion";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <div className="noise" />
      <div
        className={`background-global -z-1- ${workSans.className}`}
        style={{ height: "100vh", width: "100vw" }}>
        <AnimatePresence mode="wait">
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}
