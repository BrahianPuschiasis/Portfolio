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

const Projects = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

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
                  url: "https://www.youtube.com/embed/-fNpYFmmJc4",
                },
              ]}
              languages={[
                { name: "Java", textColor:"black", backgroundColor: "orange",  },
                { name: "mySQL", textColor:"white",backgroundColor: "gray" },
                { name: "mongoDB", textColor:"white",backgroundColor: "gray" },
                { name: "Spring Boot", textColor:"black",backgroundColor: "green" },
                { name: "Spring Cloud", textColor:"black",backgroundColor: "green" },
                { name: "RabbitMQ", textColor:"white",backgroundColor: "black" },
                { name: "Zipkin", textColor:"white",backgroundColor: "black" },
                { name: "Resilence4j", textColor:"white",backgroundColor: "black" },


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
              languages={[
                { name: "Java", textColor:"black", backgroundColor: "orange",  },
                { name: "JavaScript", textColor:"black", backgroundColor: "orange",  },
                { name: "mySQL", textColor:"white",backgroundColor: "gray" },
                { name: "AWS", textColor:"white",backgroundColor: "gray" },
                { name: "Spring Boot", textColor:"black",backgroundColor: "green" },
                { name: "Spring Cloud", textColor:"black",backgroundColor: "green" },
                { name: "Spring Security", textColor:"black",backgroundColor: "green" },
                { name: "CSS", textColor:"white",backgroundColor: "purple" },
                { name: "HTML", textColor:"white",backgroundColor: "purple" },
                { name: "React", textColor:"black",backgroundColor: "cyan" },


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
              repositories={[
                {
                  name: "Code",
                  url: "https://github.com/BrahianPuschiasis/Pokemon",
                },
              ]}
              videos={[
                {
                  title: "Video 1",
                  url: "https://www.youtube.com/embed/4mR_C7qMmAA",
                },
                {
                  title: "Video 2",
                  url: "https://www.youtube.com/embed/3OV3Jw_5BXs",
                },
              ]}
              languages={[
                { name: "Visual Basic.NET", textColor:"white", backgroundColor: "purple",  },
                { name: "mySQL", textColor:"white",backgroundColor: "gray" },


              ]}
            />
          </div>

          {/*Educational System*/}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("educationalSystem")}
              description={t("educationalDesc")}
              repositories={[
                {
                  name: "Code",
                  url: "https://github.com/BrahianPuschiasis/SystemEducational",
                },
              ]}
              videos={[
                {
                  title: "Video 1",
                  url: "https://www.youtube.com/embed/HsDnTL4O7tQ",
                },
              ]}
              languages={[
                { name: "Visual Basic.NET", textColor:"white", backgroundColor: "purple",  },
                { name: "mySQL", textColor:"white",backgroundColor: "gray" },
                { name: "Informix", textColor:"white",backgroundColor: "gray" },
                { name: "HTML", textColor:"white",backgroundColor: "purple" },

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
              repositories={[
                {
                  name: "Code",
                  url: "https://github.com/BrahianPuschiasis/AUH",
                },
              ]}
              videos={[
                {
                  title: "Video 1",
                  url: "https://www.youtube.com/embed/XZuIXC1x4f8",
                },
              ]}
              languages={[
                { name: "Visual Basic.NET", textColor:"white", backgroundColor: "purple",  },
                { name: "mySQL", textColor:"white",backgroundColor: "gray" },
                { name: "HTML", textColor:"white",backgroundColor: "purple" },

              ]}
            />
          </div>

          {/*Biblioteca*/}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("bibliotecaTitle")}
              description={t("bibliotecaDesc")}
              repositories={[
                {
                  name: "Code",
                  url: "https://github.com/BrahianPuschiasis/Biblioteca",
                },
              ]}
              videos={[
                {
                  title: "Video 1",
                  url: "https://www.youtube.com/embed/AKv6Dq2DutA",
                },
              ]}
              languages={[
                { name: "Shell Script", textColor:"white", backgroundColor: "green",  },
              ]}
            />
          </div>

          {/*BusSystem*/}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("busTitle")}
              description={t("busDesc")}
              repositories={[
                {
                  name: "Code",
                  url: "https://github.com/BrahianPuschiasis/BusSystem",
                },
              ]}
              languages={[
                { name: "C/C++", textColor:"black", backgroundColor: "pink",  },
              ]}
            />
          </div>

          {/* Notas app*/}
          <div className="mb-8">
            {" "}
            {/* Add margin bottom to create separation */}
            <ProjectCard
              title={t("noteTitle")}
              description={t("noteDescription")}
              repositories={[
                {
                  name: "Code",
                  url: "https://github.com/BrahianPuschiasis/NotesAPP",
                },
              ]}
              videos={[
                {
                  title: "Note App",
                  url: "https://www.youtube.com/embed/3qvPVZU_uDE",
                },
              ]}
              languages={[
                { name: "Java", textColor:"black", backgroundColor: "orange",  },
                { name: "Java Script", textColor:"black",backgroundColor: "orange" },
                { name: "H2", textColor:"white", backgroundColor: "gray",  },
                { name: "Spring Boot", textColor:"black", backgroundColor: "green",  },
                { name: "React", textColor:"black",backgroundColor: "cyan" },
                { name: "HTML", textColor:"white",backgroundColor: "purple" },
                { name: "CSS", textColor:"white",backgroundColor: "purple" },

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
              languages={[
                { name: "Java Script", textColor:"black",backgroundColor: "orange" },
                { name: "React", textColor:"black",backgroundColor: "cyan" },
                { name: "HTML", textColor:"white",backgroundColor: "purple" },
                { name: "CSS", textColor:"white",backgroundColor: "purple" },

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
              languages={[
                { name: "HTML", textColor:"white",backgroundColor: "purple" },
                { name: "CSS", textColor:"white",backgroundColor: "purple" },
              ]}
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
