import React from "react";

import Link from "next/link";
import ArrowLeft from "@/app/component/ArrowLeft";
import Layout from "./../layout";
import { getAllProjects } from "../function/getAllProject";
import ProjectCard from "../component/ProjectCard";

const ProjectPage = async () => {
  const projects = await getAllProjects();
  console.log(projects);

  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <div className="mt-5 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectPage;
