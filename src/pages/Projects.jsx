/* eslint-disable no-unused-vars */
// Projects.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from '../context/LanguajeContext.jsx'
import { useTranslation } from 'react-i18next';


const Projects = () => {

  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
  }, [language]);


  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="container mx-auto my-8">
        {/* <div className="bg-gray dark:bg-slate-800 p-4 shadow-md rounded-md"> */}
        {/* <h2 className="text-xl font-semibold mb-2">Experiencia y Proyectos</h2> */}

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
          title={t('projectTitle')}
          description={t('projectDescription')}
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
                name: t('projectNameJuntos'),
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

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
          title={t('noteTitle')}
          description={t('noteDescription')}
                      videos={[
              {
                title: "Note App",
                url: "https://www.youtube.com/embed/3qvPVZU_uDE",
              },
            ]}
          />
        </div>



        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
           title={t('projectFinalTitle')}
           description={t('projectFinalDescription')}
                       repositories={[
              {
                name: "Frontend",
                url: "https://github.com/BrahianPuschiasis/FinalFrontIII",
              },
              {
                name: t('deployedPage'),
                url: "https://brahianpuschiasis.github.io/FinalFrontIII/",
              },
            ]}
          />
        </div>

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
           title={t('projectFinalFrontEndITitle')}
           description={t('projectFinalFrontEndIDescription')}
            repositories={[
              {
                name: "Frontend",
                url: "https://github.com/BrahianPuschiasis/FinalFront",
              },
              {
                name: t('deployedPage'),
                url: "https://brahianpuschiasis.github.io/FinalFront/",
              },
            ]}
          />
        </div>
       

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title={t('replicaPokemonTitle')}
            description={t('replicaPokemonDescription')}
                        videos={[
              {
                title: "Video 1",
                url: "https://www.youtube.com/embed/3OV3Jw_5BXs",
              },
              {
                title: "Video 2",
                url: "https://www.youtube.com/embed/I_ASPHPQZP8",
              },
              {
                title: "Video 3",
                url: "https://www.youtube.com/embed/3OV3Jw_5BXs",
              },
            ]}
          />
        </div>
        


        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
           title={t('personalProjectVBHaxballTitle')}
           description={t('personalProjectVBHaxballDescription')}
           
          />
        </div>

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
           title={t('oldProjectsTitle')}
           description={t('oldProjectsDescription')}
           
          />
        </div>

        {/* Add more ProjectCard components for other projects */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Projects;
