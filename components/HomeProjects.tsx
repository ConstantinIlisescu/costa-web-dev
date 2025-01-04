import { PROJECTS } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const HomeProjects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-5 my-20"
    >
      <h2 className="section-header text-center mb-20">My projects</h2>
      <div className="flex flex-wrap justify-center gap-10 ">
        {PROJECTS.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="bg-black-100 rounded-lg bg-gradient-to-b from-black-100 via-black-300 to-black-300"
          >
            <h3 className="text-2xl max-w-60 p-5 min-h-28">{project.title}</h3>
            <Image
              src={project.image}
              alt={project.alt}
              width={370}
              height={292}
              className="-translate-x-4"
            />
            <div className="m-5 mt-14 w-fit">
              <Button
                href={project.link}
                text="View Live Website"
                target="_blank"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
