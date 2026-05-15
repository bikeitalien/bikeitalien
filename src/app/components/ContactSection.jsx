import Button from "./Button";
import Image from "next/image";
import Link from "./Link";

const ContactSection = () => {
  return (
    <section className="col-[full] grid grid-cols-subgrid bg-(--background-alternate)">
      <div className="col-[content] grid items-start gap-6 py-13 md:grid-cols-2 md:py-16 lg:gap-28">
        {/* Venstre side */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-(length:--tag-size)! font-medium">
              Har du flere spørgsmål?
            </p>
            <h3>Kontakt mig her, så finder vi ud af det sammen</h3>
          </div>
          <Button href="/kontakt" variant="primary" className="w-fit">
            Kontakt mig
          </Button>
        </div>

        {/* Højre side */}
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="order-last overflow-hidden rounded-xl md:-order-1 md:aspect-3/4">
            <Image
              src="/joachim/joachim_portræt1.webp"
              alt="Johan Joachim Jerichow"
              width={600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex h-full flex-col items-start justify-between gap-6 sm:flex-row md:flex-col">
            <div>
              <h6 className="[font-size:var(--h6-size)] font-medium">
                Johan Joachim Jerichow
              </h6>
              <p className="text-(--grey-400)">Ejer af Bike Italien</p>
            </div>

            <div className="flex flex-col gap-1 sm:items-end md:items-start">
              <Link
                href="mailto:joachimjerichow@hotmail.com"
                variant="underline"
              >
                joachimjerichow@hotmail.com
              </Link>
              <Link
                href="tel:+3939493672104"
                className="block"
                variant="underline"
              >
                +39-3493672104
              </Link>
              <Link
                href="https://www.facebook.com/bikeitalien/?locale=da_DK"
                variant="external"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
