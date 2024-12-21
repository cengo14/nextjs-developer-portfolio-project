import { gql } from "graphql-request";
import { graphcms } from "../../../client";

export const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
    {
      projects {
        title
        description
        id
        tags
        image {
          url
        }
        source
      }
    }
  `;
  const { projects } = await graphcms.request(getAllProjectsQuery);
  return projects;
};
