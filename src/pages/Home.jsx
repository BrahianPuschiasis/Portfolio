/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "../styles/Home.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from '../context/LanguajeContext.jsx'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
  }, [language]);

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">{t('personalInfo')}</h2>
            <p>
              <strong>{t('name')}:</strong> Brahian Puschiasis
            </p>
            <p>
              <strong>{t('email')}:</strong> brahian.puschiasis@gmail.com
            </p>
            <p>
              <strong>{t('phone')}:</strong> +598 95591793
            </p>
            <p>
              <strong>{t('linkedIn')}:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/brahian-puschiasis-948972234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl hover:text-blue-300 hover:shadow-md transition duration-300 ease-in-out"
                />
              </a>
            </p>
            <p>
              <strong>{t('github')}:</strong>{" "}
              <a
                href="https://github.com/BrahianPuschiasis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl hover:text-blue-300 hover:shadow-md transition duration-300 ease-in-out ml-4"
                />
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">{t('workExperience')}</h2>
            <div>
              <p className="text-lg font-semibold">
                {t('developerExperience')}
              </p>
              <div className="mb-4"> </div>
              <ul className="list-disc pl-6">
                <li>{t('webDevelopment')}</li>
                <li>{t('agileCollaboration')}</li>
                <li>{t('featureImplementation')}</li>
                <li>{t('databaseMaintenance')}</li>
                <li>{t('unitTesting')}</li>
              </ul>
            </div>
            {/* Agrega más experiencias laborales según sea necesario */}
          </div>
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-900 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">{t('education')}</h2>
          <div className="mb-4">
            <p className="text-lg font-semibold">{t('highSchool')}</p>
            <p className="text-sm">
              Instituto Tecnológico Superior "Arias Balparda"
            </p>
            <p className="text-sm">2011 - 2014</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">{t('professionalDeveloper')}</p>
            <p className="text-sm">Digital House/UTEC</p>
            <p className="text-sm">2022 - 2023</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">{t('backendSpecialist')}</p>
            <p className="text-sm">Digital House/UTEC</p>
            <p className="text-sm">2024 - {t('onCourse')}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{t('computerEngineer')}</p>
            <p className="text-sm">Facultad de Ingeniería (UDELAR)</p>
            <p className="text-sm">2020 - {t('onCourse')}</p>
          </div>
          {/* Agrega más información educativa según sea necesario */}
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-900 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">{t('languages')}</h2>
          <ul className="list-disc pl-6">
            <li>{t('spanish')}: {t('native')}</li>
            <li>{t('italian')}: {t('basic')} ({t('spokenAndWritten')}, {t('needsReview')})</li>
            <li>{t('portuguese')}: {t('intermediate')} ({t('spokenAndWritten')})</li>
            <li>{t('english')}: {t('advanced')} ({t('spokenWrittenUnderstanding')}, {t('practiceRequiredForFormality')})</li>
          </ul>
          {/* Agrega más experiencias y proyectos según sea necesario */}
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-900 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">{t('certifications')}</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li className="mb-4">
              {t('certificationName')}: {t('italianBasicDiploma')}
              <br />
              {t('fechaObtencion')}: 2011
            </li>
            <li className="mb-4">
              {t('certificationName')}: {t('portugueseBasicDiploma')}
              <br />
              {t('fechaObtencion')}: 2011
            </li>
            <li className="mb-4">
              {t('certificationName')}: {t('highSchoolDiploma')}
              <br />
              {t('fechaObtencion')}: 2014
            </li>
            <li className="mb-4">
              {t('certificationName')}: {t('professionalDeveloper')}
              <br />
              {t('fechaObtencion')}: 2023
            </li>
            {/* Agrega más certificaciones según sea necesario */}
          </ul>
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-900 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">{t('skills')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">{t('programmingLanguages')}</h3>
              <ul className="list-disc pl-6">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Visual Basic</li>
                <li>C++</li>
                <li>C#</li>
                <li>Pascal</li>
                <li>Shell Script</li>
                <li>Batch Scripting</li>
                <li>HTML</li>
                <li>CSS</li>
                {/* Agrega más lenguajes según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{t('frameworks')}</h3>
              <ul className="list-disc pl-6">
                <li>React ({t('webDevelopment')})</li>
                {/* Agrega más frameworks según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{t('backendDevelopment')}</h3>
              <ul className="list-disc pl-6">
                <li>Spring Boot</li>
                <li>Hibernate</li>
                {/* Agrega más tecnologías Back-End según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{t('databases')}</h3>
              <ul className="list-disc pl-6">
                <li>SQL</li>
                <li>Informix</li>
                <li>MySQL</li>
                {/* Agrega más bases de datos según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{t('technicalSkills')}</h3>
              <ul className="list-disc pl-6">
                <li>{t('developmentAndContributions')}</li>
                <li>{t('cloudServices')}: AWS (EC2, S3)</li>
                <li>{t('agileMethodologies')}</li>
                <li>{t('versionControl')}</li>
                <li>{t('unitTesting')}</li>
                {/* Agrega más habilidades técnicas según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">{t('networks')}</h3>
              <ul className="list-disc pl-6">
                <li>{t('basicKnowledgeInNetworking')}</li>
                {/* Agrega más habilidades de redes según sea necesario */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
