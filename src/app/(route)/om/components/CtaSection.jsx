import Button from "@/app/components/Button";
const CtaSection = () => {
  return (
    <>
      <section className="col-[content] grid text-center">
        <h2 className="mb-6 font-bold">Er du klar til dit næste eventyr?</h2>
        <p className="mx-auto mb-6 w-[65ch] font-semibold">
          Oplev verden fra cykelsadlen og kom tættere på både naturen, kulturen
          og de skjulte perler undervejs. Hos Bikeitalien finder du nøje
          udvalgte cykelrejser for både motionister og livsnydere – klar til dit
          næste eventyr på to hjul.
        </p>
        <Button
          href="/rejser"
          variant="primary"
          className="mx-auto mt-8 w-fit place-content-center"
        >
          Se alle cykelrejser
        </Button>
      </section>
    </>
  );
};

export default CtaSection;
