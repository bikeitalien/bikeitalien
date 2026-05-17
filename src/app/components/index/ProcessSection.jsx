import Image from "next/image";
import HeadingSection from "../HeadingSection";

const steps = [
  {
    number: "01",
    undertitle: "Find den rejse der passer til dig",
    text: "Start med at kigge rundt blandt mine cykelferier og find den type tur, der vækker din lyst til at komme afsted",
  },
  {
    number: "02",
    undertitle: "Læs om turen i dit eget tempo",
    text: "Når du har fundet en rejse, kan du dykke ned i detaljerne. Her kan du se ruten, niveau, indhold og hvad der er inkluderet, så du ved, hvad du siger ja til.",
  },
  {
    number: "03",
    undertitle: "Tilmeld dig eller skriv til mig",
    text: "Du kan booke direkte på de fleste ture, eller kontakte mig hvis du er i tvivl, vil rejse som gruppe eller gerne have noget skræddersyet.",
  },
  {
    number: "04",
    undertitle: "Jeg tager mig af resten for dig",
    text: "Når du er tilmeldt, tager jeg mig af det praktiske. Så kan du bare begynde at glæde dig til cykelferien.",
  },
];

const ProcessSection = ({ className = "" }) => {
  return (
    <section className={`col-[full] grid grid-cols-subgrid ${className || ""}`}>
      <div className="col-[content] flex flex-col gap-12 md:gap-12">
        <div className="grid gap-20 md:grid-cols-2">
          <div className="flex flex-col gap-12">
            <HeadingSection
              title="Sådan kommer du afsted"
              children="Det er enkelt at komme afsted på cykelferie! Her kan du se, hvordan det foregår fra første klik til du sidder i sadlen."
            />
            <div className="overflow-hidden rounded-[20px]">
              <Image
                src="/assets/processbillede.webp"
                alt="Processen"
                width={800}
                height={600}
                className="aspect-5/3 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <span className="text-(length:--h3-size) leading-none font-semibold">
                  {step.number}
                </span>
                <div className="flex flex-col gap-1">
                  <h5 className="font-medium">{step.undertitle}</h5>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
