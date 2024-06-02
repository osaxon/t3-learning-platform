import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const options = [
  {
    label: "Lesson 1",
    content: "This is the content for lesson 1",
  },
  {
    label: "Lesson 2",
    content: "This is the content for lesson 2",
  },
  {
    label: "Lesson 3",
    content: "This is the content for lesson 3",
  },
];

export const DemoAccordian = () => {
  return (
    <div className="flex-grow">
      <Accordion type="single" collapsible>
        {options.map((option, index) => (
          <AccordionItem key={index} value={option.label}>
            <AccordionTrigger>{option.label}</AccordionTrigger>
            <AccordionContent>{option.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
