"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import WordReveal from "./WordReveal";

const text =
  "BikeItalien arrangerer personlige cykelrejser for mennesker, der søger mere end bare en ferie. Fra de italienske bjergpas til eventyr i Jordan og Nepal skabes oplevelser med fokus på fællesskab, natur og kultur. Turene er planlagt ned til detaljen, så du kan slippe bekymringerne og nyde rejsen, ruterne og menneskene omkring dig. Her handler det ikke kun om at nå frem, men om at opleve noget undervejs.";

const TextRevealSection = () => {
  const ref = useRef(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 50%"],
  });

  return (
    <section ref={ref} className="col-[full] grid grid-cols-subgrid">

        <Image
          src="/assets/backgroundIllu.svg"
          alt=""
          width={2000}
          height={1200}
          className="col-[full] row-start-1 h-full w-full object-cover"
        />

        <div className="col-[content] row-start-1 grid max-w-2xl gap-6 py-32">
          <p>Hvad er BikeItalien?</p>

          <h5 className="text-[var(--h2-size)]">
            {words.map((word, index) => (
              <WordReveal
                key={`${word}-${index}`}
                word={word}
                index={index}
                totalWords={words.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </h5>
        </div>
      
    </section>
  );
};

export default TextRevealSection;
