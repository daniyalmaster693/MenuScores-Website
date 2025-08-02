"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

function FaqSection() {
  const faqs = [
    {
      question: "What is SuperCorners?",
      answer:
        "SuperCorners supercharges your Mac's Corners by allowing you to assign custom actions for more control.",
    },
    {
      question: "Which macOS versions are supported?",
      answer: "SuperCorners requires macOS 13+ (Ventura) and later.",
    },
    {
      question: "What actions can I assign to corners?",
      answer:
        "You can launch apps, open files and folders, run shortcuts or appleScripts, open websites, and more. There are currently 88 different actions that can be assigned with more added in every update.",
    },
    {
      question: "Can I assign the same action to multiple corners?",
      answer:
        "You can assign any action to any corner with no restrictions. This includes actions that require additional input (template actions) that are set on a per corner/zone basis.",
    },
    {
      question: "Can I disable certain corners or zones?",
      answer:
        "Yes, you can enable or disable individual corners and zones from the settings window.",
    },
    {
      question: "How do I update SuperCorners?",
      answer:
        "If installed with Homebrew, run: brew upgrade --cask supercorners. Otherwise, the in app updater will take care of things for you.",
    },
    {
      question: "Is my data collected?",
      answer: "No. SuperCorners does not collect data.",
    },
    {
      question: "How can I report bugs or suggest features?",
      answer:
        "Open an issue or discussion on the GitHub repo: https://github.com/daniyalmaster693/SuperCorners",
    },
  ];

  return (
    <section className="bg-white/80 py-20 mt-10 mb-15" id="faq">
      <div className="max-w-sm sm:max-w-2xl mx-auto">
        <h2 className="mb-10 tracking-tight font-bold text-center text-3xl lg:text-5xl lg:leading-[3.5rem]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 mt-10">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className="bg-slate-100/50 p-4 px-7 rounded-lg hover:shadow"
              >
                <Accordion
                  className="flex w-full flex-col"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  variants={{
                    expanded: {
                      opacity: 1,
                      scale: 1,
                    },
                    collapsed: {
                      opacity: 0,
                      scale: 0.7,
                    },
                  }}
                >
                  <AccordionItem value="getting-started" className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90" />
                        <div className="ml-2 text-zinc-950 text-xl font-semibold">
                          {faq.question}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                      <p className="pl-6 pr-2 leading-relaxed text-zinc-500">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FaqSection;
