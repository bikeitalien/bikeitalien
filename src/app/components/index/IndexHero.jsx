import Image from "next/image";
import Button from "../Button";
const IndexHero = () => {
  return (
    <>
      <section className="col-[full] grid h-[700px] grid-cols-1 grid-rows-1 overflow-hidden">
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
            <h1 className="text-(--text-secondary)! italic">
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
      </section>
    </>
  );
};

export default IndexHero;
