import { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import projectsData from "../../utils/data/portfolio/projectsData";
import filterCategories from "../../utils/data/portfolio/filterCategories";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  return (
    <section className="projects">
      <ButtonGroup className="projects__categories">
        {filterCategories.map((category) => (
          <Button
            key={category}
            className="projects__categories-button"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
      <div className="projects__cards">
        <ProjectsCard
          projects={projectsData}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
}
