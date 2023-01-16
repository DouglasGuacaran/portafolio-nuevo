<template>
  <div class="flex body">
    <div class="section1" id="section1">
      <div class="section1-blur">
        <h1 class="flex text-title">Douglas Guacarán</h1>
        <span class="text-subtitle"
          >He querido reorientar mi vida profesional hacia el desarrollo, y este sitio muestra un poco de lo que he podido alcanzar hasta el momento. He realizado muchas cosas diferentes durante este camino, cada proyecto que acepto lo abordo con el mayor compromiso, entusiasmo y pasión, tómate un tiempo para conocerlos. Espero que los encuentres interesante y que durante este recorrido sientas un poco de lo que hay dentro de mi y que resuene dentro de ti.</span
        >
      </div>
    </div>
    <div class="about" id="about">
      <h2>Acerca De</h2>
      <div class="about-cards" id="cards">
        <Card
          iconName="fa-solid fa-gears"
          name="Perfil Profesional"
          content="Desarrollador Full Stack, con orientación al desarrollo Front-End y y Back-End en el desarrollo de soluciones informáticas, con experiencia en Testing."
        />
        <Card
        iconName="fa fa-mobile"
        name="Habilidades Técnicas"
        content="Capacidad de establecer requerimientos de sistemas web, con el uso de lenguajes de programación, librerías y marcos de trabajo tales como HTML, CSS, Angular, React, Vue y Django."
        />
        <Card
          iconName="fa fa-magic"
          name="Habilidades Blandas"
          content="Me considero una persona con capacidad de análisis y resolución de problemas, con compromiso, dedicación y pasión, con buena comunicación y disposición para el trabajo en equipo."
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
            <a
              href="https://douglasguacaran.github.io/vue-big-mobile//"
              target="_blank"
              ><img
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            /></a>
          </div>

          <div
            class="portfolio-card__btn"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            aria-label="Select image two"
          >
            <a
              href="https://douglasguacaran.github.io/vue-pages-pokedex"
              target="_blank"
              ><img
                src="https://images.unsplash.com/photo-1650573547848-d7b93ed79782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                alt="Image description"
            /></a>
          </div>

          <div
            class="portfolio-card__btn"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            aria-label="Select image three"
          >
            <a
              href="https://douglasguacaran.github.io/vue-marveldex"
              target="_blank"
              ><img
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Image description"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="service" id="service">
      <h2>Servicios</h2>
      <div class="about-cards" id="cards">
        <CardService
          iconName="fa-regular fa-gem"
          title="Desarrollador de Aplicaciones Web"
          content="Profesional en el desarrollo de Sistemas Tecnológicos de Información y el desarrollo web, con experiencia laboral en testing"
        />
        <CardService
        iconName="fa-solid fa-wand-magic-sparkles"
        title="Especialista en Protección Radiológica"
        content="He sido autorizado a dictar cursos básicos de protección radiológica por parte del órgano regulador nacional del ministerio de Salud."
        />
        <CardService
          iconName="fa-solid fa-rocket"
          title="Especialista en Física Médica"
          content="Cuento con la totalidad de las materias del programa de postgrado en Física Médica aprobado, con artículos publicados en revistas científicas en ésta área."
        />
      </div>
    </div>
    <div class="studies" id="studies">
      <h2 class="studies-title">Estudios</h2>
      <div class="carousel1">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
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
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="studies-main">
        <h2>Estudios</h2>
        <h3>Programas Educativos Intensivos</h3>
        <ul>
          <li>
            <strong>Certified Tech Developer</strong> - Digital House becado por
            Globant y Mercadolibre (En curso).
          </li>
          <li>
            <strong
              >Desarrollador aplicaciones Full Stack Python Trainee</strong
            >
            - Sustantiva Inst. de Formación Laboral.
          </li>
          <li>
            <strong>LowCode/NoCode</strong> - Microsoft Power Platform Power BI
            - Ernest&Young.
          </li>
          <li>
            <strong>Desarrollador aplicaciones de Software</strong> - Claro -
            Madicap Inst. de Formación Laboral
          </li>
          <li>
            <strong>Desarrollador aplicaciones FrontEnd trainee</strong> -
            AwakeLab by Adalid Inkmark ltda.
          </li>
        </ul>
        <h3>Postgrado</h3>
        <ul>
          <li><strong>Magíster en Física Médica</strong> - Egresado</li>
        </ul>

        <h3>Universitaria</h3>
        <ul>
          <li>
            <strong>Profesor de Física</strong> - Título revalidado por
            Universidad de Chile. Mención Cum Laude.
          </li>
        </ul>
        <h3>Certificaciones y Cursos</h3>
        <ul>
          <li>
            <strong>Curador de Datos</strong> - Claro, Fundación Carlos Slim.
          </li>
          <li>
            <strong>Deberes y Derechos del Personal de Salud</strong> - Escuela
            Nacional de Administración Pública.
          </li>
          <li>
            <strong>Sistema de Calificación del Personal de la Salud</strong> -
            Escuela Nacional de Administración Pública.
          </li>
          <li>
            <strong>Lógica de Programación</strong> - Servicio Nacional de
            Capacitación y Empleo y Fundación Carlos Slim.
          </li>
          <li>
            <strong>Introducción a la Programación con Python</strong> -
            Servicio Nacional de Capacitación y Empleo y Universidad Austral.
          </li>
          <li>
            <strong>Processing Data with Python</strong> - Servicio Nacional de
            Capacitación y Empleo y Universidad Austral.
          </li>
          <li>
            <strong>Programación con JavaScript Ed 5</strong> - Servicio
            Nacional de Capacitación y Empleo y Movistar.
          </li>
          <li>
            <strong>Protección Radiológica</strong> - Instituto de Protección
            Radiológica.
          </li>
          <li>
            <strong
              >Principios Básicos de Gestión de Calidad Basados en la Norma ISO
              9001</strong
            >
            - Instituto Venezolano de Investigaciones Científicas (IVIC).
          </li>
          <li>
            <strong
              >Uso del sistema LIEN-IVLAD e inducción a Agilent VEE</strong
            >
            - Instituto Venezolano de Investigaciones Científicas (IVIC).
          </li>
          <li>
            <strong>Curso Especial: Energías Alternativas</strong> - Instituto
            Venezolano de Investigaciones Científicas (IVIC).
          </li>
          <li>
            <strong
              >Formadores en Protección Radiológica para la Práctica
              Médica</strong
            >
            - Ministerio del poder popular para la Salud.
          </li>
          <li>
            <strong
              >Curso de Intervencionismo Dirigido a Físicos Médicos</strong
            >
            - Instituto de Oncología “Dr. Luis Razetti”.
          </li>
          <li>
            <strong>Tomografía Computarizada Dirigido a Físicos Médicos</strong>
            - Instituto de Oncología “Dr. Luis Razetti”.
          </li>
          <li>
            <strong>Conferencia Magistral en Tomografía Computarizada</strong> -
            Instituto de Oncología “Dr. Luis Razetti”.
          </li>
          <li>
            <strong
              >Protección Radiológica en Radiología Intervencionista con énfasis
              en Cardiología,</strong
            >
            - Sociedad Peruana de Protección Radiológica.
          </li>
          <li>
            <strong
              >Sistema de Gestión de Calidad en Órganos Reguladores</strong
            >
            - Sociedad Peruana de Protección Radiológica.
          </li>
          <li>
            <strong>Protección Radiológica en Tomografía Computarizada</strong>
            - Sociedad Peruana de Protección Radiológica.
          </li>
          <li>
            <strong>Protección Radiológica en Mamografía</strong> - Sociedad
            Peruana de Protección Radiológica.
          </li>
          <li>
            <strong>Simposio Internacional Sobre Protección Radiológica</strong>
            - Sociedad Peruana de Protección Radiológica.
          </li>
          <li>
            <strong
              >Protección Radiológica al paciente en Radiodiagnóstico, Medicina
              Nuclear y Radioterapia</strong
            >
            - Instituto Venezolano de Investigaciones Científicas.
          </li>
          <li>
            <strong>Dosimetría Interna Aplicada a la Medicina Nuclear</strong> -
            Instituto Venezolano de Investigaciones Científicas.
          </li>
          <li>
            <strong
              >Jornadas de Protección Radiológica del Paciente “Dra. Clemencia
              García Villasmil”</strong
            >
            - Sociedad Venezolana de Protección Radiológica (SOVEPRA).
          </li>
          <li>
            <strong>Aspectos Básicos de la Propiedad Intelectual</strong> -
            Servicio Autónomo de la Propiedad Intelectual.
          </li>
          <li>
            <strong
              >ISO 19011:2002 Directrices para la auditoría de los Sistemas de
              Gestión de la Calidad y/o Ambiental</strong
            >
            - Ministerio del Poder Popular para el Comercio y el Servicio
            Autónomo Nacional de Normalización, Calidad, Metrología y
            Reglamentos Técnicos.
          </li>
          <li>
            <strong>Fluoroscopia y Cinefluorografía</strong> - Instituto
            Venezolano de Investigaciones Científicas.
          </li>
          <li>
            <strong>Método de Montecarlo</strong> - Instituto Venezolano de
            Investigaciones Científicas.
          </li>
          <li>
            <strong>Curso de Dosimetría Termoluminiscente</strong> - Instituto
            Venezolano de Investigaciones Científicas.
          </li>
          <li>
            <strong
              >Taller de Comunicación Efectiva e Integración Grupal antes los
              Retos del Cambio</strong
            >
            - Instituto Venezolano de Investigaciones Científicas.
          </li>
          <li>
            <strong
              >Curso Básico de Protección Radiológica para Oficiales de
              Seguridad Radiológica</strong
            >
            - Instituto Venezolano de Investigaciones Científicas.
          </li>
          <li>
            <strong
              >Curso Regional de Capacitación sobre Garantía de Calidad en
              Imágenes en el Diagnóstico por Imágenes</strong
            >
            - Organismo Internacional de Energía Atómica con el Gobierno de
            México a través de la Universidad Nacional Autónoma de México (UNAM)
            y del Instituto Nacional de Cancerología (INCAN).
          </li>
          <li>
            <strong
              >Electricidad – Electromagnetismo – Magnetismo – Óptica</strong
            >
            - 3ª Escuela Venezolana para enseñanza de la física.
          </li>
          <li>
            <strong>Sistema Solar - Física de la Tierra</strong> - Universidad
            de los Andes.
          </li>
          <li>
            <strong>La Mecánica de Newton, Usted y Yo</strong> - Universidad de
            los Andes.
          </li>
          <li>
            <strong>La Física y la Vulnerabilidad de Zonas Urbanas</strong> -
            Universidad de los Andes.
          </li>
          <li>
            <strong>Nociones Generales de Astronomía y Astrofísica</strong> -
            Universidad de los Andes.
          </li>
          <li>
            <strong>El Análisis Dimensional de la Física</strong> - Universidad
            de los Andes.
          </li>
          <li>
            <strong>2da Escuela de la Enseñanza de la Física</strong> -
            Universidad de los Andes.
          </li>
          <li><strong>Operador Integral de Computadoras</strong> - INESCO.</li>
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
            <h3>Desarrollador Tech Developer</h3>
            <span class="studies-bottom-parraph"
              >Profesional del desarrollo de Sistemas de Información,
              Desarrollador web, programador web, Frontend, con experiencia en
              desarrollo de aplicaciones web y de escritorio Acompañamiento en
              el diseño e implementación de diseño gráfico para las aplicaciones
              web con conceptos como mobile first, programación orientada a
              objetos y manejo de microservicios.</span
            >
          </div>
          <div class="studies-bottom-icons">
            <img src="../assets/img/icons/python.png" alt="14">
            <img src="../assets/img/icons/nodejs-2.svg" alt="3">
            <img src="../assets/img/icons/git-bash.svg" alt="6">
            <img src="../assets/img/icons/Java.png" alt="10">
            <img src="../assets/img/icons/github.jpg" alt="7">
            <img src="../assets/img/icons/css3.svg" alt="4">
            <img src="../assets/img/icons/html5.svg" alt="8">
            <img src="../assets/img/icons/javascript-1.svg" alt="11">
            <img src="../assets/img/icons//postgresql.svg" alt="13">
            <img src="../assets/img/icons/vue.png" alt="15">
            <img src="../assets/img/icons/vuetify.svg" alt="16">
            <img src="../assets/img/icons/bootstrap-4.svg" alt="2">
            <img src="../assets/img/icons/wordpress.png" alt="9">
            <img src="../assets/img/icons/Jira.png" alt="12">
            <img src="../assets/img/icons/bmc.png" alt="1">
            <img src="../assets/img/icons/CyberArk.png" alt="5">
          </div>s
        </div>
      </div>
    </div>

    <div class="experience" id="experience">
      <h2>Experiencia Laboral</h2>
      <div class="experience-main">
        <ul>
          <li>
            <strong>Trainee</strong> -
            <i> ElitSoft Ingeniería y Asesorías Informáticas LTDA </i> , abril
            2022 - julio 2022.
            <p>
              Actividades orientadas a la confección, desarrollo y ejecución de
              pruebas de QA en proyectos web relacionados con la Banca usando
              herramientas como Control M, Jira, CyberArk, manejo de bases de
              datos SQL.
            </p>
          </li>
          <li>
            <strong>Oficial de Protección Radiológica</strong> -
            <i> Hospital Clínico de Magallanes</i>, junio 2020 - diciembre 2020.
            <p>
              Asesorar al Director del Hospital, vigilar e informar el
              cumplimiento del reglamento y las normas establecidas en el ámbito
              de la protección radiológica, estar presente durante las
              inspecciones que realizarán el órgano regulador y las empresas
              externas en los diferentes temas alusivos a las radiaciones
              ionizantes, mantener educación continua referida al área, mantener
              coordinación y logística de las dosimetrías personales e
              incentivar y mejorar el uso correcto de los sistemas de dosimetría
              personal, realizar un diagnóstico crítico del estatus de los
              elementos de protección radiológica personal en los servicios en
              donde operen equipos emisores de radiación ionizante, proponer
              adquisiciones para cumplir con requerimientos, establecer
              protocolos de operación de equipos generadores de radiaciones
              ionizantes de cada centro de responsabilidad, servicio, unidad o
              departamento, Regularizar la autorización operación de los equipos
              emisores de radiación ionizante según la normativa y legislación
              nacional vigente.
            </p>
          </li>
          <li>
            <strong
              >Analista Senior en Protección y Seguridad de Instalaciones
              Radiactivas</strong
            >
            -
            <i> Ingeniería y Asesoría Hermanos Mella Limitada (INGERAD LTDA) </i
            >, noviembre 2017 - abril 2020.
            <p>
              Transporte de material radiactivo, elaboración de memorias de
              Cálculo de Blindajes de Unidades generadores de radiación
              ionizantes tales como mamógrafos, sistema de inspección de carga
              vehicular, manuales de protección radiológica de instalaciones de
              primera categoría, procedimientos de cierre de instalaciones
              radiactivas, relator de al menos 10 Cursos de Protección
              Radiológica para la obtención de la autorización de desempeño en
              instalaciones de primera, segunda y tercera categoría que imparte
              la SEREMI de Salud.
            </p>
          </li>
          <li>
            <strong>Profesional Asociado a la Investigación</strong> -
            <i>
              Unidad de Planta de Esterilización por rayos Gamma (PEGAMMA) del
              Instituto Venezolano de Investigaciones Científicas (IVIC) </i
            >, octubre 2014 - julio 2018.
            <p>
              Analista de laboratorio de dosimetría de Altas Dosis en la
              verificación y la constatación de la Dosis Absorbida impartida a
              los materiales que eran irradiados en la PEGAMMA a través de la
              dosimetría realizada con dosímetros Red- Perspex, corresponsable
              del control de calidad de las aguas de las piscinas de los
              irradiadores IR-216 e IR-236 fabricados por la empresa Nordion y
              que pertenecen a la Planta PEGAMMA, encargado de la calibración
              periódica de los detectores de radiación ionizante pertenecientes
              a la Planta PEGAMMA.
            </p>
          </li>
          <li>
            <strong>Docente Tiempo Convencional</strong> -
            <i>
              Programa de Formación de Técnicos en Radioterapia de la
              Universidad Bolivariana de Venezuela</i
            >, septiembre 2011- abril 2012.
            <p>
              Docente de la materia Física de las Radiaciones nivel
              universitario.
            </p>
          </li>
          <li>
            <strong>Profesional Asociado a la Investigación</strong> -
            <i>
              Laboratorio Secundario de Calibración Dosimétrica (LSCD) del
              Instituto Venezolano de Investigaciones Científicas (IVIC)</i
            >
            , octubre 2005 - septiembre 2014
            <p>
              Control de Calidad, Pruebas de Aceptación y Calibración de
              unidades de Radioterapia, tales como: Unidades de Cobalto 60,
              Aceleradores Lineales de altas y bajas energías de fotones con o
              sin haces de electrones. Control de calidad de equipos
              Diagnósticos (rayos X convencionales y digitales, unidades de
              Mamografía, mesa estereotáxica, Tomografía computada, equipos
              odontológicos, unidades fluoroscópicas de arco en C, densitómetros
              óseos), levantamiento radiométrico de neutrones en unidades de
              Ciclotrón, Elaboración de memorias de Cálculos de Barreras de
              Unidades de Ciclotrón, Rayos X, Aceleradores Lineales de alta y
              baja energía, unidades braquiterapia, alibración de detectores de
              radiación ionizante en haces de neutrones, partículas beta, rayos
              X y rayos gamma, calibración de sistemas dosimétricos de radiación
              ionizante utilizados en radioterapia. Elaboración de curvas de
              calibración para dosimetría de película y dosímetros
              termoluminiscente en magnitudes operacionales, calibración de
              fuentes de radiación proveniente de distintos isótopos
              radiactivos.
            </p>
          </li>
          <li>
            <strong>Docente de Física</strong> -
            <i>
              Unidades Educativas: Colegio “Los Próceres”, Colegio “María
              Auxiliadora”, Unidad Educativa Nacional “Lisandro Alvarado”,
              Unidad Educativa Nacional “Alberto Carnevalli”, Barquisimeto Edo.
              Lara.</i
            >
            , julio 2000 - julio 2005.
            <p>
              Profesor de Física, Matemáticas, dibujo técnico a tiempo completo
              nivel bachillerato.
            </p>
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
import Card from "../components/Card.vue";
import CardService from "../components/CardService.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Card,
    CardService,
    Footer  
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
/* Estilos Generales */
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.flex {
  display: flex;
}

.text-title {
  padding-top: 50px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;
  color: #000000;
}
.text-subtitle {
  font-family: "Varela Round" !important;
  text-align: center;
  color: #000000;
  font-family: Varela;
  font-size: 16px;
}
.section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  background-image: url("../assets/Escritorio.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
}

.section1-blur {
  text-align: center;
  backdrop-filter: blur(2.5px);
  background-color: hsla(0, 0%, 100%, 0.748);
  border-radius: 15px;
  padding: 10px;

}

.contact-form iframe {
  width: 335px;
}

@media screen and (min-width: 769px) {
  .text-title {
    text-align: center;
    justify-content: center;
    padding-top:15px;
    width: auto;
    text-align: center;
    font-size: 32px;
  }
  .text-subtitle{
    text-align: center;
    color:#555;
  }

  .section1-blur {
    width: 72%;
    margin: 200px 30px 10px 30px;
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

@media screen and (min-width: 769px) {
  .about-cards {
    flex-direction: row;
  }
  .card span {
    font-size: 16px;
    margin: 20px
  }
}

.portfolio {
  text-align: center;
  padding-top: 60px;
}

.portfolio-cards-container {
  width: 100%;
  margin: auto;
}

.portfolio-cards-group {
  display: flex;
  flex-direction: row;
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
  width: 400px;
  margin: 15px;
  padding: 0px;
  cursor: pointer;
  transition: 0.3s;
}

.portfolio-card__btn::after {
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0);
  transition: 0.3s;
}


.portfolio-card__btn img {
  width: 90%;
  border-radius: 5px;
  max-width: 100%;
}

@media (max-width: 769px) {
  .portfolio-cards-group {
    flex-direction: column;
  }
  .portfolio-card__btn img {
    width: 100%;
    /* max-width:400px; */
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
  width: 400px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  margin: 15px;
}

.cardService:hover {
  background-color: #000;
  color: #ffffff;
  transition: 0.2;
}

.cardService i {
  margin: 2px;
}

.column span {
  font-weight: 400;
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
  .studies-main {
    margin-left: 15%;
    margin-right: 15%;
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
.studies-bottom-parraph {
  color: #ffffff;
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

/* Sección Contacto */
.contact {
  text-align: center;
  padding-top: 60px;
}

.contact-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contact-main-col{
  width: 80%;
  display: flex;
  justify-content: center;
}

.contact-card {
  width: 80%;
}
.contact-body{
  height:215px;
 }

@media screen and (max-width: 769px) {
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
    flex-direction: column;
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
