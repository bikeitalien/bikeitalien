import Image from "next/image";

const ImageCardSection = ({ rejse }) => {
  return (
    <section
      className="col-[content] py-18 md:py-36"
      id="oplevelser"
      scroll-mt-32
    >
      <div className="grid gap-10">
        <div className="grid md:grid-cols-2 grid-cols-1  items-center justify-between gap-6">
          <div>
            <p>{rejse.oplevelse_tagline}</p>
            <h3 className="font-semi">{rejse.oplevelse_titel}</h3>
          </div>

          <p className="max-w-[65ch]">{rejse.oplevelse_beskrivelse}</p>
        </div>

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(380px,1fr))] gap-6">
          {rejse.oplevelse.map((oplevelse) => (
            <article key={oplevelse.id} className="flex flex-col gap-4">
              <Image
                src={oplevelse.image}
                width={400}
                height={200}
                alt={oplevelse.titel}
                className="h-[240px] w-full rounded-[20px] object-cover"
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
