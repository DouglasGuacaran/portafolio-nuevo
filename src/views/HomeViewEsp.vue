<template>
  <div class="flex body">
    <Navbar id="nav-bar-sticky"/>
    <div class="section1" id="section1">
      <img class = "image-profile" src="../assets/img/perfil_1-transformed11.png" alt="Foto Perfil">
      <div class="section1-blur">
        <h1 text class="flex text-title">Bienvenido</h1>
        <p class="text-subtitle">
          ¡Hola! soy un desarrollador con conocimientos en React y Vue para el desarrollo de interfaces de usuario interactivas, Node.js para construir aplicaciones del lado del servidor, y Django para el desarrollo de la lógica de negocio, además, estoy familiarizado con Git para el control de versiones y principios de seguridad web para garantizar la protección de las aplicaciones. También tengo experiencia en consultas a APIRest y en la configuración de infraestructuras utilizando herramientas como Docker. Además, tengo conocimientos en programación orientada a objetos y tratamientos de errores.
        </p>
        <p class="text-subtitle">
          Recientemente, completé un programa académico intensivo en ciencia de datos, combinando habilidades matemático-estadísticas con programación para analizar datos y construir modelos predictivos  machine learning y la configuración de redes neuronales que ayudarían a las computadoras a la toma de decisiones en situaciones complejas.

          Poseo habilidades como la resolución de problemas, fácil adaptabilidad e integración de equipos de trabajo, soy creativo, orientado al logro de objetivos, con capacidad de liderazgo, apasionado por resolver problemas y de excelente comunicación transversal.
        </p>      </div>
    </div>
    <div class="about" id="about">
      <h2>Acerca De</h2>
      <div class="about-cards" id="cards">
        <Card
          iconName="fa-solid fa-gears"
          name="Perfil Profesional"
          content="Desarrollador FullStack Junior en proyectos con el uso de lenguajes de programación como: Java, JavaScript, marcos de trabajo tales como; Vue Js y Django además de la reconocida librería React."
        />
        <Card
        iconName="fa fa-mobile"
        name="Habilidades"
        content="Comunicación efectiva, capacidad de liderazgo, resolución de problemas, trabajo en equipo, persona analítica, relator de cursos, nivel de ingles intermedio llegando a ser conversacional."
        />
        <Card
          iconName="fa fa-magic"
          name="Un poco de mí"
          content="Me gusta viajar y conocer personas, soy aficionado al Rock, el ajedrez y los deportes, el sabor del café en grano, la cerveza artesanal y un buen asado a la parrilla."
        />
      </div>
    </div>
    <div class="portfolio" id="portfolio">
      <h2>Portafolio</h2>
      <div class="portfolio-cards-container">
        <div class="portfolio-cards-group" role="radiogroup">
          <div
            class="portfolio-card__btn"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            aria-label="Select image one"
          >
          <img
              src="../assets/Money.jpg"
          />
          <div class="portfolio-card__description">
            <a
            href="https://douglasguacaran.github.io/moneyconverter-react/"
            target="_blank"
            >
            Proyecto Money Converter, realizado en React, consumiendo la API www.mindicador.cl, puede realizar reconversión de monedas
          </a>
          </div>
        </div>
          <div
            class="portfolio-card__btn"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            aria-label="Select image two"
          >
            
            <img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <div class="portfolio-card__description">
              <a
              href="https://douglasguacaran.github.io/vue-big-mobile//"
              target="_blank"
              >
            Proyecto Big Mobile, e-commerce sobre una tienda virtual de ventas de celulares realizado en Vue, consumiendo archivos Json. Parte de la prueba como Front End Trainee 
          </a>
          </div>
          </div>

          <div
            class="portfolio-card__btn"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            aria-label="Select image three"
          >
          <img
          src="https://images.unsplash.com/photo-1650573547848-d7b93ed79782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="Image description"
          />
          <div class="portfolio-card__description">
            <a
            href="https://douglasguacaran.github.io/vue-pages-pokedex"
            target="_blank"
            >
            Proyecto Poke-Dex, realizado en Vue, consumiendo la API www.pokeapi, puede navegar en ella y hasta puedas atrapar Pokémones.
          </a>
          </div>
          </div>

          <div
            class="portfolio-card__btn"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            aria-label="Select image four"
          >
          
          <img
          src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Image description"
          />
          <div class="portfolio-card__description">
            <a
            href="https://douglasguacaran.github.io/vue-marveldex"
            target="_blank"
            >
            Proyecto Poke-Marvel, realizado en Vue, consumiendo la API de Marvel, podrás navegar en ella y hasta puedas editar los nombres de los héroes.
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service" id="service">
      <h2>Perfiles como Desarrollador</h2>
      <div class="perfil-cards" id="cards">
        <CardService
          iconName="fa-regular fa-gem"
          title="Front-End"
          content="Mis conocimientos me permiten implementar soluciones avanzadas que mejoran la experiencia del usuario en plataformas y sistemas. Poseo habilidades en lenguajes de programación como HTML, CSS, JavaScript, y marcos de trabajo como Vue.js y Django. Además, tengo sólidos conocimientos en el uso de librerías como React, para implementar el diseño y la funcionalidad de las aplicaciones web de forma responsiva."
        />
        <CardService
        iconName="fa-solid fa-wand-magic-sparkles"
        title="Back-End y QA"
        content="Además mi formación me permite dar soporte a sistemas y plataformas robustas y escalables utilizando tecnologías como node.Js.  Integración a servicios API Restful, diseño y mantenimiento de bases de datos SQL y NoSQL. con el fin de mejorar la calidad de las aplicaciones haciendola escalable bajo patrones como MVC, además de implementar pruebas funcionales, de integración y de humo."
        />
        <CardService
          iconName="fa-solid fa-rocket"
          title="Ciencia de Datos"
          content="Recientemente me he formado en el campo de la ciencia de datos con el fin de manejar datos e implementar modelos predictivos para analizar grandes conjuntos de datos utilizando técnicas estadísticas, aprendizaje de máquina y redes neuronales. Estas tecnologías permiten extraer información valiosa que ayudan a las empresas y organizaciones a tomar decisiones fundamentales para su desarrollo y mejoramiento."
        />
      </div>
    </div>
    <div class="studies" id="studies">
      <h2 class="studies-title">Estudios</h2>
      <div class="carousel1">
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/img/img1.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/img2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/img3.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/img4.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/img5.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/img6.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previo</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Adelante</span>
          </button>
        </div>
      </div>
      <div class="studies-main">
        <h2>Estudios</h2>
        <h3>Programas Educativos Intensivos</h3>
        <ul>
          <li>
            <strong>Certified Tech Developer (Beca Globant - Mercadolibre)</strong> - Digital House (Tercer bimestre finalizado).
          </li>
          <li>
            <strong>Ciencia de datos (Beca Talento Digital)</strong> -
            AwakeLab by Aspasia.
          </li>
          <li>
            <strong>Desarrollador aplicaciones Full Stack Python Trainee (Beca SENCE)</strong>
            - Sustantiva Inst. de Formación Laboral.
          </li>
          <li>
            <strong>LowCode/NoCode</strong> - Microsoft Power Platform
            - EY.
          </li>
          <li>
            <strong>Desarrollador aplicaciones de Software (Beca SENCE)</strong> - Claro -
            Madicap Inst. de Formación Laboral
          </li>
          <li>
            <strong>Desarrollador aplicaciones FrontEnd trainee (Beca Talento Digital)</strong> -
            AwakeLab by Adalid Inkmark ltda.
          </li>
        </ul>
        <h3>Postgrado</h3>
        <ul>
          <li><strong>Estudios en Física Médica</strong> - Centro de Estudios Avanzados del Instituto Venezolano de Investigaciones Científicas</li>
        </ul>

        <h3>Universitaria</h3>
        <ul>
          <li>
            <strong>Profesor de Física</strong> - Título revalidado por
            Universidad de Chile. Reconocimiento Cum Laude a nota alcanzada. 1999 - 2005
          </li>
        </ul>
        <h3>Cursos de perfeccionamiento en Informática</h3>
        <ul>
          <li>
            <strong>Curador de Datos</strong> - Claro, Fundación Carlos Slim. 2021
          </li>
          <li>
            <strong>Lógica de Programación</strong> - SENCE - Fundación Carlos Slim. 2020
          </li>
          <li>
            <strong>Introducción a la Programación con Python</strong> -
            SENCE - Universidad Austral. 2020
          </li>
          <li>
            <strong>Processing Data with Python</strong> - Coursera. 2020 
          </li>
          <li>
            <strong>Programación con JavaScript Ed 5</strong> - SENCE - Movistar. 2020.
          </li>
          <li>
            <strong>Operador Integral de Computadoras</strong> - INESCO. 1996</li>
        </ul>
        <h3>Cursos</h3>
        <ul>
          <li>
            <strong>Deberes y Derechos del Personal de Salud</strong> - Escuela Nacional de Administración Pública. 2020
          </li>
          <li>
            <strong>Sistema de Calificación del Personal de la Salud</strong> - Escuela Nacional de Administración Pública. 2020
          </li>
          <li>
            <strong>Protección Radiológica. 24 horas.</strong> - Instituto de Protección Radiológica. Chile 2017
          </li>
          <li>
            <strong>Principios Básicos de Gestión de Calidad Basados en la Norma ISO 9001.</strong> - Instituto Venezolano de Investigaciones Científicas. 2016
          </li>
          <li>
            <strong>Uso del sistema LIEN-IVLAD e inducción a Agilent VEE.</strong> - Instituto Venezolano de Investigaciones Científicas. 2015
          </li>
          <li>
            <strong>Curso Especial: Energías Alternativas</strong> - Instituto Venezolano de Investigaciones Científicas. 2013
          </li>
          <li>
            <strong>Formadores en Protección Radiológica para la Práctica Médica</strong> - Ministerio del poder popular para la Salud. 2012
          </li>
          <li>
            <strong>Curso de Intervencionismo Dirigido a Físicos Médicos</strong> - Instituto de Oncología “Dr. Luis Razetti”. 2012
          </li>
          <li>
            <strong>Tomografía Computarizada Dirigido a Físicos Médicos</strong> - Instituto de Oncología “Dr. Luis Razetti”. 2012
          </li>
          <li>
            <strong>Conferencia Magistral en Tomografía Computarizada</strong> - Instituto de Oncología “Dr. Luis Razetti”. 2012
          </li>
          <li>
            <strong>Protección Radiológica en Radiología Intervencionista con énfasis en Cardiología</strong> - Sociedad Peruana de Protección Radiológica. 2012
          </li>
          <li>
            <strong>Protección Radiológica en Tomografía Computarizada</strong> - Sociedad Peruana de Protección Radiológica. 2012
          </li>
          <li>
            <strong>Protección Radiológica en Mamografía</strong> - Sociedad Peruana de Protección Radiológica. 2012
          </li>
          <li>
            <strong>Simposio Internacional Sobre Protección Radiológica</strong> - Sociedad Peruana de Protección Radiológica. 2012
          </li>
          <li>
            <strong>Sistema de Gestión de Calidad en Órganos Reguladores</strong> - Sociedad Peruana de Protección Radiológica. 2012
          </li>
          <li>
            <strong>Protección Radiológica al paciente en Radiodiagnóstico, Medicina Nuclear y Radioterapia</strong> - Instituto Venezolano de Investigaciones Científicas. 2012
          </li>
          <li>
            <strong>I Jornadas de Protección Radiológica del Paciente “Dra. Clemencia García Villasmil”,</strong> - Sociedad Venezolana de Protección Radiológica (SOVEPRA). 2011
          </li>
          <li>
            <strong>Dosimetría Interna Aplicada a la Medicina Nuclear</strong> - Instituto Venezolano de Investigaciones Científicas. 2011
          </li>
          <li>
            <strong>Aspectos Básicos de la Propiedad Intelectual</strong> - Servicio Autónomo de la Propiedad Intelectual. 2010
          </li>
          <li>
            <strong>ISO 19011:2002 Directrices para la auditoría de los Sistemas de Gestión de la Calidad y/o Ambiental</strong> - Ministerio del Poder Popular para el Comercio y el Servicio Autónomo Nacional de Normalización, Calidad, Metrología y Reglamentos Técnicos (SENCAMER). 2008
          </li>
          <li>
            <strong>Fluoroscopia y Cinefluorografía</strong> - Instituto Venezolano de Investigaciones Científicas. 2008
          </li>
          <li>
            <strong>Método de Montecarlo</strong> - Instituto Venezolano de Investigaciones Científicas. 2008
          </li>
          <li>
            <strong>Curso de Dosimetría Termoluminiscente</strong> - Instituto Venezolano de Investigaciones Científicas. 2007
          </li>
          <li>
            <strong>Taller de Comunicación Efectiva e Integración Grupal antes los Retos del Cambio</strong> - Instituto Venezolano de Investigaciones Científicas. 2007
          </li>
          <li>
            <strong>Curso Básico de Protección Radiológica, 40 horas para Oficiales de Seguridad Radiológica</strong> - Instituto Venezolano de Investigaciones Científicas. 2006
          </li>
          <li>
            <strong>Curso Regional de Capacitación sobre Garantía de Calidad en Imágenes en el Diagnóstico por Imágenes</strong> - Organismo Internacional de Energía Atómica con el Gobierno de México a través de la Universidad Nacional Autónoma de México (UNAM) y del Instituto Nacional de Cancerología (INCAN). 2006
          </li>
          <li>
            <strong>Electricidad - Electromagnetismo - Magnetismo - Óptica</strong> - 3ª Escuela Venezolana para enseñanza de la física - Universidad de los Andes 2004
          </li>
          <li>
            <strong>Sistema Solar - Física de la Tierra</strong> - 3ª Escuela Venezolana para enseñanza de la física - Universidad de los Andes 2004
          </li>
          <li>
            <strong>La Mecánica de Newton, Usted y Yo</strong> - 2ª Escuela Venezolana para enseñanza de la física - Universidad de los Andes 2002
          </li>
          <li>
            <strong>La Física y la Vulnerabilidad de Zonas Urbanas</strong> - 2ª Escuela Venezolana para enseñanza de la física - Universidad de los Andes. 2002
          </li>
          <li>
            <strong>Nociones Generales de Astronomía y Astrofísica</strong> - 2ª Escuela Venezolana para enseñanza de la física - Universidad de los Andes. 2002
          </li>
          <li>
            <strong>El Análisis Dimensional de la Física</strong> - 2ª Escuela Venezolana para enseñanza de la física. 2002
          </li>
          <li>
            <strong>2da Escuela de la Enseñanza de la Física</strong> - 2ª Escuela Venezolana para enseñanza de la física - Universidad de los Andes. 2002
          </li>
        </ul>
      </div>
      <div class="studies-bottom">
        <div class="studies-bottom-main">
          <div class="studies-bottom-container">
            <div class="studies-bottom-main-content">
              <img
                class="studies-bottom-img"
                src="../assets/img/perfil.png"
                alt="Foto perfil"
              />
              <h2>Douglas Guacarán</h2>
            </div>
            <h3>Desarrollador Front End</h3>
            <span class="studies-bottom-parraph"
              >Desarrollador con manejo avanzado en diseño web responsive con HTML, CSS, JavaScript, Bootstrap, programación orientada a objetos, patrones de programación con principios SOLID y metodologías Ágiles, con control manejo de control de versiones y pruebas unitarias, funcionales y de integración.</span
            >
          </div>
          <div class="studies-bottom-icons">
            <img src="../assets/img/icons/vue.png" alt="15">
            <img src="../assets/img/icons/react.png" alt="17">
            <img src="../assets/img/icons/python.png" alt="14">
            <img src="../assets/img/icons/Java.png" alt="10">
            <img src="../assets/img/icons/angular.svg" alt="18">
            <img src="../assets/img/icons/git-bash.svg" alt="6">
            <img src="../assets/img/icons/github.jpg" alt="7">
            <img src="../assets/img/icons/nodejs-2.svg" alt="3">
            <img src="../assets/img/icons/css3.svg" alt="4">
            <img src="../assets/img/icons/html5.svg" alt="8">
            <img src="../assets/img/icons/javascript-1.svg" alt="11">
            <img src="../assets/img/icons//postgresql.svg" alt="13">
            <img src="../assets/img/icons/vuetify.svg" alt="16">
            <img src="../assets/img/icons/bootstrap-4.svg" alt="2">
            <img src="../assets/img/icons/wordpress.png" alt="9">
            <img src="../assets/img/icons/Jira.png" alt="12">
            <img src="../assets/img/icons/bmc.png" alt="1">
            <img src="../assets/img/icons/CyberArk.png" alt="5">
          </div>
        </div>
      </div>
    </div>

    <div class="experience" id="experience">
      <h2>Experiencia Laboral</h2>
      <div class="experience-main">
        <ul>
          <li>
            <strong>Práctica - Trainee</strong> -
            <i>Elitsoft Ingeniería y Asesorías Informáticas LTDA</i> , Abril 
            2022 - julio 2022.
            <p>
              Algunas de mis tareas fueron: elaborar manuales de procedimientos de prueba manuales en QA, diseñar y ejecutar pruebas de humo y pruebas funcionales con uso de Control-M, revisión en Cyberark (consola) de los registros de las pruebas ejecutadas, registar en la plataforma Jira resultado de los test, staff QA contraparte ante cliente de la banca (Banco de Chile) llegando a ser asignado como responsable del área.
            </p>
          </li>
          <li>
            <strong> Cursos de Protección Radiológica de 24 horas Dictados</strong>
            <ul>
              <li>
              <p>
                Hemisferio Sur S.A. Providencia Santiago, Agosto 2018.
              </p>
            </li>
            <li>
              <p>
                Corporación Municipal de Castro, Chiloé, Enero 2019.
            </p>
            </li>
            <li>
              <p>
                Belcap Capacitaciones, La Serena. Junio 2019.
              </p>
            </li>
            <li>
              <p>
                Casa Moneda Chile. Junio 2019.
              </p>
            </li>
            <li>
              <p>
                CAPACITACIONES SST DE CHILE SPA, Modalidad On Line. Noviembre 2022.
              </p>
            </li>
            <li>
              <p>
                Belcap Capacitaciones, On Line. Marzo, Abril y Diciembre 2022.
              </p>
            </li>
          </ul>
        </li>
          <li>
            <strong>Oficial de Protección Radiológica</strong> -
            <i>Hospital Clínico Magallanes "Dr. Lautaro Navarro Avaria"</i> , junio 
            2020 - diciembre 2020.
            <p>
              Responsable de la seguridad radiológica de todo el personal ocupacionalmente expuesto de las instalaciones del hospital, en mi rol de asesor directivo gestioné el licenciamiento de las instalaciones de primera y segunda categoría pertenecientes al hospital. Organicé y dicté actividades de capacitación al personal.
            </p>
          </li>
          <li>
            <strong>Analista Senior en Protección y Seguridad de Instalaciones Radiactivas</strong> -
            <i>INGERAD</i> , noviembre 
            2017 - Abril 2020.
            <p>
              Asesor en protección radiológica a empresas del área industrial y del área médica, realicé las gestiones necesarias para el transporte de materiales radiactivos de hospitales regionales ante los entes correspondientes, elaboré la memoria de cálculo de blindaje del equipo de control de aduana del aeropuerto Arturo Merino Benitez (Santiago), fui relator de más de 10 cursos de Protección Radiológica por SENCE de forma presencial y on-line. 
            </p>
          </li>
          <li>
            <strong>Instituto Venezolano de Investigaciones Científicas</strong>
            <ul>
              
              <li>
              <strong>Profesional Asociado a la Investigación</strong> -
              <i>Unidad de Planta PEGAMMA</i> , septiembre 
              2014 - julio 2018.
              <p>
                Analista del Laboratorio de Altas Dosis de la Unidad de Planta de Esterilización por rayos Gamma (PEGAMMA) del IVIC, responsable de la seguridad radiológica de la instalación. Colaboré con el programa de maestría en Física Médica en la cátedra de Introducción a la Protección Radiológica en el tópico sobre Cálculo de Blindajes para aceleradores lineales de altas y bajas energías, tutor de tesis de estudiantes de pregrado.
              </p>
            </li>
            <li>
              <strong>Profesional Asociado a la Investigación</strong> -
              <i>Laboratorio Secundario de Calibración Dosimétrica del</i> , octubre 
              2005 - septiembre 2014.
              <p>
                Personal científico responsable de las magnitudes Dosis Absorbida en Agua y del Kerma en Aire. Calibré detectores de radiación, fuentes radiactivas y sistemas dosimétricos, elaboré curvas de calibración para dosimetría personal, realicé levantamientos radiométricos en instalaciones con equipos emisores de haces de fotones y neutrones, elaboré cálculos de blindaje a instalaciones de baja y altas energías. Participé en procedimientos de intercomparaciones de dosis con otros laboratorios, participé en misiones en instalaciones ubicadas en Venezuela con el fin de realizar pruebas de aceptación y de control de calidad a unidades de Radioterapia, Instalaciones de diagnóstico convencionales y digitales, participé como personal cientifico contraparte en proyectos nacionales de aseguramiento de calidad, fui nombrado jefe encargado del laboratorio en dos ocasiones.
              </p>
            </li>
            <li>
              <strong>Profesional en Entrenamiento</strong> -
              <i>Laboratorio Secundario de Calibración Dosimétrica del Instituto Venezolano de Investigaciones Científicas</i> Julio 
              2005 - agosto 2015.
              <p>
                Período de entrenamiento en el Laboratorio Secundario de Calibración Dosimétrica, donde mis tareas asignada fueron la calibración de detectores de radiación ionizante, sistemas dosimétricos en magnitudes de dosis absorbida y Kerma en aire.
              </p>
            </li>
            </ul>
          </li>

          <li>
            <strong>Universidad Pedagógica Experimental Libertador</strong>
            <ul>
          <li>
              <strong>Estudiante preparador Matemática IV</strong> - Semestre I 2002 
              <p>
                Estudiante preparador de la materia matemática IV, calculo diferencia e integral.
              </p>
            </li>
            <li>
              <strong>Estudiante preparador Fundamentos de Física</strong> - Semestre I 2003 
              <p>
                Estudiante preparador de la materia fundamentos de física de alumnos del III semestre.
              </p>
            </li>
          </ul>
          </li>
          <li>
              <strong>Docente de Física</strong> -
              <i>Unidades Educativas: Colegio “Los Próceres”, Colegio “María Auxiliadora”, Unidad Educativa Nacional “Lisandro Alvarado”, Unidad Educativa Nacional “Dr. Alberto Carnevalli”</i> julio 2000 - julio 2005
              <p>
                Docente contratado y titular de las materia de Física, matemática y Dibujo técnico a nivel de bachillerato en la ciudad de Barquisimeto Estado Lara, Venezuela.
              </p>
            </li>
        </ul>
      </div>
    </div>

    <div class="publications" id="publications">
      <h2>Publicaciones Científicas</h2>
      <div class="publications-main">
        <ul>
          <li>
            <i> Memorias V Congreso Latinoamericano de Física Médica. Encuentro Iberoamericano de Física Médica. III Congreso Peruano de Física Médica. VI Congreso Peruano de Protección Radiológica. C Leal. L Carrizales. D Guacarán. A Moreno y J Duran. <strong>Calibración de Detectores Portátiles de Radiación Ionizante.</strong> Cusco Perú 2010.</i>
          </li>
          <li>
            <i>Memorias V Congreso Latinoamericano de Física Médica. Encuentro Iberoamericano de Física Médica. III Congreso Peruano de Física Médica. VI Congreso Peruano de Protección Radiológica. L Carrizales. A Moreno. C Leal. D Guacarán y J. Duran. <strong>Diagnostico a Dos Décadas del Laboratorio Secundario de calibración Dosimétrica del Instituto Venezolano de Investigaciones Científicas.</strong> Cusco Perú 2010</i>
          </li>
          <li>
            <i>Memorias VIII Congreso Regional de Seguridad Radiológica y Nuclear, I Congreso Latinoamericano del IRPA, V Congreso Nacional de Protección Radiológica DSSA. Leal C. Villa N. Carrizales L. Guacarán D. Moreno A y Duran J. <strong>Estimación del Kerma en Procedimientos de Cardiología Intervencionista.</strong> Medellín Colombia 2010.</i>
          </li>
          <li>
            <i>Memorias VIII Congreso Regional de Seguridad Radiológica y Nuclear, I Congreso Latinoamericano del IRPA, V Congreso Nacional de Protección Radiológica DSSA. Guacarán D. Carrizales L. Leal C. Moreno A y Duran J. <strong>Evaluación Radiológica y Dosimétrica de la Unidad de Cobalto 60 Instalada en el Laboratorio Secundario de Calibración Dosimétrica de Venezuela.</strong> Medellín Colombia 2010.</i>
          </li>
          <li>
            <i>Memorias VIII Congreso Regional de Seguridad Radiológica y Nuclear, I Congreso Latinoamericano del IRPA, V Congreso Nacional de Protección Radiológica DSSA. Moreno A. Camacho C. Carrizales L. Leal C. Duran J y Guacarán D. <strong>Estimación del Kerma en Aire en la Piel de Pacientes Sometidos a Estudios de Endodoncia y Ortodoncia.</strong> Medellín Colombia 2010.</i>
          </li>
          <li>
            <i>Memorias VIII Congreso Regional de Seguridad Radiológica y Nuclear, I Congreso Latinoamericano del IRPA, V Congreso Nacional de Protección Radiológica DSSA. Duran J. Carrizales L. Leal C. Moreno A. y Guacarán D. <strong>Intercomparación de Coeficientes de Calibración de una Cámara Tipo Farmer LSCD-IVIC con el Laboratorio Seiberdorf, Viena.</strong> Medellín Colombia 2010.</i>
          </li>
          <li>
            <i>Encuentro Iberoamericano de Protección Radiológica, Simposio Internacional Sobre Protección Radiológica, C. Leal, L. Carrizales Silva, D. Guacarán, A. Moreno, J. Durán, N. Villa, <strong>Estimación del Kerma en procedimientos de cardiología Intervencionista.</strong></i>
          </li>
          <li>
            <i>Encuentro Iberoamericano de Protección Radiológica, Simposio Internacional Sobre Protección Radiológica, J. A. Durán, L. Carrizales S., C. Leal, A. Moreno, D. Guacarán, <strong>Intercomparación de los coeficientes de calibración de una cámara de LSCD-IVIC con el Laboratorio de Siebersdorf Viena.</strong></i>
          </li>
          <li>
            <i>Segundo Congreso Venezolano, Ciencia, Tecnología e Innovación, J. A. Durán, L. Carrizales S., C. Leal, A. Moreno, D. Guacarán,  <strong>Resultados de la República Bolivariana de Venezuela en la Comparación de Coeficientes de Calibración de la Red de LSCD-OIEA-OMS.</strong></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="contact" id="contact">
      <h2>Datos de Contacto</h2>
      <div class="contact-main">
        <div class="contact-main-col">
          <div class="card contact-card">
            <div class="card-body contact-body">
              <i class="fa fa-phone card-img-top"> </i>
              <h3>Teléfono</h3>
              <span>(+56) 9 4879 2726</span>
            </div>
          </div>
        </div>
        <div class="contact-main-col">
          <div class="card contact-card">
            <div class="card-body contact-body">
              <i class="fa-solid fa-envelope card-img-top"></i>
              <h3>Email</h3>
              <span>douglasguacaran@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="contact-main-col">
          <div class="card contact-card">
            <div class="card-body contact-body">
              <i class="fa fa-map-marker card-img-top"></i>
              <h3>Ubicación</h3>
              <span>Santiago de Chile, Región Metropolitana de Chile.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <form class="form" action="https://docs.google.com/forms/d/e/1FAIpQLSeCmbfwIVpUwuNA8AeAd1AGVKpgdugJTfSk0BMWlAoaAHefVQ/formResponse"> 
          <label for="entry.409911114" class="form-label" >
            Nombre
          </label>
          <input type="text" class="form-control" name="entry.409911114" required>
          <label for="entry.1646563546" class="form-label" >
            Email
          </label>
          <input type="email" class="form-control" name="entry.1646563546" required>
          <label for="entry.1025755838" class="form-label" >
            Asunto
          </label>
          <input type="text" class="form-control" name="entry.1025755838" required>
          <label for="entry.1621200888" class="form-label" >
            Mensaje
          </label>
          <textarea class="form-control" placeholder="Deje su mensaje acá" name="entry.1621200888"></textarea>
          <button class="contact-button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <button class="btn" v-on:click="topFunction()" id="mybtn">Subir</button>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Card from "../components/Card.vue";
import CardService from "../components/CardService.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Card,
    CardService,
    Footer,
    Navbar
  },
  methods: {
    handleScroll(event) {
      let mybutton = document.getElementById("mybtn");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  mounted(){
    
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
/* Estilos Generales */
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  }

#nav-bar-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.flex {
  display: flex;
}
  
.text-title {
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 26px;
  color: #000000;
}
.text-subtitle {
  padding: 5px;
  text-align: justify;
  color: #000000;
  font-size: 16px;
}
.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1625px;
  background-image: url("../assets/Escritorio.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
}
  
.section1-blur {
width: 85%;
text-align: center;
backdrop-filter: blur(1.0px);
background-color: hsla(0, 0%, 100%, 0.748);
border-radius: 15px;
padding: 10px;
margin: 60px;
}

.image-profile {
  margin:2px ;
  max-width: 200px;
}

.contact-form iframe {
  width: 335px;
}
  
@media screen and (min-width: 769px) {
    .flex {
      display:flex;
      justify-content: center;
    }
    .text-title {
      width: auto;
      font-size: 38px;
    }
    .text-subtitle{
      font-size: 19px;
      text-align: justify;
      color:#555;
    }
    .section1{
      flex-direction: row;
      padding: 20px;
      height: 1000px;
    }
    .section1-blur{
      max-width: 65%;
      padding: 5px;
    margin: 10px;
    }
    .image-profile {
    margin: 2px;
    max-width: 400px;
    margin-top: 80px;
    }
    .contact-form iframe {
      width: 700px;
    }
  }

.body {
  flex-direction: column;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
}

.about-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.card {
  transition: 0.4s;
}

.card:hover {
  background-color: #000;
  color: #ffffff;
  transition: 0.2;
}

.card span {
  font-size: 12px;
  font-weight: 400;
  margin: 5px;
  text-align: center;
}

.card span a {
  margin-bottom: 10px;
  color: #6195ff;
  text-decoration: none;
}

.icon {
  color: #6194fa;
  margin: 15px;
  font-size: 30px;
}

.perfil-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

@media screen and (min-width: 769px) {
  .about-cards {
    flex-direction: row;
  }

  .card span {
    font-size: 16px;
    margin: 20px
  }

  .perfil-cards {
    flex-direction: row;
    align-items: flex-start;
  } 
}
.portfolio {
  text-align: center;
  padding-top: 10px;
}

.portfolio-cards-container {
  width: 100%;
  margin: auto;
}

.portfolio-cards-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio-cards-group:hover .portfolio-card__btn:not(:hover) {
  filter: grayscale(100%);
  opacity: 0.75;
}

.portfolio-cards-group:hover .portfolio-card__btn:not(:hover)::after {
  background-color: rgba(#000, 0.5);
}

.portfolio-card__btn {
  position: relative;
  width: 80%;
  max-width: 395px;
  margin: 15px;
  padding: 0px;
  cursor: pointer;
  transition: 0.3s;
}

.portfolio-card__description {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color:#10A37F;
  font-size: 18px;
  opacity: 0;
  transform: rotateY(180deg);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
}

.portfolio-card__btn:hover .portfolio-card__description {
  transform: rotateY(0);
  opacity: 1;
}

.portfolio-card__btn img {
  width: 100%;
  border-radius: 5px;
  max-width: 100%;
}

.portfolio-card__btn a {
  margin: 10px;
  text-decoration: none;
  color: #10A37F;
  font-size: 14px;
  font-weight: 600;
  -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
  opacity: 0;
}

.portfolio-card__btn:hover a  {
  opacity: 1;
  -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
  text-decoration: none;
  color: #10A37F;
}

@media (min-width: 769px) {
  .portfolio {
  text-align: center;
  padding-top: 40px;
  }
  .portfolio-cards-group {
    flex-direction: row;
  }
  .portfolio-card__btn img {
    width: 100%;
  }
}

.service {
  text-align: center;
  padding-top: 60px;
  height: auto;
  background-color: #ffffff;
  margin: 5px;
}

.cardService {
  height: auto;
  width: 290px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0px;
  margin-bottom: 5px;
}

.cardService:hover {
  background-color: #000;
  color: #ffffff;
  transition: 0.2;
}

.cardService i {
  margin: 2px;
}
.column{
  min-height: 400px;
}

/* Seccion de estudios */

.studies-bottom-parraph{
  padding: 5px;
  font-size: 14px;
  color: #5D4581;
  font-weight:600;
  backdrop-filter: blur(1.0px);
  background-color: hsla(0, 0%, 100%, 0.578);
  border-radius: 5px ;
}

.studies {
  padding-top: 60px;
  height: auto;
  background-color: #ffffff;
}

.studies-title {
  text-align: center;
}

.studies-main {
  padding-top: 25px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.studies-main h2 {
  font-weight: 700;
}

.studies-main h3 {
  font-weight: 600;
  font-size: 22px;
}

@media screen and (min-width: 769px) {

  .cardService {
    display: flex;
    align-items: start;
    justify-content: center;
    height: auto;
    width: 400px;
    margin: 10px;
  }
  .studies-main {
    margin-left: 15%;
    margin-right: 15%;
  }
  .studies-bottom-parraph{
    width: 65%;
    font-size: 16px;
  }
}
.carousel1 {
  border: 1px solid rgba(0, 0, 0, 0.175);
  width: 70%;
  margin: auto;
}

.studies-bottom {
  text-align: center;
}

.studies-bottom-main {
  height: auto;
  opacity: 0.96;
  background-image: url("../assets/Ajedrez.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.studies-bottom-container {
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.studies-bottom-main-content {
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.studies-bottom-main-content h2 {
  margin: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
}

.studies-bottom-container h3 {
  margin: 10px;
  color: #ffffff;
  font-weight: 400;
}

.studies-bottom-img {
  width: 28%;
  border-radius: 50%;
  transition: 0.2s;
}


@media screen and (min-width: 769px) {
  .studies-bottom-container {
    width: 80%;
  }
  
  .studies-bottom-img {
    margin: 4px;
    max-width: 90px;
    border-radius: 50%;
  }

  .studies-bottom-img:hover {
    transform: scale(1.5);
  }
  
  .studies-bottom-main-content h2 {
    font-size: 32px;
  }
}

@media screen and (min-width: 501px) and (max-width:768) {
  .studies-bottom-main-content h2 {
    font-size: 22px;
  }
}

.studies-bottom-icons {
  padding-top: 35px;
}

.studies-bottom-icons img {	
  background-color: #fff;
  border-radius: 10px;
  margin: 4px;
  padding: 10px;
  height: 50px;
  transition: transform .3s
}

.studies-bottom-icons img:hover {	
  transform: scale(2);
}

.experience {
  text-align: center;
  padding-top: 60px;
  height: auto;
  background-color: #ffffff;
}

.experience-main {
  text-align: start;
  margin: 15px;
  padding-top: 20px;
  height: auto;
  background-color: #ffffff;
}
.publications {
  text-align: center;
  padding-top: 60px;
  height: auto;
  background-color: #ffffff;
}

.publications-main {
  text-align: start;
  margin: 15px;
  padding-top: 20px;
  height: auto;
  background-color: #ffffff;
}

/* Sección Contacto */
.contact {
  text-align: center;
  padding-top: 60px;
}

.contact-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-main-col{
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-card {
  min-height: 150px !important;
  width: 80%;
}
.contact-body{
  height:215px;
}

@media screen and (min-width: 769px) {
  .experience-main {
    padding-top:60px;
    margin:25px;
  }
  .contact-main-col{
    width: 90%;
  }
  .contact-card {
    width: 60%;
  }
  .contact-body{
    height:200px;
  }
  .contact-main {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.card-body i {	
  font-size: 32px;
  color:#6195ff;
  padding: 10px;
}

.card-body h3 {
  padding: 5px;
}

.contact-button {
  color:#ffffff;
  background-color:#6195ff;
  padding: 10px 25px;
  margin-top: 30px;
  margin-bottom: 22px;
  border: none;
  border-radius: 5px;

}

.contact-form form {
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
}

.form-control {
  margin:12px ;
  width: 90%;
}

.form-label {
  margin: 0 15px;
  text-align: start;
}

.contact-form form button {
  text-align: center;
  width: 50%;
  margin: auto;
  margin-bottom: 10px;
}
@media screen and (min-width: 769px) {
  .contact-form form {
    width: 38%;
  }
  .contact-button {
    max-width: 150px;
  }
  
}
#mybtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #555;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
}
#mybtn:hover {
  background-color: #555;
}
</style>
