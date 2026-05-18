import BookingCard from "./BookingCard";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

const IdPageHeading = ({ rejse }) => {

const heroImages = rejse.hero_images;

const firstImage = heroImages.find((img) => img.id === "1");
const remainingImages = heroImages.filter((img) => img.id !== "1");

  return (
    <section className="col-[content]">
      <div className="py-4">
        <Breadcrumb current={rejse.titel} />
      </div>
      <div className="grid gap-8">
        <div className="rounded-[20px grid grid-cols-2 gap-2">
          <Image
            src={firstImage.url}
            width={1200}
            height={800}
            alt=""
            className="h-full w-full rounded-tl-[20px] rounded-bl-[20px] object-cover"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {remainingImages.map((img) => (
              <Image
                key={img.id}
                src={img.url}
                width={600}
                height={400}
                className={`h-full w-full object-cover ${img.id === "3" ? "rounded-tr-[20px]" : ""} ${img.id === "5" ? "rounded-br-[20px]" : ""} `}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex w-full flex-wrap items-center gap-3">
            <h6 className="w-fit font-semibold">{rejse.niveau}</h6>
            <div className="mx-1 h-1 w-1 rounded-full bg-[var(--grey-400)]" />
            <h6 className="font-semibold">{rejse.antal_dage}</h6>
            <div className="mx-1 h-1 w-1 rounded-full bg-[var(--grey-400)]" />
            <h6 className="font-semibold">{rejse.land}</h6>
            <div className="mx-1 h-1 w-1 rounded-full bg-[var(--grey-400)]" />
            <h6 className="font-semibold">{rejse.dato}</h6>
            <div className="mx-1 h-1 w-1 rounded-full bg-[var(--grey-400)]" />
            <h6 className="font-semibold">{rejse.lufthavn}</h6>
            <div className="mx-1 h-1 w-1 rounded-full bg-[var(--grey-400)]" />
            <h6 className="font-semibold">
              maks deltagere:{rejse.maks_deltager}
            </h6>
            <div className="mx-1 h-1 w-1 rounded-full bg-[var(--grey-400)]" />
            <h6 className="font-semibold">
              Sidste tilmelding: {rejse.tilmelding}
            </h6>
          </div>
        </div>

        <hr className="h-px border-0 bg-[var(--grey-200)]" />
      </div>

      <div className="mt-10 grid items-center justify-between md:grid-cols-3">
        <div className="grid max-w-[80ch] gap-5 col-end-3 col-start-1">
          <h2 className="w-full font-semibold">{rejse.titel}</h2>
          <p className="whitespace-pre-line">
            {rejse.beskrivelse}
          </p>
        </div>
        <div className="ml-auto">
          <BookingCard rejse={rejse} />
        </div>
      </div>
    </section>
  );
};

export default IdPageHeading;
