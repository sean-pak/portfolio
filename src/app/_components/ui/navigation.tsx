import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";

const Navigation = () => {
  return (
    <div className="fixed top-[60%] right-[4rem] z-30">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Company 1</AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Company 2</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Navigation;
