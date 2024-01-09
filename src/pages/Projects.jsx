// Projects.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="container mx-auto my-8">
        {/* <div className="bg-gray dark:bg-slate-800 p-4 shadow-md rounded-md"> */}
        {/* <h2 className="text-xl font-semibold mb-2">Experiencia y Proyectos</h2> */}

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title="Proyecto Integrador - Digital House"
            description="Integramos back/front con AWS, usando Java/JavaScript/React/MySQL/CSS/HTML. Es una página web que desplegamos en AWS, la cual permite el registro, autenticación de usuarios en base a sus roles, para poder comprar, reservar productos por un tiempo determinado, y tiene varias funcionalidades, entre ellas acceder al historial de reservas, poder agregar productos/eliminarlos/modificarlos, buscar por varios filtros los mismos, agregar/quitar de favoritos productos que el usuario quiera."
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
                name: "Juntos",
                url: "https://github.com/BrahianPuschiasis/FourSenses",
              },
            ]}
          />
        </div>

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title="Proyecto final Front End III (Digital House)"
            description="Se explica toda la consigna en el 'README.md' del repositorio, pero en resumen es un proyecto full react + vite, es una SPA, que permite el cambio a modo oscuro/brillante, agregar y quitar odontologos de favorito, tiene validaciones en el contacto, y utiliza una api para renderizas la informacion de los mismos."
            repositories={[
              {
                name: "Frontend",
                url: "https://github.com/BrahianPuschiasis/FinalFrontIII",
              },
              {
                name: "Pagina Desplegada",
                url: "https://brahianpuschiasis.github.io/FinalFrontIII/",
              },
            ]}
          />
        </div>

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title="Proyecto final Front End I (Digital House)"
            description="Se explica toda la consigna en el 'README.md' del repositorio, pero en resumen es un proyecto hecho 100% en HTML con CSS, se busca replicar exactamente una pagina en base al modelo recibido en figma."
            repositories={[
              {
                name: "Frontend",
                url: "https://github.com/BrahianPuschiasis/FinalFront",
              },
              {
                name: "Pagina Desplegada",
                url: "https://brahianpuschiasis.github.io/FinalFront/",
              },
            ]}
          />
        </div>
       

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title="Réplica del juego 'Pokemon'"
            description="Al terminar el bachiller tecnológico, por hobby creé una réplica casi exacta del famoso juego Pokemon, usando MySQL y Visual Basic. Permitía jugar/capturar pokemones/luchar con los mismos, ganar experiencia, recorrer los mapas, registrarse y loguearse con un usuario y mantener el estado de su cuenta (pokemones atrapados, niveles, etc). No está en mi GitHub porque en ese entonces no tenía conocimiento del mismo, pero tengo el proyecto en un disco duro viejo en otra PC que está inutilizable. Recuerdo cómo lo hice a la perfección y tengo algunas pruebas en video como las que se ven debajo. La base de datos utilicé una página que me permitía crearla de forma gratuita en un host por un mes, así que estaba el código del Visual Basic enlazado a ese host, que usaba una base de datos MySQL. Las tablas y base de datos, etc., las creé a mano con queries."
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
                url: "https://www.youtube.com/embed/rayDQPC-9kA",
              },
            ]}
          />
        </div>
        


        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title="Proyecto Personal - Visual Basic y Haxball"
            description="Un proyecto personal también, en Visual Basic luego de terminar Bachiller, el cual usaba el famoso juego Haxball y el foro de AUH (Asociación Uruguaya de Haxball), para registrar/loguear y permitir funcionalidades a los usuarios, vinculados a ese foro y ese juego. Dado que el juego no disponía de un sistema de registro, mi aplicación permitía identificar a los usuarios, crear salas para jugar entre ellos y crear partidas oficiales de las mismas, entre otros tipos de controles/funcionalidades, dependiendo si era un administrador, árbitro, capitán, jugador, etc. Todo guardado en una base de datos (muy parecido al proyecto de Pokemon, solo que en este caso editaba/agregaba HTML mediante Visual Basic y limitaba el control del usuario)."
          />
        </div>

        <div className="mb-8">
          {" "}
          {/* Add margin bottom to create separation */}
          <ProjectCard
            title="Proyectos viejos"
            description="Tengo proyectos en C++, C#, Pascal, Batch, Shell, pero son muy viejos, de cuando cursaba bachillerato o mis primeros semestres de facultad. No utilizaba GitHub en ese entonces, así que tampoco los tengo en mis repositorios. Eran proyectos estilo armar una biblioteca virtual, control de usuarios, de productos, etc. Cosas bastante estándar. Lo único que puede resaltar es que terminé usando sistemas complejos de ordenado de datos en C# como árbol binario, o que tanto en C# como en C++ usaba punteros de memoria para almacenar datos, archivos binarios también o de texto plano."
          />
        </div>

        {/* Add more ProjectCard components for other projects */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Projects;
