"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.a
      href={project.source}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl w-full bg-gradient-to-r from-[#36BA98] via-[#E9C46A] to-[#E76F51] p-1 hover:cursor-pointer shadow-lg"
      whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
    >
      <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4 ">
          <img
            src={project.image.url}
            alt={project.title}
            className="object-cover w-full rounded-lg max-h-64"
          />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {project.title}
          </h2>
          <p className="text-md text-primary-dark dark:text-primary-light">
            {project.description}
          </p>

          <div className="flex items-center space-x-4">
            {project.tags.map((tag, key) => (
              <span
                key={key}
                className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-pink-100 bg-orangesh-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
