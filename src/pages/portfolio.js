import { useCallback, useEffect } from "react";
import { majorMono } from "@/assets/fonts/fonts";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import cloudinary from "../../cloudinary";

const cdn =
  "https://cxqsrzesyspnafmuyqyp.supabase.co/storage/v1/object/public/images/public/";

export default function Portfolio({ images }) {
  let [open, setOpen] = useState(null);
  let [selectedImage, setSelectedImage] = useState(0);

  const setOpenImage = (image, index) => {
    setOpen(image), setSelectedImage(index);
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key == "ArrowLeft" && open && selectedImage > 0) {
        setOpenImage(images[selectedImage - 1], selectedImage - 1);
      } else if (
        event.key == "ArrowRight" &&
        open &&
        selectedImage < images.length - 1
      ) {
        setOpenImage(images[selectedImage + 1], selectedImage + 1);
      } else if (event.key == "Escape" && open) {
        setOpen("");
      }
    },
    [images, open, selectedImage]
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className="relative flex h-full w-full flex-col text-white">
        <div className="flex w-full p-8 pb-0">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { delay: 0.1 } }}
            className="w-full rounded-lg border-4 border-slate-700 bg-slate-800 p-4 md:max-w-max md:px-10 xl:mx-[5%]">
            <h1 className={`text-2xl font-bold ${majorMono.className}`}>
              portfolio
            </h1>
            <p className="text-slate-400">My works</p>
          </motion.div>
        </div>
        <motion.div className="mb-[10rem] grid w-full grid-cols-1 items-center gap-6 self-center p-10 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[80%] xl:grid-cols-4">
          {images.map((image, index) => (
            <Thumbnail
              key={image.id}
              blurDataUrl={image.blurDataUrl}
              height={image.height}
              width={image.width}
              image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${image.public_id}.${image.format}`}
              setOpen={() => setOpenImage(image, index)}
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
              className="fixed inset-0 z-0 flex w-full items-center justify-between"
              onClick={() => setOpen("")}>
              {selectedImage > 0 && (
                <motion.div
                  className="z-10 grow cursor-pointer p-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenImage(images[selectedImage - 1], selectedImage - 1);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { ease: easeIn, delay: 0.2, duration: 0.05 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { ease: easeOut, delay: 0.05 },
                  }}>
                  <ChevronLeft />
                </motion.div>
              )}
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
                className="relative m-[5vmin] flex max-h-[90%] max-w-full select-none justify-center"
                style={{ aspectRatio: `${open.width}/${open.height}` }}>
                <Image
                  alt={open.id}
                  placeholder="blur"
                  quality={100}
                  blurDataURL={open.blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1080/${open.public_id}.${open.format}`}
                  className="rounded-lg object-contain"
                  width={open.width}
                  height={open.height}
                />
              </motion.div>
              {selectedImage < images.length - 1 && (
                <motion.div
                  className="z-10 flex grow cursor-pointer justify-end p-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenImage(images[selectedImage + 1], selectedImage + 1);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { ease: easeIn, delay: 0.2, duration: 0.05 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { ease: easeOut, delay: 0.05 },
                  }}>
                  <ChevronRight />
                </motion.div>
              )}
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
      className="relative max-w-max overflow-hidden rounded-lg bg-slate-600"
      onClick={setOpen}>
      <Image
        alt=""
        style={{ transform: "translate3d(0, 0, 0)" }}
        src={image}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        width={width}
        height={height}
        className={`object-cover duration-200 ease-in-out
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
