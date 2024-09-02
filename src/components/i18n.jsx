import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      webDevelopment: "Web development and maintenance of applications.",

      agileCollaboration:
        "Collaboration in agile teams using Scrum methodologies.",

      featureImplementation:
        "Implementation of new features and issue resolution.",

      databaseMaintenance: "Creation and maintenance of databases.",

      unitTesting: "Unit testing.",

      personalInfo: "Personal Information",
      workExperience: "Work Experience",

      name: "Name",
      email: "Email",
      phone: "Phone",
      linkedIn: "LinkedIn",
      github: "GitHub",
      developerExperience: "Full Stack Developer/Back End",
      education: "Education",
      highSchool: "High School Diploma",
      professionalDeveloper: "Professional Developer",
      backendSpecialist: "Backend Specialist",
      computerEngineer: "Computer Engineer",
      languages: "Languages",
      spanish: "Spanish",
      italian: "Italian",
      portuguese: "Portuguese",
      english: "English",
      certifications: "Certifications",
      certificationNameItalian: "Italian Basic Diploma",
      certificationDateItalian: "2011",
      certificationNamePortuguese: "Portuguese Basic Diploma",
      certificationDatePortuguese: "2011",
      certificationNameHighSchool: "High School Diploma",
      certificationDateHighSchool: "2014",
      certificationNameProfessionalDeveloper: "Professional Developer",
      certificationDateProfessionalDeveloper: "2023",
      skills: "Skills",
      programmingLanguages: "Programming Languages",
      frameworks: "FrontEnd Development",
      backendDevelopment: "Backend Development",
      databases: "Databases",
      technicalSkills: "Technical Skills",
      networks: "Networks",
      spokenAndWritten: "Spoken and written",
      needsReview: "need review",
      spokenWrittenUnderstanding: "spoken, written, and understanding",
      practiceRequiredForFormality: "practice required for formality",
      italianBasicDiploma: "Basic Italian Diploma",
      portugueseBasicDiploma: "Basic Portuguese Diploma",
      highSchoolDiploma: "High School Diploma",
      fechaObtencion: "Date of Obtaining",
      developmentAndContributions:
        "Development and contributions in Back-End and Front-End projects.",
      cloudServices: "Experience with cloud services: AWS (EC2, S3).",
      agileMethodologies: "Agile methodologies",
      versionControl: "Version control: GIT.",
      basicKnowledgeInNetworking: "Basic knowledge in networking.",
      onCourse: "In progress",

      projectTitle: "Integrated Project - Digital House",
      projectDescription:
        "We integrated back/front with AWS, using Java/JavaScript/React/MySQL/CSS/HTML. It is a web page deployed on AWS that allows user registration, authentication based on roles, product purchase, and reservation for a specific time. It includes various features such as accessing the reservation history, adding/deleting/modifying products, searching for products through multiple filters, and adding/removing favorites.",
      projectFinalTitle: "Final Project Front End III (Digital House)",
      projectFinalDescription:
        "The entire prompt is explained in the 'README.md' of the repository, but in summary, it's a full React + Vite project, an SPA that allows switching between dark/bright mode, adding and removing dentists from favorites, has validations in the contact form, and uses an API to render their information.",

      projectFinalFrontEndITitle: "Final Project Front End I (Digital House)",
      projectFinalFrontEndIDescription:
        "The entire assignment is explained in the 'README.md' of the repository, but in summary, it's a project made 100% in HTML with CSS. The goal is to replicate a page exactly based on the model received in Figma.",

      replicaPokemonTitle: "Replica of the 'Pokemon' Game",
      replicaPokemonDescription:
        "After finishing technical high school, as a hobby, I created an almost exact replica of the famous Pokémon game using MySQL and Visual Basic. It allowed playing, capturing Pokémon, battling with them, gaining experience, exploring maps, registering and logging in with a user, and maintaining the state of their account (captured Pokémon, levels, etc.). It is programmed in Visual Basic .NET, and I used MySQL for the database connection. My idea at that time was to test how far I could go by creating an RPG-type game with the knowledge I already had. The repository does not have all the commits it should, as I was not using GitHub at that time, but the code is 100% my own, and I have the original files/folders dating back to 2014 as proof. Additionally, I made updates to ensure it works correctly today.",

      personalProjectVBHaxballTitle:
        "Personal Project - Visual Basic and Haxball",
      personalProjectVBHaxballDescription:
        "Another personal project, in Visual Basic after finishing high school, which used the famous game Haxball and the AUH forum (Uruguayan Haxball Association) to register/login and allow functionalities to users linked to that forum and game. Since the game did not have a registration system, my application allowed identifying users, creating rooms for them to play, and creating official matches, among other types of controls/functionalities, depending on whether they were an administrator, referee, captain, player, etc. Everything was saved in a database (very similar to the Pokemon project, except in this case, it edited/added HTML through Visual Basic and limited user control).",

      oldProjectsTitle: "Old Projects",
      oldProjectsDescription:
        "I have projects in C++, C#, Pascal, Batch, Shell, but they are very old, from when I was in high school or my first semesters of college. I didn't use GitHub back then, so I don't have them in my repositories either. They were projects like building a virtual library, user control, product management, etc. Pretty standard stuff. The only thing that stands out is that I ended up using complex data sorting systems in C# like a binary tree, and in both C# and C++, I used memory pointers to store data, binary files as well as plain text.",

      allRightsReserved: "All rights reserved.",

      repositories: "Repositories",
      deployedPage: "Deployed Page",
      projectNameJuntos: "Together",
      resumeTitle: "Resume",
      softwareDeveloper: "Software Developer",
      certificationName: "Certification Name",

      noteTitle: "Notes App",
      noteDescription:
        "It is a full-stack application that uses an H2 database with Spring Boot + Hibernate, React + Vite. It allows managing notes, adding/modifying/deleting them, adding or removing categories, creating new categories, and filtering notes by categories. Additionally, notes can be archived and unarchived.",

      microTitle: "Netflix-style Microservice",
      microDescription:
        "It's a BackEnd project that handles microservices, similar to modern streaming platforms like Netflix/Primevideo. It stores movies in its own MySQL database, series in its MongoDB database, and both are accessed through the Catalog microservice, which is accessed through a Gateway and uses Feign to communicate with movies and series (two separate microservices).The project uses RabbitMQ (for queue management), Zipkin (tracing), an API gateway, Eureka (self-discovery server), FeignClient, Spring Cloud, Resilience4j (circuit breaker); it's programmed in Java + Spring 3.X and have all the configs files in yml centralized in the repository linked below.The challenge letter is available in its repository, as well as its implementation.",

      educationalSystem: "UTU Education System",
      educationalDesc:
        "Final project of ITS, third year. It is a large project, well documented in the repository, with its corresponding budget, database tables with ERD and normalizations, network functions/operating system to be used, project timeline, company name, among other topics. It consists of an application that manages subjects, institutes, groups, courses, students, and teachers of all UTU institutions in Uruguay. It allows assigning absences, grades, averages, exam and partial exam dates. It generates a report for both partial exams and final exams, divided by their respective institutes, groups, and teachers. It allows the registration of people within the institution with their corresponding role, which grants or denies access to certain functions of the application. Using mySQL and vb.net.",

      bibliotecaTitle: "Library - Shell Script",
      bibliotecaDesc:
        "Project done for Operating Systems II at ITS. It consists of programming 100% in Shell Script a library of books, videos, magazines, and writings. It allows performing CRUD operations on these elements, as well as registering users to make loans of the same. It tracks loans and the number of items, and informs upon entering if there are overdue returns taking dates into account. To do this, .txt files are manipulated through Shell Script to perform CRUD operations on the corresponding data.",

      busTitle: "Bus System - C/C++",
      busDesc:
        "Project done for Programming II at ITS. It consists of a program made in Turbo C/C++, which allows CRUD operations for a bus system to register: buses, routes, trips, tickets, among other data written in the readme.md of the repository. Everything is done in binary files by the same program.",

      navHome: "Home",
      navProject: "Projects",
      automaticTesting: "Automated test with Selenium",
      navContact: "Contact",

      IngresarNombre: "Name",
      IngresarEmail: "Email",
      IngresarMensaje: "Message",
      Enviar: "Send",
      Enviando: "Sending...",
      MensajeSuceful: "Message sent successfully",
      MensajeError: "Error sending the message",
    },
  },

  es: {
    translation: {
      noteTitle: "Notas App",
      noteDescription:
        "Es una aplicación full stack que utiliza una base de datos H2 con Spring Boot + Hibernate, React + Vite. Permite gestionar notas, agregar/modificar/eliminarlas, añadir categorías o quitarlas, crear nuevas categorías y filtrar las notas por categorías. Además, se pueden archivar y desarchivar las notas.",

      certificationName: "Nombre de la Certificación",

      webDevelopment: "Desarrollo y mantenimiento de aplicaciones web.",
      onCourse: "En curso",
      deployedPage: "Página Desplegada",
      projectNameJuntos: "Juntos",

      resumeTitle: "Curriculum Vitae",
      softwareDeveloper: "Desarrollador de Software",

      agileCollaboration:
        "Colaboración en equipos ágiles utilizando metodologías Scrum.",
      repositories: "Repositorios",

      featureImplementation:
        "Implementación de nuevas características y resolución de problemas.",

      databaseMaintenance: "Creacion y mantenimiento de bases de datos.",

      unitTesting: "Pruebas unitarias.",

      spokenAndWritten: "hablado y escrito",
      needsReview: "necesita repaso",
      spokenWrittenUnderstanding: "hablado, escrito y comprensión",
      practiceRequiredForFormality: "práctica necesaria para formalidad",

      personalInfo: "Información  Personal",
      workExperience: "Experiencia Laboral",
      name: "Nombre",
      email: "Correo Electrónico",
      phone: "Teléfono",
      linkedIn: "LinkedIn",
      github: "GitHub",
      developerExperience: "Desarrollador Full Stack/Back End",
      education: "Educación",
      highSchool: "Bachiller Tecnológico",
      professionalDeveloper: "Professional Developer",
      backendSpecialist: "Back End Specialist",
      computerEngineer: "Ingeniero en Computación",
      languages: "Idiomas",
      spanish: "Español",
      italian: "Italiano",
      portuguese: "Portugués",
      english: "Inglés",
      certifications: "Certificaciones",
      certificationNameItalian: "Diploma de Italiano Básico",
      certificationDateItalian: "2011",
      italianBasicDiploma: "Diploma de Italiano Básico",
      portugueseBasicDiploma: "Diploma de Portugués Básico",
      highSchoolDiploma: "Diploma Educación Media Superior",

      certificationNamePortuguese: "Diploma de Portugués Básico",
      certificationNameHighSchool: "Diploma Educación Media Superior",
      certificationNameProfessionalDeveloper: "Professional Developer",

      fechaObtencion: "Fecha de Obtención",

      skills: "Habilidades",
      programmingLanguages: "Lenguajes de Programación",
      frameworks: "Desarrollo Front-End",
      backendDevelopment: "Desarrollo Back-End",
      databases: "Bases de Datos",
      technicalSkills: "Habilidades Técnicas",
      networks: "Redes",

      developmentAndContributions:
        "Desarrollo y contribuciones en proyectos Back-End y Front-End.",
      cloudServices: "Experiencia con servicios en la nube: AWS (EC2, S3).",
      agileMethodologies: "Metodologías ágiles",
      versionControl: "Control de versiones: GIT.",
      basicKnowledgeInNetworking: "Conocimientos básicos en networking.",
      projectFinalTitle: "Proyecto final Front End III (Digital House)",
      projectFinalDescription:
        "Se explica toda la consigna en el 'README.md' del repositorio, pero en resumen es un proyecto full React + Vite, una SPA que permite el cambio a modo oscuro/brillante, agregar y quitar odontólogos de favorito, tiene validaciones en el contacto y utiliza una API para renderizar la información de los mismos.",

      projectTitle: "Proyecto Integrador - Digital House",
      projectDescription:
        "Integramos back/front con AWS, usando Java/JavaScript/React/MySQL/CSS/HTML. Es una página web que desplegamos en AWS, la cual permite el registro, autenticación de usuarios en base a sus roles, para poder comprar, reservar productos por un tiempo determinado, y tiene varias funcionalidades, entre ellas acceder al historial de reservas, poder agregar productos/eliminarlos/modificarlos, buscar por varios filtros los mismos, agregar/quitar de favoritos productos que el usuario quiera.",

      projectFinalFrontEndITitle: "Proyecto final Front End I (Digital House)",
      projectFinalFrontEndIDescription:
        "Se explica toda la consigna en el 'README.md' del repositorio, pero en resumen es un proyecto hecho 100% en HTML con CSS, se busca replicar exactamente una página en base al modelo recibido en Figma.",

      replicaPokemonTitle: "Réplica del juego 'Pokemon'",
      replicaPokemonDescription:
        "Al terminar el bachillerato tecnológico, por hobby creé una réplica casi exacta del famoso juego Pokémon, usando MySQL y Visual Basic. Permitía jugar, capturar Pokémon, luchar con ellos, ganar experiencia, recorrer los mapas, registrarse y loguearse con un usuario, y mantener el estado de su cuenta (Pokémon atrapados, niveles, etc.). Está programado en Visual Basic .NET y utilicé MySQL para la conexión con la base de datos. Mi idea en ese entonces era probar hasta dónde podía llegar creando un juego de tipo RPG con los conocimientos que ya tenía. El repositorio no tiene todos los commits que debería, dado que en ese entonces no usaba GitHub, pero el código está hecho 100% por mí, y tengo los archivos/carpetas originales que datan de 2014 como prueba de ello. Además, le hice adaptaciones a la actualidad para que pueda funcionar de manera correcta.",
      personalProjectVBHaxballTitle:
        "Proyecto Personal - Visual Basic y Haxball",
      personalProjectVBHaxballDescription:
        "Un proyecto personal también, en Visual Basic luego de terminar Bachiller, el cual usaba el famoso juego Haxball y el foro de AUH (Asociación Uruguaya de Haxball), para registrar/loguear y permitir funcionalidades a los usuarios, vinculados a ese foro y ese juego. Dado que el juego no disponía de un sistema de registro, mi aplicación permitía identificar a los usuarios, crear salas para jugar entre ellos y crear partidas oficiales de las mismas, entre otros tipos de controles/funcionalidades, dependiendo si era un administrador, árbitro, capitán, jugador, etc. Todo guardado en una base de datos (muy parecido al proyecto de Pokemon, solo que en este caso editaba/agregaba HTML mediante Visual Basic y limitaba el control del usuario).",

      oldProjectsTitle: "Proyectos Viejos",
      oldProjectsDescription:
        "Tengo proyectos en C++, C#, Pascal, Batch, Shell, pero son muy viejos, de cuando cursaba bachillerato o mis primeros semestres de facultad. No utilizaba GitHub en ese entonces, así que tampoco los tengo en mis repositorios. Eran proyectos estilo armar una biblioteca virtual, control de usuarios, de productos, etc. Cosas bastante estándar. Lo único que puede resaltar es que terminé usando sistemas complejos de ordenado de datos en C# como árbol binario, o que tanto en C# como en C++ usaba punteros de memoria para almacenar datos, archivos binarios también o de texto plano.",
      allRightsReserved: "Todos los derechos reservados.",

      microTitle: "Micro Servicio estilo Netflix",
      microDescription:
        "Es un proyecto de BackEnd que maneja microservicios, similar a plataformas de streaming modernas como Netflix/Primevideo. Almacena películas en su propia base de datos MySQL, series en su base de datos MongoDB, y ambas se acceden a través del microservicio Catálogo, el cual se accede mediante un Gateway y utiliza Feign para comunicarse con películas y series (dos microservicios separados).El proyecto utiliza RabbitMQ (para gestión de colas), Zipkin (trazabilidad), un gateway de API, Eureka (servidor de autodescubrimiento), FeignClient, Spring Cloud, Resilience4j (interruptor de circuito); está programado en Java + Spring 3.X, y tiene todas las configuraciones programadas en yml, en su propio repositorio linkeado debajo. La carta de desafío está disponible en su repositorio, así como su implementación.",

      educationalSystem: "Sistema de Educación UTU",
      educationalDesc:
        "Proyecto final del ITS, tercer año. El mismo consiste en un proyecto grande, el cual está muy bien documentado en el repositorio, con su correspondiente presupuesto, tablas de la base de datos con MER y normalizaciones, funciones de red/sistema operativo a usar, tiempo del proyecto, nombre de la empresa, entre otros temas. Consiste en una aplicación que administra las materias, institutos, grupos, cursos, alumnos y docentes de todas las instituciones de UTU del Uruguay. En la misma se pueden asignar inasistencias, notas, promedios, fechas de exámenes y parciales. Genera un boletín tanto para los parciales como exámenes, divididos por sus correspondientes institutos, grupos y docentes. Permite el registro de las personas dentro de la institución con su correspondiente rol, el cual permite o deniega acceso a ciertas funciones de la aplicación. Usando mySQL y vb.net",

      bibliotecaTitle: "Biblioteca - Shell Script",
      bibliotecaDesc:
        "Proyecto hecho para Sistemas Operativos II en el ITS. Consiste en programar 100% en Shell Script una biblioteca de libros, videos, revistas y escritos. Permite realizar CRUD de estos elementos, además de registrar usuarios para realizar préstamos de los mismos. Se hace seguimiento de los préstamos y la cantidad de ítems, y se informa al momento de ingresar si hay devoluciones atrasadas teniendo en cuenta las fechas. Para ello, se manipulan archivos .txt por medio de Shell Script para realizar CRUD de los datos correspondientes.",

      busTitle: "Sistema de Buses - C/C++",
      busDesc:
        "Proyecto hecho para Programación II en el ITS. Consiste en un programa hecho en Turbo C/C++, el cual permite CRUD de un sistema de buses para registrar: ómnibus, recorridos, viajes, pasajes, entre otros datos escritos en el readme.md del repositorio. Todo está hecho en archivos binarios por el mismo programa.",

      navHome: "Inicio",
      navProject: "Proyectos",
      automaticTesting: "Pruebas automatizadas con Selenium",
      navContact: "Contacto",

      IngresarNombre: "Nombre",
      IngresarEmail: "Email",
      IngresarMensaje: "Mensaje",
      Enviar: "Enviar",
      Enviando: "Enviando...",
      MensajeSuceful: "Mensaje enviado correctamente",
      MensajeError: "Error al enviar el mensaje",
    },
  },

  pt: {
    translation: {
      webDevelopment: "Desenvolvimento web e manutenção de aplicações.",

      agileCollaboration:
        "Colaboração em equipes ágeis utilizando metodologias Scrum.",

      featureImplementation:
        "Implementação de novos recursos e resolução de problemas.",

      databaseMaintenance: "Criação e manutenção de bancos de dados.",

      unitTesting: "Testes unitários.",

      personalInfo: "Informações pessoais",
      workExperience: "Experiência profissional",

      name: "Nome",
      email: "Email",
      phone: "Telefone",
      linkedIn: "LinkedIn",
      github: "GitHub",
      developerExperience: "Desenvolvedor Full Stack/Back End",
      education: "Educação",
      highSchool: "Diploma de Ensino Médio",
      professionalDeveloper: "Desenvolvedor Profissional",
      backendSpecialist: "Especialista em Backend",
      computerEngineer: "Engenheiro de Computação",
      languages: "Idiomas",
      spanish: "Espanhol",
      italian: "Italiano",
      portuguese: "Português",
      english: "Inglês",
      certifications: "Certificações",
      certificationNameItalian: "Diploma Básico em Italiano",
      certificationDateItalian: "2011",
      certificationNamePortuguese: "Diploma Básico em Português",
      certificationDatePortuguese: "2011",
      certificationNameHighSchool: "Diploma de Ensino Médio",
      certificationDateHighSchool: "2014",
      certificationNameProfessionalDeveloper: "Desenvolvedor Profissional",
      certificationDateProfessionalDeveloper: "2023",
      skills: "Habilidades",
      programmingLanguages: "Linguagens de Programação",
      frameworks: "Desenvolvimento FrontEnd",
      backendDevelopment: "Desenvolvimento Backend",
      databases: "Bancos de Dados",
      technicalSkills: "Habilidades Técnicas",
      networks: "Redes",
      spokenAndWritten: "Falado e escrito",
      needsReview: "necessitam revisão",
      spokenWrittenUnderstanding: "falado, escrito e compreensão",
      practiceRequiredForFormality: "prática necessária para formalidade",
      italianBasicDiploma: "Diploma Básico em Italiano",
      portugueseBasicDiploma: "Diploma Básico em Português",
      highSchoolDiploma: "Diploma de Ensino Médio",
      fechaObtencion: "Data de obtenção",
      developmentAndContributions:
        "Desenvolvimento e contribuições em projetos Back-End e Front-End.",
      cloudServices: "Experiência com serviços de nuvem: AWS (EC2, S3).",
      agileMethodologies: "Metodologias ágeis",
      versionControl: "Controle de versão: GIT.",
      basicKnowledgeInNetworking: "Conhecimento básico em redes.",
      onCourse: "Em progresso",

      projectTitle: "Projeto Integrado - Digital House",
      projectDescription:
        "Integramos back/front com AWS, usando Java/JavaScript/React/MySQL/CSS/HTML. É uma página da web implantada na AWS que permite registro de usuário, autenticação baseada em funções, compra de produtos e reserva para um tempo específico. Inclui várias funcionalidades como acesso ao histórico de reservas, adição/exclusão/modificação de produtos, pesquisa de produtos por vários filtros e adição/remoção de favoritos.",
      projectFinalTitle: "Projeto Final Front End III (Digital House)",
      projectFinalDescription:
        "Todo o enunciado está explicado no 'README.md' do repositório, mas em resumo, é um projeto completo em React + Vite, um SPA que permite alternar entre modo escuro/claro, adicionar e remover dentistas dos favoritos, possui validações no formulário de contato e usa uma API para renderizar suas informações.",

      projectFinalFrontEndITitle: "Projeto Final Front End I (Digital House)",
      projectFinalFrontEndIDescription:
        "Todo o trabalho está explicado no 'README.md' do repositório, mas em resumo, é um projeto feito 100% em HTML com CSS. O objetivo é replicar uma página exatamente com base no modelo recebido no Figma.",

      replicaPokemonTitle: "Réplica do Jogo 'Pokemon'",
      replicaPokemonDescription:
        "Após terminar o ensino médio técnico, como hobby, criei uma réplica quase exata do famoso jogo Pokémon usando MySQL e Visual Basic. Permitia jogar, capturar Pokémon, batalhar com eles, ganhar experiência, explorar mapas, registrar e fazer login com um usuário, e manter o estado de sua conta (Pokémon capturados, níveis, etc.). É programado em Visual Basic .NET, e usei MySQL para a conexão com o banco de dados. Minha ideia naquela época era testar até onde poderia ir criando um jogo do tipo RPG com o conhecimento que já tinha. O repositório não tem todos os commits que deveria, pois eu não estava usando o GitHub naquela época, mas o código é 100% meu, e tenho os arquivos/pastas originais datados de 2014 como prova. Além disso, fiz atualizações para garantir que funcione corretamente hoje.",

      personalProjectVBHaxballTitle: "Projeto Pessoal - Visual Basic e Haxball",
      personalProjectVBHaxballDescription:
        "Outro projeto pessoal, em Visual Basic após terminar o ensino médio, que usava o famoso jogo Haxball e o fórum AUH (Associação Uruguaia de Haxball) para registrar/login e permitir funcionalidades para usuários vinculados a esse fórum e jogo. Como o jogo não tinha um sistema de registro, minha aplicação permitia identificar usuários, criar salas para eles jogarem e criar partidas oficiais, entre outros tipos de controles/funcionalidades, dependendo se eram administrador, árbitro, capitão, jogador, etc. Tudo era salvo em um banco de dados (muito semelhante ao projeto Pokémon, exceto que neste caso, editava/adicionava HTML através do Visual Basic e controle de usuário limitado).",

      oldProjectsTitle: "Projetos Antigos",
      oldProjectsDescription:
        "Tenho projetos em C++, C#, Pascal, Batch, Shell, mas são muito antigos, da época do ensino médio ou dos primeiros semestres da faculdade. Não usei o GitHub naquela época, então não os tenho nos meus repositórios também. Eram projetos como construir uma biblioteca virtual, controle de usuário, gestão de produtos, etc. Coisas bastante padrão. O único destaque é que acabei usando sistemas complexos de ordenação de dados em C# como uma árvore binária, e tanto em C# quanto em C++, usei ponteiros de memória para armazenar dados, arquivos binários, bem como texto simples.",

      allRightsReserved: "Todos os direitos reservados.",

      repositories: "Repositórios",
      deployedPage: "Página Implantada",
      projectNameJuntos: "Juntos",
      resumeTitle: "Resumo",
      softwareDeveloper: "Desenvolvedor de software",
      certificationName: "Certificação",
      noteTitle: "App de Notas",
      noteDescription:
        "É uma aplicação full-stack que utiliza um banco de dados H2 com Spring Boot + Hibernate, React + Vite. Permite gerenciar notas, adicionar/modificar/excluir, adicionar ou remover categorias, criar novas categorias e filtrar notas por categorias. Além disso, as notas podem ser arquivadas e desarquivadas.",

      microTitle: "Microserviço Estilo Netflix",
      microDescription:
        "É um projeto de Backend que lida com microserviços, semelhante a plataformas modernas de streaming como Netflix/Primevideo. Armazena filmes em seu próprio banco de dados MySQL, séries em seu banco de dados MongoDB, e ambos são acessados através do microserviço de Catálogo, que é acessado através de um Gateway e usa Feign para se comunicar com filmes e séries (dois microserviços separados). O projeto usa RabbitMQ (para gerenciamento de fila), Zipkin (rastreamento), um gateway de API, Eureka (servidor de auto-descoberta), FeignClient, Spring Cloud, Resilience4j (circuit breaker); é programado em Java + Spring 3.X e tem todos os arquivos de configuração em yml centralizados no repositório vinculado abaixo. A carta de desafio está disponível em seu repositório, bem como sua implementação.",

      sistemaEducativo: "Sistema Educacional UTU",
      descEducacional:
        "Projeto final de ITS, terceiro ano. É um grande projeto, bem documentado no repositório, com seu respectivo orçamento, tabelas de banco de dados com ERD e normalizações, funções de rede/sistema operacional a serem usadas, cronograma do projeto, nome da empresa, entre outros tópicos. Consiste em uma aplicação que gerencia disciplinas, institutos, grupos, cursos, alunos e professores de todas as instituições UTU no Uruguai. Permite atribuir faltas, notas, médias, datas de prova e prova parcial. Gera um relatório tanto para provas parciais quanto para finais, dividido por seus respectivos institutos, grupos e professores. Permite o registro de pessoas dentro da instituição com seu papel correspondente, que concede ou nega acesso a certas funções da aplicação. Usando mySQL e vb.net.",

      bibliotecaTitle: "Biblioteca - Script Shell",
      bibliotecaDesc:
        "Projeto realizado para Sistemas Operacionais II na ITS. Consiste em programar 100% em Shell Script uma biblioteca de livros, vídeos, revistas e escritos. Permite realizar operações CRUD nesses elementos, bem como registrar usuários para fazer empréstimos dos mesmos. Rastreia empréstimos e o número de itens, e informa ao entrar se houver devoluções em atraso levando em conta as datas. Para isso, manipulam-se arquivos .txt por meio do Shell Script para realizar operações CRUD nos dados correspondentes.",

      busTitle: "Sistema de Ônibus - C/C++",
      busDesc:
        "Projeto realizado para Programação II na ITS. Consiste em um programa feito em Turbo C/C++, que permite operações CRUD para um sistema de ônibus para registrar: ônibus, rotas, viagens, bilhetes, entre outros dados escritos no readme.md do repositório. Tudo é feito em arquivos binários pelo mesmo programa.",

      navHome: "Início",
      navProject: "Projetos",
      automaticTesting: "Teste automatizado com Selenium",

      educationalSystem: "Sistema Educacional UTU",
      educationalDesc:
        "Projeto final de ITS, terceiro ano. É um grande projeto, bem documentado no repositório, com seu respectivo orçamento, tabelas de banco de dados com ERD e normalizações, funções de rede/sistema operacional a serem usadas, cronograma do projeto, nome da empresa, entre outros tópicos. Consiste em uma aplicação que gerencia disciplinas, institutos, grupos, cursos, alunos e professores de todas as instituições UTU no Uruguai. Permite atribuir faltas, notas, médias, datas de prova e prova parcial. Gera um relatório tanto para provas parciais quanto para finais, dividido por seus respectivos institutos, grupos e professores. Permite o registro de pessoas dentro da instituição com seu papel correspondente, que concede ou nega acesso a certas funções da aplicação. Usando mySQL e vb.net.",
      navContact: "Contato",

      IngresarNombre: "Nome",
      IngresarEmail: "Email",
      IngresarMensaje: "Mensagem",
      Enviar: "Enviar",
      Enviando: "Enviando...",
      MensajeSuceful: "Mensagem enviada com sucesso",
      MensajeError: "Erro ao enviar a mensagem",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
