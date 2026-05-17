import Image from "next/image";

const ImageCardSection = ({ rejse }) => {
  return (
    <section className="md:py-36 py-18 col-[content]">
      <div className="grid gap-10">
        <div className="grid grid-cols-2 justify-between">
          <div>
            <p>{rejse.oplevelse_tagline}</p>
            <h3>{rejse.oplevelse_titel}</h3>
          </div>

          <p className="max-w-[65ch]">{rejse.oplevelse_beskrivelse}</p>
        </div>

        <div className="flex flex-wrap gap-6">
          {rejse.oplevelse.map((oplevelse) => (
            <article
              key={oplevelse.id}
              className="flex min-w-[280px] flex-1 flex-col gap-4"
            >
              {/* <Image
                src={`/assets/${oplevelse.id}.webp`}
                alt={oplevelse.titel}
              /> */}
              <Image
                src="/assets/frankerstien.webp"
                width={400}
                height={200}
                alt={oplevelse.titel}
                className="w-full rounded-[20px] object-cover"
              />
              <h5 className="font-semibold">{oplevelse.titel}</h5>
              <p className="text-grey-400 text-sm leading-relaxed">
                {oplevelse.beskrivelse}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardSection;
