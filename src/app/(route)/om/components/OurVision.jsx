import Image from "next/image";
const OurVision = () => {
  return (
    <>
      <section className="relative col-[full] grid grid-cols-subgrid bg-(--background-tertiary) py-18 md:py-36">
        <Image
          src="/assets/backgroundIllu.svg"
          alt="Background illustration"
          fill
          className="absolute inset-0 object-cover opacity-10 brightness-50"
        />

        <div className="col-[content] py-18 text-center md:py-28">
          <p className="mb-4 font-medium">Vores vision</p>
          <h5 className="mx-auto mb-6 md:w-[50ch]">
            I dag handler Bike Italien om kombinationen af cykling, natur,
            fællesskab og Italien, og om at skabe oplevelser på cykel, der
            bliver hængende lidt længere.
          </h5>
        </div>
      </section>
    </>
  );
};

export default OurVision;
