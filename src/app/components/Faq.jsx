import { Accordion } from "@/components/ui/accordion";
import Button from "./Button";
import FaqItem from "./FaqItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import LinkButton from "./LinkButton";

const Faq = ({ items = [], className = "" }) => {
  return (
    <>
      <section
        className={`text-primary bg-primary col-[content] grid scroll-mt-32 grid-cols-1 gap-20 md:grid-cols-2 ${className || ""}`}
        id="faq"
      >
        <div>
          <div className="flex flex-col gap-6 pb-8">
            <h3 className="font-semibold">Ofte stillede spørgsmål</h3>
            <p>
              Har du spørgsmål om cykelferierne? Her finder du de vigtigste svar
              og ellers hjælper jeg dig gerne videre.
            </p>
          </div>
          <LinkButton href="/kontakt" variant="primary" className="w-fit">
            Gå til kontakt
          </LinkButton>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((items) => (
            <FaqItem key={items.id} items={items} />
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default Faq;
