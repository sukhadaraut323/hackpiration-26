import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Any college student from any institution across India can participate. Whether you're a beginner or an experienced developer, Hack Aspire '26 welcomes all skill levels.",
  },
  {
    question: "What is the team size?",
    answer:
      "Teams can consist of 2-4 members. Cross-college teams are allowed. Solo participation is not permitted to encourage collaboration.",
  },
  {
    question: "Is it beginner friendly?",
    answer:
      "Absolutely! We have mentors available throughout the event to help beginners. We also provide workshops and resources to help you get started.",
  },
  {
    question: "Is the hackathon offline?",
    answer:
      "Yes, Hack Aspire '26 is an offline hackathon held at VIT Pune campus. All registered participants must be present at the venue on 31st January.",
  },
  {
    question: "What should we bring?",
    answer:
      "Bring your laptop, charger, student ID, and lots of enthusiasm! We'll provide food, drinks, and a great hacking environment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>FAQ</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl bg-card px-6 data-[state=open]:border-primary/30 data-[state=open]:glow-primary transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
