"use client";
import Dropzone from "@/components/Dropzone";
import { Cover } from "@/components/ui/cover";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-full mx-auto max-w-screen-lg px-8 md:px-20 pt-8 pb-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="space-y-16"
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2">
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="space-y-4"
            >
              <h1 className="text-[27px] sm:text-4xl md:text-5xl font-bold text-center text-white">
                 Fast & Easy <Cover> File Conversions </Cover>
              </h1>
              <h1 className="text-[27px] sm:text-4xl md:text-5xl font-bold text-center text-white">
                Anytime, Anywhere
              </h1>
            </motion.div>
          </div>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-white/60 text-base sm:text-lg text-center md:px-24"
          >
            A versatile file converter that supports converting images, videos, and audio files to various formats. Easy to use, fast, and reliable for all your media conversion needs.
          </motion.p>
        </div>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <Dropzone />
        </motion.div>
      </motion.div>
    </main>
  );
}
