/* eslint-disable no-unused-vars */
// Projects.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../context/LanguajeContext.jsx";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  // const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {}, [language]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="container mx-auto my-8">
        <Slider {...settings}>
          {/* Micro Servicios proyecto */}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("microTitle")}
              description={t("microDescription")}
              repositories={[
                {
                  name: "Backend",
                  url: "https://github.com/abertone90/BackEnd-Parcial-2024",
                },
                {
                  name: "Config Server",
                  url: "https://github.com/BrahianPuschiasis/ConfigServer",
                },
              ]}
              videos={[
                {
                  title: "Project",
                  url: "https://www.youtube.com/embed/l2AfD1s7cDQ",
                },
              ]}
            />
          </div>

          {/* Final integrador primer track */}

          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("projectTitle")}
              description={t("projectDescription")}
              repositories={[
                {
                  name: "Frontend",
                  url: "https://github.com/carliitosalvarez/FourSenses-Proyect",
                },
                {
                  name: "Backend",
                  url: "https://github.com/Mondati/Proyecto-integrador",
                },
                {
                  name: t("projectNameJuntos"),
                  url: "https://github.com/BrahianPuschiasis/FourSenses",
                },
              ]}
              videos={[
                {
                  title: "Project",
                  url: "https://www.youtube.com/embed/l2AfD1s7cDQ",
                },
              ]}
            />
          </div>

          {/* Notas app para ensolvers */}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("noteTitle")}
              description={t("noteDescription")}
              videos={[
                {
                  title: "Note App",
                  url: "https://www.youtube.com/embed/3qvPVZU_uDE",
                },
              ]}
            />
          </div>

          {/* Final de front 3 */}

          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("projectFinalTitle")}
              description={t("projectFinalDescription")}
              repositories={[
                {
                  name: "Frontend",
                  url: "https://github.com/BrahianPuschiasis/FinalFrontIII",
                },
                {
                  name: t("deployedPage"),
                  url: "https://brahianpuschiasis.github.io/FinalFrontIII/",
                },
              ]}
            />
          </div>

          {/* Final de front 1 */}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("projectFinalFrontEndITitle")}
              description={t("projectFinalFrontEndIDescription")}
              repositories={[
                {
                  name: "Frontend",
                  url: "https://github.com/BrahianPuschiasis/FinalFront",
                },
                {
                  name: t("deployedPage"),
                  url: "https://brahianpuschiasis.github.io/FinalFront/",
                },
              ]}
            />
          </div>

          {/* Replica de Pokemon */}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("replicaPokemonTitle")}
              description={t("replicaPokemonDescription")}
              videos={[
                {
                  title: "Video 1",
                  url: "https://www.youtube.com/embed/3OV3Jw_5BXs",
                },
              ]}
            />
          </div>

          {/* Proyecto personal Haxball */}

          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("personalProjectVBHaxballTitle")}
              description={t("personalProjectVBHaxballDescription")}
            />
          </div>

          {/* Proyectos viejo */}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("oldProjectsTitle")}
              description={t("oldProjectsDescription")}
            />
          </div>

          {/* Mas cards debajo */}
        </Slider>
      </section>
    </div>
  );
};

export default Projects;
