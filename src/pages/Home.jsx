/* eslint-disable no-unused-vars */
import "../styles/Home.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">Información Personal</h2>
            <p>
              <strong>Nombre:</strong> Brahian Puschiasis
            </p>
            <p>
              <strong>Correo Electrónico:</strong> brahian.puschiasis@gmail.com
            </p>
            <p>
              <strong>Teléfono:</strong> +598 95591793
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
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
              <strong>GitHub:</strong>{" "}
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

          <div className="bg-white dark:bg-slate-800 p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">Experiencia Laboral</h2>
            <div>
              <p className="text-lg font-semibold">
                Desarrollador Full Stack - Sin experiencia laboral de momento
              </p>

              {/* <p className="text-sm">No tengo experiencia de momento</p>
              <p className="text-sm">Cuento con las siguientes habilidades</p> */}
              <div className="mb-4"> </div>
              <ul className="list-disc pl-6">
                <li>Desarrollo y mantenimiento de aplicaciones web.</li>
                <li>
                  Colaboración en equipos ágiles utilizando metodologías Scrum.
                </li>
                <li>
                  Implementación de nuevas características y resolución de
                  problemas.
                </li>
                <li>Creacion y mantenimiento de bases de datos</li>
                <li>Pruebas unitarias</li>
              </ul>
            </div>
            {/* Agrega más experiencias laborales según sea necesario */}
          </div>
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-800 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Educación</h2>
          <div className="mb-4">
            {" "}
            {/* Agrega un margen inferior aquí */}
            <p className="text-lg font-semibold">Bachiller Tecnológico</p>
            <p className="text-sm">
              Instituto Tecnológico Superior "Arias Balparda"
            </p>
            <p className="text-sm">2011 - 2014</p>
          </div>
          <div className="mb-4">
            {" "}
            {/* Agrega un margen inferior aquí */}
            <p className="text-lg font-semibold">Professional Developer</p>
            <p className="text-sm">Digital House/UTEC</p>
            <p className="text-sm">2022 - 2023</p>
          </div>
          <div className="mb-4">
            {" "}
            {/* Agrega un margen inferior aquí */}
            <p className="text-lg font-semibold">Back End Specialist</p>
            <p className="text-sm">Digital House/UTEC</p>
            <p className="text-sm">2024 - En curso</p>
          </div>
          <div>
            {" "}
            {/* No necesitas un margen inferior en el último elemento */}
            <p className="text-lg font-semibold">Ingeniero en Computación</p>
            <p className="text-sm">Facultad de Ingeniería (UDELAR)</p>
            <p className="text-sm">2020 - En curso</p>
          </div>
          {/* Agrega más información educativa según sea necesario */}
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-800 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">
            Experiencia y Proyectos
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Proyecto Integrador para Digital House, en el cual integramos
              back/front con AWS, usando Java/JavaScript/React/MySQL/CSS/HTML.
            </li>
            <p>Descripción del proyecto...</p>
            <p>Links a ambos repositorios:</p>
            <ul className="list-disc pl-6">
              <li>
                <a
                  href="https://github.com/carliitosalvarez/FourSenses-Proyect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio Front
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mondati/Proyecto-integrador"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio Back
                </a>
              </li>
            </ul>
          </ul>
          {/* Agrega más experiencias y proyectos según sea necesario */}
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-800 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Certificaciones</h2>
          <ul className="list-disc pl-6 space-y-4">
            {" "}
            {/* space-y-4 agrega espacio entre elementos de la lista */}
            <li className="mb-4">
              {" "}
              {/* mb-4 agrega margen inferior a cada elemento de la lista */}
              Nombre de la Certificación: Diploma de Italiano Básico
              <br />
              Fecha de Obtención: 2011
            </li>
            <li className="mb-4">
              {" "}
              {/* mb-4 agrega margen inferior a cada elemento de la lista */}
              Nombre de la Certificación: Diploma de Portugués Básico
              <br />
              Fecha de Obtención: 2011
            </li>
            <li className="mb-4">
              {" "}
              {/* mb-4 agrega margen inferior a cada elemento de la lista */}
              Nombre de la Certificación: Diploma Educación Media Superior
              <br />
              Fecha de Obtención: 2014
            </li>
            <li className="mb-4">
              {" "}
              {/* mb-4 agrega margen inferior a cada elemento de la lista */}
              Nombre de la Certificación: Professional Developer
              <br />
              Fecha de Obtención: 2023
            </li>
            {/* Agrega más certificaciones según sea necesario */}
          </ul>
        </div>
      </section>

      <section className="container mx-auto my-8">
        <div className="bg-white dark:bg-slate-800 p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Lenguajes de Programación
              </h3>
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
              <h3 className="text-lg font-semibold">Frameworks</h3>
              <ul className="list-disc pl-6">
                <li>React (Desarrollo web)</li>
                {/* Agrega más frameworks según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Desarrollo Back-End</h3>
              <ul className="list-disc pl-6">
                <li>Spring Boot</li>
                {/* Agrega más tecnologías Back-End según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Bases de Datos</h3>
              <ul className="list-disc pl-6">
                <li>SQL</li>
                <li>Informix</li>
                <li>MySQL</li>
                {/* Agrega más bases de datos según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Habilidades Técnicas</h3>
              <ul className="list-disc pl-6">
                <li>
                  Desarrollo y contribuciones en proyectos Back-End y Front-End.
                </li>
                <li>Experiencia con servicios en la nube: AWS (EC2, S3).</li>
                <li>Metodologías ágiles.</li>
                <li>Control de versiones: GIT.</li>
                <li>Pruebas Unitarias.</li>
                {/* Agrega más habilidades técnicas según sea necesario */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Redes</h3>
              <ul className="list-disc pl-6">
                <li>Conocimientos básicos en networking.</li>
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
