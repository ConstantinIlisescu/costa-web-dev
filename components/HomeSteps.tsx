import React from "react";
import Image from "next/image";
import SectionOverlay from "./SectionOverlay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { STEPS } from "@/data/steps";

const HomeSteps = () => {
  return (
    <section id="steps" className="relative screen-container">
      <Image
        src="/steps.jpg"
        alt="Overhead view of a MacBook laptop on a dark desk, showcasing modern technology and minimalism."
        width={1920}
        height={1080}
        className="absolute-full-screen-image fade-img-top-bottom"
      />
      <SectionOverlay />
      <div className="absolute inset-0 z-30 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <h2 className="section-header">Collaboration steps</h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-[80vw] md:w-[600px]"
          >
            {STEPS.map((step, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={`accordion-item-${index}`}
              >
                <AccordionTrigger className="section-subheader">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="section-paragraph">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
