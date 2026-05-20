const PageHero = ({
  bgColor = "bg-[var(--background-card)]",
  tagline,
  heading,
  image,
  imageAlt = "",
}) => {
  return (
    <section className={`col-[content] rounded-[20px] p-6 md:p-8 ${bgColor}`}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div>
          {tagline && <p className="text-[var(--tag-size)]">{tagline}</p>}

          {heading && (
            <h2 className="font-medium text-[var(--h2-size)]">{heading}</h2>
          )}
        </div>

        {image && (
          <img
            src={image}
            alt={imageAlt}
            className="max-h-[200px] w-full rounded-[20px] object-cover object-top md:max-h-75"
          />
        )}
      </div>
    </section>
  );
};

export default PageHero;
