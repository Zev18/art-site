import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import { majorMono } from "@/assets/fonts/fonts";
import cloudinary from "../../cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";

const cdn =
  "https://cxqsrzesyspnafmuyqyp.supabase.co/storage/v1/object/public/images/public/";

export default function Portfolio({ images }) {
  let [open, setOpen] = useState(null);

  return (
    <>
      <div className="relative flex h-full w-full flex-col text-white">
        <div className="flex w-full justify-center p-8 pb-0">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { delay: 0.1 } }}
            className="w-full rounded-lg border-4 border-slate-700 bg-slate-800 p-4">
            <h1 className={`text-2xl font-bold ${majorMono.className}`}>
              portfolio
            </h1>
            <p className="text-slate-400">My works</p>
          </motion.div>
        </div>
        <motion.div className="grid w-full grid-cols-1 gap-6 p-10">
          {images.map((image) => (
            <Thumbnail
              key={image.id}
              blurDataUrl={image.blurDataUrl}
              height={image.height}
              width={image.width}
              image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${image.public_id}.${image.format}`}
              setOpen={() => setOpen(image)}
            />
          ))}
        </motion.div>
      </div>
      <AnimatePresence className="relative z-[150]" key="carouselPresence">
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ease: easeIn, duration: 0.1 },
              }}
              exit={{
                opacity: 0,
                transition: { ease: easeOut, duration: 0.1 },
              }}
              key="carousel"
              className="fixed inset-0 bg-black/30 backdrop-blur"
            />

            <div
              className="fixed inset-0 flex items-center justify-center"
              onClick={() => setOpen("")}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { ease: easeIn },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { ease: easeOut },
                }}
                className="relative flex h-[90vh] w-[80vw] flex-col justify-center overflow-hidden">
                <Image
                  alt={open.id}
                  placeholder="blur"
                  blurDataURL={open.blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${open.public_id}.${open.format}`}
                  width={open.width}
                  height={open.height}
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Thumbnail({ image, setOpen, blurDataUrl, height, width }) {
  const [loading, setLoading] = useState(true);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      className="relative h-full max-w-max overflow-hidden rounded-lg bg-slate-600"
      onClick={setOpen}>
      <Image
        alt=""
        style={{ transform: "translate3d(0, 0, 0)" }}
        src={image}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        width={width}
        height={height}
        className={` duration-200 ease-in-out group-hover:opacity-75
          ${loading ? "scale-110 blur" : "scale-100 blur-0"}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </motion.button>
  );
}

export async function getStaticProps() {
  const results = await cloudinary.search
    .expression(`folder:illustrations/*`)
    .sort_by("created_at", "desc")
    .max_results(100)
    .execute();
  let i = 0;

  let reducedResults = [];

  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
