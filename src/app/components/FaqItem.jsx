import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqItem = ({ items }) => {
  return (
    <>
      <AccordionItem
        value={`item-${items.id}`}
        className="border-(primary) border-t"
      >
        <div className="cursor-pointer py-4">
          <AccordionTrigger className="align-center cursor-pointer items-center px-2 text-left text-(length:--p-size)! font-semibold">
            <p className="font-bold">{items.question}</p>
          </AccordionTrigger>
        </div>

        <AccordionContent className="px-2 pb-6 text-(length:--p-size)!">
          <p>{items.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default FaqItem;
