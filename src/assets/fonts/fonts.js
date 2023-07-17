import localFont from "next/font/local";

export const majorMono = localFont({
  src: "./MajorMonoDisplay-Regular.ttf",
  display: "swap",
  variable: "--font-major-mono",
});

export const caffeineMono = localFont({
  src: "./CaffeineMono.otf",
  display: "swap",
  variable: "--font-caffeine-mono",
});
