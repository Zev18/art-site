import { caffeineMono, majorMono } from "@/assets/fonts/fonts";
import Metadata from "@/components/Metadata";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronLeft, ChevronRight } from "react-feather";
import { A11y, Keyboard, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import cloudinary from "../../cloudinary";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/zoom";

export default function Portfolio({ images }) {
  let [open, setOpen] = useState(null);
  let [selectedImage, setSelectedImage] = useState(0);

  const setOpenImage = (image, index) => {
    setOpen(image), setSelectedImage(index);
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key == "Escape" && open) {
        setOpen("");
      }
    },
    [open]
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  // swiper functions
  const sliderRef = useRef(null);
  const [currIndex, setCurrIndex] = useState(0);

  const handlePrev = useCallback((e) => {
    e.stopPropagation();
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Metadata pageName="Portfolio" />
      <div className="relative mb-[10rem] flex h-full w-full flex-col text-white">
        <div className="flex w-full p-8 pb-0">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { delay: 0.1 } }}
            className="w-full rounded-lg border-4 border-slate-700 bg-slate-800 p-4 md:max-w-max md:px-10 xl:mx-[5%] xl:ml-[10%]">
            <h1 className={`text-2xl font-bold ${majorMono.className}`}>
              portfolio
            </h1>
            <p className="text-slate-400">My works</p>
          </motion.div>
        </div>
        <motion.div className="grid w-full grid-cols-1 items-center gap-6 self-center p-10 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[80%] xl:grid-cols-4">
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

        <div className="my-6 flex w-full items-center justify-center">
          <motion.div
            className={`${caffeineMono.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}>
            <Link
              href="#"
              className="group flex items-center justify-center gap-4">
              Back to top{" "}
              <ArrowUp className="transition-all duration-200 group-hover:translate-y-[-0.25rem]" />
            </Link>
          </motion.div>
        </div>
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

            {
              <motion.div
                className="fixed inset-0 z-0 flex h-full w-full flex-col pb-[20%] sm:items-center sm:justify-center sm:pb-0"
                onClick={() => setOpen("")}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}>
                <Swiper
                  ref={sliderRef}
                  initialSlide={selectedImage}
                  modules={[Zoom, Keyboard, A11y]}
                  enabled={open}
                  keyboard
                  zoom
                  onRealIndexChange={(swiper) => setCurrIndex(swiper.realIndex)}
                  className={`w-full sm:h-full ${
                    open ? "opacity-100" : "opacity-0"
                  } transition-all duration-100`}>
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative flex h-full w-full flex-col items-center justify-center gap-16 overflow-hidden p-4 sm:p-14">
                        <Image
                          alt={image.id}
                          placeholder="blur"
                          quality={100}
                          blurDataURL={image.blurDataUrl}
                          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1080/${image.public_id}.${image.format}`}
                          className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
                          width={image.width}
                          height={image.height}
                          priority
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <motion.div
                  className="flex w-full items-center justify-evenly sm:pb-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: 0.2, duration: 0.3 },
                  }}>
                  <button
                    className="group rounded bg-white p-4 py-2 text-black"
                    onClick={handlePrev}
                    aria-label="previous image">
                    <ChevronLeft className="duration-100 sm:group-hover:-translate-x-1" />
                  </button>
                  <p className="w-[5rem] text-center">
                    {currIndex + 1} / {images.length}
                  </p>
                  <button
                    className="group rounded bg-white p-4 py-2 text-black"
                    onClick={handleNext}
                    aria-label="next image">
                    <ChevronRight className="duration-100 sm:group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </motion.div>
            }
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
    revalidate: 60,
  };
}
