"use client";
import Image from "next/image";

import TimelineItem from "./TimelineItem";

const items = [
  {
    year: "2000'erne",
    title: "Drømmen om Italien tager form",
    text: "Joachim flytter til Italien og forelsker sig i bjergene, kulturen og den italienske livsstil. Her begynder idéen om at kombinere cykling, natur og gode oplevelser.",
  },
  {
    year: "2007",
    title: "Bike Italien bliver født",
    text: "Med en stærk passion for cykling og Italien starter han Bike Italien. Målet er enkelt: at skabe cykelferier med sjæl, nærvær og lokalkendskab, ikke standardrejser.",
  },
  {
    year: "2010'erne",
    title: "Rejserne vokser",
    text: "Ture i Gardasøen, Dolomitterne og resten af Italien bliver udviklet. Konceptet tager form: små grupper, stærke oplevelser, god mad og autentiske steder, altid med Joachim som guide og vært.",
  },
  {
    year: "I dag",
    title: "Et cykelunivers med personlighed",
    text: "Bike Italien er et rejseunivers for familier, motionister og eventyrere. Joachim er stadig den gennemgående figur som guide og vært med fokus på fællesskab, sikkerhed og gode oplevelser.",
  },
];

const AboutTimeline = () => {
  return (
    <>
      <section className="col-[content] my-36 grid grid-cols-2">
        <div className="sticky top-24 h-fit">
          <p className="mb-4 font-semibold">Vores historie</p>
          <h3 className="mb-4">Historien bag BikeItalien</h3>
          <p className="mb-7.5">
            Bike Italien blev startet i 2007. Det begyndte med cykelferier i
            Norditalien for familier og motionister, men er siden vokset til
            både mountainbike-, landevejs- og eventyrrejser i store dele af
            verden.
          </p>
          <Image
            src="/assets/nepal.webp"
            alt="Nepal"
            width={1920}
            height={1080}
            className="h-80 rounded-[20px] object-cover"
          />
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              length={items.length}
            />
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 1, y: 40 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.7, ease: "easeOut" }}
            //   viewport={{ amount: 0.4 }}
            //   className="grid min-h-[50vh] grid-cols-[40px_1fr] gap-8"
            // >
            //   <div className="flex flex-col items-center">
            //     <div className="h-7 w-7 rounded-full bg-(--accent)" />

            //     {index !== items.length && (
            //       <div className="my-4 h-40 w-0.5 bg-(--background-secondary)" />
            //     )}
            //   </div>

            //   <div className="sticky top-24 h-fit pb-24">
            //     <p className="mb-4 text-sm font-semibold">{item.year}</p>

            //     <h5 className="mb-4 leading-tight font-semibold">
            //       {item.title}
            //     </h5>

            //     <p className="leading-relaxed">{item.text}</p>
            //   </div>
            // </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutTimeline;
