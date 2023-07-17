import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  AlignLeft,
  ArrowLeft,
  DollarSign,
  Grid,
  HelpCircle,
  Image as Picture,
} from "react-feather";
import { capitalize } from "lodash";
import { caffeineMono } from "@/assets/fonts/fonts";
import { Popover, Transition } from "@headlessui/react";

const pages = ["about", "portfolio", "commissions", "faq"];
const icons = [
  <AlignLeft key="alignLeft" />,
  <Picture key="picture" />,
  <DollarSign key="dollarSign" />,
  <HelpCircle key="helpCircle" />,
];

const getTitle = (path) => {
  const title = path.split("/").pop();

  if (pages.includes(title)) {
    return title === "faq" ? "FAQ" : capitalize(title);
  }
  return "nah";
};

export default function SmallNav(props) {
  const { path, className } = props;
  const [open, setOpen] = useState(false);

  const title = getTitle(path);

  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && menuRef.current.contains(e.target)) {
        console.log("test");
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler, false);

    return () => {
      document.removeEventListener("mousedown", handler, false);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .navButton {
          border: solid #868b90;
          border-radius: 0.5rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .navButton > p {
          opacity: 80%;
        }
      `}</style>

      <AnimatePresence>
        {title !== "nah" && (
          <motion.div
            className={`${className} ${caffeineMono.className} fixed z-[100] flex h-full w-full`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            key="smallNav">
            <Popover className="relative bottom-0 w-full">
              <div className="absolute inset-x-0 bottom-0 flex justify-center transition-all duration-100">
                <div className="mb-4 flex max-w-max items-center justify-center gap-4 rounded-full bg-black/60 p-4 backdrop-blur">
                  <Link
                    href={"/"}
                    className="duration-100 hover:opacity-60"
                    scroll={false}>
                    <ArrowLeft />
                  </Link>
                  <p>{title}</p>
                  <Popover.Button>
                    <Grid onClick={() => setOpen(!open)} />
                  </Popover.Button>
                </div>
              </div>

              <Transition
                className="absolute inset-x-0 bottom-0"
                enter="transition duration-200 ease-out"
                enterFrom="transform translate-y-[100%] opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform translate-y-[100%] opacity-0">
                <Popover.Panel>
                  {({ close }) => (
                    <motion.div
                      className={`grid w-full grid-cols-2 grid-rows-2 gap-4 rounded-t-xl bg-black/60 p-4 backdrop-blur`}
                      key="smallMenu"
                      ref={menuRef}>
                      {pages.map((page, index) => (
                        <Link href={page} onClick={() => close()} key={page}>
                          <div className="navButton">
                            {icons[index]}
                            <p>{capitalize(page)}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </Popover.Panel>
              </Transition>
            </Popover>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
