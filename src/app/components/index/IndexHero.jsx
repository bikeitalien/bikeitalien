"use client";
import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";

const IndexHero = () => {
  const handleScroll = () => {
    document.getElementById("next-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="relative col-[full] grid h-[700px] grid-cols-1 grid-rows-1 overflow-hidden">
        <Image
          className="col-start-1 row-start-1 h-full w-full object-cover"
          priority
          src="/assets/herobikeitalien.webp"
          alt="Hero Image"
          width={1920}
          height={1080}
        />

        <div className="z-10 col-start-1 row-start-1 grid place-items-center items-center px-4 text-center">
          <div className="max-w-xl space-y-4">
            <h1 className="text-(--text-secondary)! italic md:flex md:justify-center md:whitespace-nowrap">
              <span className="font-bold">Cykelferier</span> så livet kan mærkes
            </h1>
            <h6 className="text-(--text-secondary)!">
              Oplev verden fra sadlen med håndplukkede ruter, stærkt fællesskab
              og cykelferier ud over det sædvanlige.
            </h6>
            <div className="flex justify-center pt-11">
              <Button
                href="/rejser"
                variant="accent"
                className="w-fit place-content-center"
              >
                Se alle cykelrejser
              </Button>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center text-(--text-secondary)!"
          onClick={handleScroll}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <Image
                src="/assets/polygon.svg"
                alt="Scroll down"
                width={50}
                height={50}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default IndexHero;
