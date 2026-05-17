const PageHero = ({
  bgColor = "bg-[var(--background-card)]",
  tagline,
  heading,
  image,
  imageAlt = "",
}) => {
  return (
    <section className={`col-[content] rounded-[20px] p-6 md:p-8 ${bgColor}`}>
      <div className="grid gap-8 md:grid-cols-2 md:items-center grid grid-cols-2">
        <div>
          {tagline && (
            <p className=" text-[var(--tag-size)]">
              {tagline}
            </p>
          )}

          {heading && (
            <h2 className="font-medium text-[var(--h2-size)]">{heading}</h2>
          )}
        </div>

        {image && (
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full rounded-[20px] object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default PageHero;
