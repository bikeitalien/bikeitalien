import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import LinkButton from "./LinkButton";

const Faq = ({ items, className = "" }) => {
  return (
    <>
      <section
        className={`text-primary bg-primary scroll-mt-32 md:grid-cols-2 col-[content] grid grid-cols-1 gap-20 ${className || ""}`}
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
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-(primary) border-t"
            >
              <div className="cursor-pointer py-4">
                <AccordionTrigger className="align-center cursor-pointer items-center px-2 text-left text-(length:--p-size)! font-semibold hover:bg-(--card-background)! hover:no-underline">
                  <p className="font-bold">{item.question}</p>
                </AccordionTrigger>
              </div>

              <AccordionContent className="px-2 pb-6 text-(length:--p-size)!">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default Faq;
