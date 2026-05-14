const ImageCardSection = ({ rejse }) => {
  return (
    <section className="col-[content] py-10">
      <div className="grid gap-10">
        <div className="grid grid-cols-2 justify-between">
          <div>
            <p>{rejse.oplevelse_tagline}</p>
            <h3>{rejse.oplevelse_titel}</h3>
          </div>

          <p className="max-w-[65ch]">{rejse.oplevelse_beskrivelse}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {rejse.oplevelse.oplevelse.map((oplevelse) => (
            <article key={oplevelse.id} className="flex flex-col gap-3">
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
