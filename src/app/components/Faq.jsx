import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Button from "./Button";

const Faq = ({ items, className = "" }) => {
  return (
    <>
      <section
        className={`text-primary bg-primary col-[content] grid grid-cols-1 gap-20 md:grid-cols-2 ${className || ""}`}
      >
        <div>
          <div className="flex flex-col gap-6 pb-8">
            <h3 className="font-semibold">Ofte stillede spørgsmål</h3>
            <p>
              Har du spørgsmål om cykelferierne? Her finder du de vigtigste svar
              og ellers hjælper jeg dig gerne videre.
            </p>
          </div>
          <Button href="/kontakt" variant="primary" className="w-fit">
            Gå til kontakt
          </Button>
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
                  {item.question}
                </AccordionTrigger>
              </div>

              <AccordionContent className="px-2 pb-6 text-(length:--p-size)!">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default Faq;
