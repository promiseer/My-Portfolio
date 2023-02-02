import React, { useEffect, useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { Layout } from "../src/layout/Layout";
import { projects } from "../src/constants/constants";
import { Section, SectionDivider, PageTitle } from "../src/styles/GlobalComponents";
import { GridContainer } from "../src/components/Projects/ProjectsStyles";
import ProjectsFilter from "../src/components/ProjectsFilter/ProjectsFilter";
import ProjectCard from "../src/components/Cards/ProjectCard";

const AllProjects = () => {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    setData(projects);
  }, []);

  const handleFilter = (type) => {
    switch (type) {
      case "javascript":
        setData([...projects].filter((p) => p.mainType === "javascript"));
        setFilterBy("JavaScript");
        break;

      case "php":
        setData([...projects].filter((p) => p.mainType === "php"));
        setFilterBy("PHP");
        break;

      case "react":
        setData([...projects].filter((p) => p.mainType === "react"));
        setFilterBy("React");
        break;

      default:
        setData([...projects]);
        setFilterBy("All");
        break;
    }
  };

  return (
    <Layout>
      <Section nopadding id="projects">
        <SectionDivider divider style={{ marginBottom: 0 }} />
        <PageTitle>All My Relevant Projects</PageTitle>
        <ProjectsFilter filter={handleFilter} filterBy={filterBy} />
        <AnimateSharedLayout>
          <GridContainer layout>
            {data
              .sort((a, b) => a.order - b.order)
              .map((card) => (
                <ProjectCard item={card} key={card.id} />
              ))}
          </GridContainer>
        </AnimateSharedLayout>
      </Section>
    </Layout>
  );
};

export default AllProjects;
