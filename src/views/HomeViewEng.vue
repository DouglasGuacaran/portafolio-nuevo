<template>
  <div class="flex body">
    <Navbar id="nav-bar-sticky-eng"/>
    <div class="section1-eng" id="section1-eng">
      <img class = "image-profile-eng" src="../assets/img/perfil_1-transformed11.png" alt="Foto Perfil">
      <div class="section1-blur-eng">
        <h1 class="flex text-title-eng">Welcome! I'm Douglas</h1>
        <p class="text-subtitle-eng"
          >Hello! I am a Front End developer with solid knowledge in fundamentals of software architecture and development in languages ​​such as JavaScript, Java and Python, with skills in relational and non-relational database management, functional software testing, programming patterns and programming Object-oriented in frameworks such as Django, Vue.Js and the renowned React library, under agile methodologies and Design Thinking. I am proactive, adaptable and I work very well in a team. I am still constantly learning and my way of demonstrating it is through teaching since my university training is as a physics professor with studies in medical physics, a specialist in radiation protection and a rapporteur for radiation protection courses.</p>
        <p class="text-subtitle-eng">
          Recently, I have also taken my first steps into the exciting field of data science, exploring how to apply statistical techniques and tools to extract valuable insights from data, machine learning, and neural network management.
        </p>
      </div>
    </div>
    <div class="about-eng" id="about-eng">
      <h2>About me</h2>
      <div class="about-cards-eng" id="cards">
        <Card
          iconName="fa-solid fa-gears"
          name="Professional profile"
          content="Front End Developer in projects with the use of programming languages such as: Java, JavaScript, frameworks such as Vue.Js and Django as well as the recognized React library."
        />
        <Card
        iconName="fa fa-mobile"
        name="Skills"
        content="Effective communication, leadership skills, problem solving, teamwork, analytical person, course relator, intermediate English level becoming conversational."
        />
        <Card
          iconName="fa fa-magic"
          name="More about me"
          content="I like to travel and meet people, I am a fan of Rock, chess and sports, the taste of coffee beans, craft beer and a good barbecue."
        />
      </div>
    </div>
    <div class="portfolio-eng" id="portfolio-eng">
      <h2>Portfolio</h2>
      <div class="portfolio-cards-container-eng">
        <div class="portfolio-cards-group-eng" role="radiogroup">
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
            Money Converter project, developed in React, consuming the www.mindicador.cl API, allows currency conversion.
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
          Big Mobile Project, an e-commerce website for a virtual store selling mobile phones created using Vue and consuming Json files. Part of the test as a Front End Trainee.
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
          Poke-Dex Project, made in Vue, consuming the www.pokeapi API, allows you to navigate through it and even catch Pokémons.
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
          Project Poke-Marvel, made with Vue, consuming the Marvel API, allows you to navigate through it and even edit the names of the heroes.
        </a>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div class="service-eng" id="service-eng">
      <h2>What I can do for you</h2>
      <div class="about-cards-eng" id="cards">
        <CardService
          iconName="fa-regular fa-gem"
          title="Front End Developer"
          content="My knowledge allows me to implement advanced solutions that improve the user experience in platforms and systems. I have skills in programming languages like HTML, CSS, JavaScript, and frameworks like Vue.js and Django. In addition, I have solid knowledge in the use of libraries such as React, to implement the design and functionality of web applications in a responsive way."
        />
        <CardService
        iconName="fa-solid fa-wand-magic-sparkles"
        title="Back End and QA"
        content="In addition, my training allows me to support robust and scalable systems and platforms using technologies such as node.Js. Integration to API Restful services, design and maintenance of SQL and NoSQL databases. in order to improve the quality of the applications making it scalable under patterns such as MVC, in addition to implementing functional, integration and smoke tests."
        />
        <CardService
          iconName="fa-solid fa-rocket"
          title="Data Science"
          content="I have recently trained in the field of data science in order to manage data and implement predictive models to analyze large data sets using statistical techniques, machine learning and neural networks. These technologies allow extracting valuable information that helps companies and organizations make fundamental decisions for their development and improvement."
        />
      </div>
    </div>
    <div class="studies" id="studies-eng">
      <h2 class="studies-title">Education</h2>
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
      <div class="studies-main-eng">
        <h2>Education</h2>
        <h3>Intensive Educational Programs</h3>
        <ul>
          <li>
            <strong>Certified Tech Developer (Scholarship by Globant and Mercadolibre)</strong> - Digital House (In progress, third bimester approved).
          </li>
          <li>
          <strong>Data Science (Digital Talent Scholarship)</strong> -
          AwakeLab by Aspasia.
        </li>
        <li>
          <strong>Full Stack Python Application Developer Trainee (NSTEC Scholarship)</strong>
          - Sustantiva Labor Training Institute.
        </li>
        <li>
          <strong>LowCode/NoCode</strong> - Microsoft Power Platform
          - EY.
        </li>
        <li>
          <strong>Software Application Developer (NSTEC Scholarship)</strong> - Claro -
          Madicap Labor Training Institute.
        </li>
        <li>
          <strong>FrontEnd Application Developer Trainee (Talent Digital Scholarship)</strong> -
          AwakeLab by Adalid Inkmark Ltda.
        </li>
      </ul>
      <h3>Postgraduate</h3>
      <ul>
        <li><strong>Studies in Medical Physics</strong> - Center for Advanced Studies of the Venezuelan Institute of Scientific Research</li>
      </ul>

      <h3>Undergraduate</h3>
  <ul>
    <li>
      <strong>Physics Teacher</strong> - Degree revalidated by the University of Chile. Cum Laude recognition for grade achieved. 1999 - 2005
    </li>
  </ul>
  <h3>Advanced courses in Computer Science</h3>
  <ul>
    <li>
      <strong>Data Curator</strong> - Claro, Carlos Slim Foundation. 2021
    </li>
    <li>
      <strong>Programming Logic</strong> - National Service for Training and Employment - Carlos Slim Foundation. 2020
    </li>
    <li>
      <strong>Introduction to Programming with Python</strong> -
      National Service for Training and Employment - Austral University. 2020
    </li>
    <li>
      <strong>Processing Data with Python</strong> - National Service for Training and Employment - Austral University. 2020
    </li>
    <li>
      <strong>Programming with JavaScript Ed 5</strong> - National Service for Training and Employment - Movistar.
    </li>
    <li>
      <strong>Comprehensive Computer Operator</strong> - INESCO.</li>
  </ul>
  <h3>Cursos</h3>
    <ul>
      <li>
        <strong>Duties and Rights of Health Personnel </strong> - National School of Public Administration. 2020
      </li>
      <li>
        <strong>Health Personnel Qualification System </strong> - National School of Public Administration. 2020
      </li>
      <li>
        <strong>Radiation Protection 24 h.</strong> - Institute of Radiation Protection. Chile 2017
      </li>
      <li>
        <strong>Basic Principles of Quality Management Based on the ISO 9001 Standard.</strong> - Venezuelan Institute of Scientific Research. 2016
      </li>
      <li>
        <strong>Use of the LIEN-IVLAD system and induction to Agilent VEE.</strong> - Venezuelan Institute of Scientific Research. 2015
      </li>
      <li>
        <strong>Special Course: Alternative Energies</strong> - Venezuelan Institute of Scientific Research. 2013
      </li>
      <li>
        <strong>Trainers in Radiation Protection for Medical Practice</strong> - Ministry of Popular Power for Health. 2012
      </li>
      <li>
        <strong>Intervention Course Aimed at Medical Physicists</strong> - Institute of Oncology “Dr. Luis Razetti”. 2012
      </li>
      <li>
        <strong>Computed Tomography Targeted at Medical Physicists</strong> - Institute of Oncology “Dr. Luis Razetti”. 2012
      </li>
      <li>
        <strong>Master Conference in Computed Tomography</strong> - Institute of Oncology “Dr. Luis Razetti”. 2012
      </li>
      <li>
        <strong>Radiation Protection in Interventional Radiology with emphasis in Cardiology</strong> - Peruvian Society of Radiological Protection. 2012
      </li>
      <li>
        <strong>Radiation Protection in Computed Tomography</strong> - Peruvian Society of Radiological Protection. 2012
      </li>
      <li>
        <strong>Radiation Protection in Mammography</strong> - Peruvian Society of Radiological Protection. 2012
      </li>
      <li>
        <strong>International Symposium on Radiation Protection</strong> - Peruvian Society of Radiological Protection. 2012
      </li>
      <li>
        <strong>Quality Management System in Regulatory Bodies</strong> - Peruvian Society of Radiological Protection. 2012
      </li>
      <li>
        <strong>Radiation Protection to the patient in Radiodiagnosis, Nuclear Medicine and Radiotherapy</strong> - Venezuelan Institute of Scientific Research. 2012
      </li>
      <li>
        <strong>First Conference on Radiological Protection of the Patient “Dra. Clemencia García Villasmil”,</strong> - Venezuelan Society of Radiological Protection (SOVEPRA). 2011
      </li>
      <li>
        <strong>Internal Dosimetry Applied to Nuclear Medicine</strong> - Venezuelan Institute of Scientific Research. 2011
      </li>
      <li>
        <strong>Basic Aspects of Intellectual Property</strong> - Autonomous Service of Intellectual Property. 2010
      </li>
      <li>
        <strong>ISO 19011:2002 Guidelines for the audit of Quality and/or Environmental Management Systems</strong> - Ministry of People's Power for Commerce and the National Autonomous Service for Standardization, Quality, Metrology and Technical Regulations (SENCAMER). 2008
      </li>
      <li>
        <strong>Fluoroscopy and Cinefluorography</strong> - Venezuelan Institute of Scientific Research. 2008
      </li>
      <li>
        <strong>Montecarlo Method</strong> - Venezuelan Institute of Scientific Research. 2008
      </li>
      <li>
        <strong>Thermoluminescent Dosimetry Course</strong> - Venezuelan Institute of Scientific Research. 2007
      </li>
      <li>
        <strong>Workshop on Effective Communication and Group Integration before the Challenges of Change</strong> - Venezuelan Institute of Scientific Research. 2007
      </li>
      <li>
        <strong>Basic Course on Radiological Protection, 40 hours for Radiological Safety Officers</strong> - Venezuelan Institute of Scientific Research. 2006
      </li>
      <li>
        <strong>Regional Training Course on Image Quality Assurance in Diagnostic Imaging</strong> - International Atomic Energy Agency with the Government of Mexico through the National Autonomous University of Mexico (UNAM) and the National Institute of Cancerology (INCAN). 2006
      </li>
      <li>
        <strong>Electricity - Electromagnetism - Magnetism - Optics</strong> - 3th Venezuelan School for teaching physics - Los Andes University. 2004
      </li>
      <li>
        <strong>Solar System - Earth Physics</strong> - 3th Venezuelan School for teaching physics - Los Andes University. 2004
      </li>
      <li>
        <strong>Newton's Mechanics, You and Me</strong> - 2nd Venezuelan School for teaching physics - Los Andes University. 2002
      </li>
      <li>
        <strong>The Physics and Vulnerability of Urban Areas</strong> - 2nd Venezuelan School for teaching physics - Los Andes University. 2002
      </li>
      <li>
        <strong>General Notions of Astronomy and Astrophysics</strong> - 2nd Venezuelan School for teaching physics - Los Andes University. 2002
      </li>
      <li>
        <strong>The Dimensional Analysis of Physics</strong> - 2nd Venezuelan School for teaching physics. 2002
      </li>
      <li>
        <strong>2nd Venezuelan School for teaching physics</strong> - 2nd Venezuelan School for teaching physics - Los Andes University. 2002
      </li>
    </ul>

      </div>
      <div class="studies-bottom-eng">
        <div class="studies-bottom-main-eng">
          <div class="studies-bottom-container-eng">
            <div class="studies-bottom-main-content-eng">
              <img
                class="studies-bottom-img-eng"
                src="../assets/img/perfil.png"
                alt="Foto perfil"
              />
              <h2>Douglas Guacarán</h2>
            </div>
            <h3>Front End Developer</h3>
            <span class="studies-bottom-parraph-eng"
              >Developer with advanced knowledge in responsive web design with HTML, CSS, JavaScript, Bootstrap, object-oriented programming, programming patterns with SOLID principles and Agile methodologies, with version control management and unit, functional and integration tests.</span
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

    <div class="experience-eng" id="experience-eng">
      <h2>Work Experience</h2>
      <div class="experience-main-eng">
        <ul>
        <li>
          <strong>Trainee</strong> -
          <i>ElitSoft Ingeniería y Asesorías Informáticas LTDA</i>, April 2022 - July 2022.
          <p>
            Some of my tasks were: preparing manual test procedures manuals in QA, designing and executing smoke tests and functional tests using Control-M, review in Cyberark (console) of the records of the tests executed, registering on the platform Jira results of the tests, QA staff to a bank client (Banco de Chile) becoming assigned as countpart of the QA area.
          </p>
        </li>
        <li>
            <strong> 24-hour Radiation Protection Courses Taught</strong>
          <ul>
              <li>
              <p>
                Hemisferio Sur S.A. Metropolitan Region - Chile. August 2018.
              </p>
            </li>
            <li>
              <p>
                Castro Municipal Corporation, Chiloé - Chile. January 2019.
            </p>
            </li>
            <li>
              <p>
                Belcap Capacitaciones, La Serena - Chile. June 2019.
              </p>
            </li>
            <li>
              <p>
                Coin House Metropolitan Region - Chile. June 2019.
              </p>
            </li>
            <li>
              <p>
                SST TRAINING OF CHILE SPA, On Line modality. November 2022.
              </p>
            </li>
            <li>
              <p>
                Belcap Training, On Line modality. March, April and December 2022.
              </p>
            </li>
          </ul>
        </li>
    <li>
      <strong>Radiation Protection Officer</strong> -
      <i>Magallanes Clinical Hospital "Dr. Lautaro Navarro Avaria"</i>, June 2020 - December 2020.
      <p>
        Responsible for the radiation safety of all occupationally exposed personnel in the hospital facilities. In my role as a direct advisory, I managed the licensing of the first and second category facilities belonging to the hospital. I organized and taught training activities to the staff.
      </p>
    </li>
    <li>
      <strong>Senior Analyst in Protection and Security of Radioactive Installations</strong> -
      <i>INGERAD</i>, November 2017 - April 2020.
      <p>
        Adviser on radiation protection to companies in the industrial and medical areas. I carried out the necessary procedures for the transportation of radioactive materials from regional hospitals to the corresponding entities. I elaborated the shielding calculation memory of the customs control equipment at Arturo Merino Benitez airport (Santiago). I was a speaker for more than 10 Radiological Protection courses, both in-person and online, certified by SENCE.
      </p>
    </li>
    <li>
      <strong>Venezuelan Institute for Scientific Research</strong>
      <ul>
        
        <li>
        <strong>Research Associate Professional</strong> -
        <i>PEGAMMA Co-60 Plant Unit of Sterilization</i>, September 2014 - July 2018.
        <p>
          Analyst in the High Dose Laboratory of the Gamma Radiation Sterilization Plant Unit (PEGAMMA) of IVIC, responsible for the radiation safety of the installation. I collaborated with the Master's Program in Medical Physics in the Introduction to Radiological Protection course, specifically on the topic of Shielding Calculations for high and low energy linear accelerators. I supervised undergraduate theses.
        </p>
      </li>
      <li>
        <strong>Research Associate Professional</strong> -
        <i>Secondary Dosimetric Calibration Laboratory</i>, October 2020 - January 2021.
        <p>
          Scientific personnel responsible for the magnitudes Absorbed Dose in Water and Kerma in Air. I calibrated radiation detectors, radioactive sources, and dosimetry systems, elaborated calibration curves for personal dosimetry, performed radiometric surveys on facilities with photon and neutron emitting equipment, calculated shielding for low and high energy installations. I participated in intercomparison procedures with other laboratories, participated in missions to facilities located in Venezuela for acceptance testing and quality control of Radiotherapy Units, Conventional and Digital Diagnostic Installations. I was named acting head of the laboratory on two occasions.
        </p>
      </li>
      <li>
          <strong>Profesional en Entrenamiento</strong> -
          <i>Secondary Laboratory of Dosimetric Calibration of the Venezuelan Institute of Scientific Research</i> July
              2005 - August 2015.
          <p>
            Training period in the Secondary Laboratory of Dosimetric Calibration, where my assigned tasks were the calibration of ionizing radiation detectors, dosimetric systems in terms of Absorbed Dose and Air Kerma magnitudes.
          </p>
        </li>
      </ul>
    </li>
    <li>
            <strong>Libertador Experimental Pedagogical University</strong>
            <ul>
          <li>
              <strong>Mathematics IV preparer student</strong> - first semester 2002. 
              <p>
                Preparer student of the subject mathematics IV, calculus difference and integral.
              </p>
            </li>
            <li>
              <strong>Preparer student of Fundamentals of Physics</strong> - first semester 2003 
              <p>
                Student preparer of the matter fundamentals of physics of students of the III semester.
              </p>
            </li>
          </ul>
          </li>
          <li>
              <strong>Physics teacher</strong> -
              <i>Educational Units: “Los Próceres” School, “María Auxiliadora” School, “Lisandro Alvarado” National Educational Unit, “Dr. Alberto Carnevalli” National Educational Unit</i> July 2000 - July 2005
              <p>
                Hired teacher and head of Physics, Mathematics and Technical Drawing at the high school level in the city of Barquisimeto, Lara State, Venezuela.
              </p>
            </li>
  </ul>
      </div>
    </div>

    <div class="publications-eng" id="publications-eng">
    <h2>Scientific Publications</h2>
    <div class="publications-main-eng">
      <ul>
        <li>
          <i>Proceedings of the V Latin American Congress of Medical Physics, Ibero-American Meeting of Medical Physics, III Peruvian Congress of Medical Physics, VI Peruvian Congress of Radiological Protection. C. Leal, L. Carrizales, D. Guacarán, A. Moreno, and J. Duran. <strong>Calibration of Portable Ionizing Radiation Detectors.</strong> Cusco, Peru, 2010.</i>
        </li>
        <li>
          <i>Proceedings of the V Latin American Congress of Medical Physics, Ibero-American Meeting of Medical Physics, III Peruvian Congress of Medical Physics, VI Peruvian Congress of Radiological Protection. L. Carrizales, A. Moreno, C. Leal, D. Guacarán, and J. Duran. <strong>Diagnosis Two Decades after the Secondary Dosimetric Calibration Laboratory of the Venezuelan Institute of Scientific Research.</strong> Cusco, Peru, 2010.</i>
        </li>
        <li>
          <i>Proceedings of the VIII Regional Congress on Radiological and Nuclear Safety, I Latin American Congress of IRPA, V National Congress of Radiological Protection DSSA. Leal C, Villa N, Carrizales L, Guacarán D, Moreno A, and Duran J. <strong>Estimation of Kerma in Interventional Cardiology Procedures.</strong> Medellín, Colombia, 2010.</i>
        </li>
        <li>
          <i>Proceedings of the VIII Regional Congress on Radiological and Nuclear Safety, I Latin American Congress of IRPA, V National Congress of Radiological Protection DSSA. Guacarán D, Carrizales L, Leal C, Moreno A, and Duran J. <strong>Radiological and Dosimetric Evaluation of the Cobalt-60 Unit Installed in the Secondary Dosimetric Calibration Laboratory of Venezuela.</strong> Medellín, Colombia, 2010.</i>
        </li>
        <li>
          <i>Proceedings of the VIII Regional Congress on Radiological and Nuclear Safety, I Latin American Congress of IRPA, V National Congress of Radiological Protection DSSA. Moreno A, Camacho C, Carrizales L, Leal C, Duran J, and Guacarán D. <strong>Estimation of Kerma in Air on the Skin of Patients Undergoing Endodontic and Orthodontic Studies.</strong> Medellín, Colombia, 2010.</i>
        </li>
        <li>
          <i>Proceedings of the VIII Regional Congress on Radiological and Nuclear Safety, I Latin American Congress of IRPA, V National Congress of Radiological Protection DSSA. Duran J, Carrizales L, Leal C, Moreno A, and Guacarán D. <strong>Intercomparison of Calibration Coefficients of a Farmer-Type Chamber LSCD-IVIC with the Seiberdorf Laboratory in Vienna.</strong> Medellín, Colombia, 2010.</i>
        </li>
        <li>
          <i>Ibero-American Meeting on Radiological Protection, International Symposium on Radiological Protection, C. Leal, L. Carrizales Silva, D. Guacarán, A. Moreno, J. Durán, and N. Villa. <strong>Estimation of Kerma in Interventional Cardiology Procedures.</strong></i>
        </li>
        <li>
          <i>Ibero-American Meeting on Radiological Protection, International Symposium on Radiological Protection, J. A. Durán, L. Carrizales S., C. Leal, A. Moreno, D. Guacarán, <strong>Intercomparison of the calibration coefficients of an LSCD-IVIC camera with the Siebersdorf Vienna Laboratory.</strong></i>
        </li>
        <li>
          <i>Second Venezuelan Congress, Science, Technology and Innovation, J. A. Durán, L. Carrizales S., C. Leal, A. Moreno, D. Guacarán, <strong>Results of the Bolivarian Republic of Venezuela in the Comparison of Calibration Coefficients of the Network of LSCD-OIEA-WHO.</strong></i>
        </li>
      </ul>
    </div>
  </div>

    <div class="contact-eng" id="contact-eng">
      <h2>Contact</h2>
      <div class="contact-main-eng">
        <div class="contact-main-col-eng">
          <div class="card contact-card-eng">
            <div class="card-body-eng contact-body-eng">
              <i class="fa fa-phone card-img-top"> </i>
              <h3>Phone</h3>
              <span>(+56) 9 4879 2726</span>
            </div>
          </div>
        </div>
        <div class="contact-main-col-eng">
          <div class="card contact-card-eng">
            <div class="card-body-eng contact-body-eng">
              <i class="fa-solid fa-envelope card-img-top"></i>
              <h3>Email</h3>
              <span>douglasguacaran@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="contact-main-col-eng">
          <div class="card contact-card-eng">
            <div class="card-body-eng contact-body-eng">
              <i class="fa fa-map-marker card-img-top"></i>
              <h3>Location</h3>
              <span>Santiago de Chile, Región Metropolitana de Chile.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <form class="form" action="https://docs.google.com/forms/d/e/1FAIpQLSeCmbfwIVpUwuNA8AeAd1AGVKpgdugJTfSk0BMWlAoaAHefVQ/formResponse"> 
          <label for="entry.409911114" class="form-label" >
            Name
          </label>
          <input type="text" class="form-control" name="entry.409911114" required>
          <label for="entry.1646563546" class="form-label" >
            Email
          </label>
          <input type="email" class="form-control" name="entry.1646563546" required>
          <label for="entry.1025755838" class="form-label" >
            Issue
          </label>
          <input type="text" class="form-control" name="entry.1025755838" required>
          <label for="entry.1621200888" class="form-label" >
            Message
          </label>
          <textarea class="form-control" placeholder="Leave your message in here" name="entry.1621200888"></textarea>
          <button class="contact-button-eng" type="submit">Send</button>
        </form>
      </div>
    </div>
    <button class="btn" v-on:click="topFunction()" id="mybtn-eng">Up</button>
    <div class="footer-eng">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavbarEng.vue'
import Card from "../components/Card.vue";
import CardService from "../components/CardService.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomeEnView",
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
/* Estilos Generales */

#nav-bar-sticky-eng {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.flex {
  display: flex;
}

.text-title-eng {
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 26px;
  color: #000000;
}
.text-subtitle-eng {
  padding: 5px;
  text-align: justify;
  color: #000000;
  font-size: 16px;
}
.section1-eng {
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

.section1-blur-eng {
  width: 85%;
  text-align: center;
  backdrop-filter: blur(1.0px);
  background-color: hsla(0, 0%, 100%, 0.748);
  border-radius: 15px;
  padding: 10px;
  margin: 60px;
}

.image-profile-eng {
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

  .text-title-eng {
    width: auto;
    font-size: 38px;
  }

  .text-subtitle-eng {
    font-size: 19px;
    text-align: justify;
    color:#555;
  }

  .section1-eng{
    flex-direction: row;
    padding: 20px;
    height: 1000px;
  }

  .section1-blur-eng{
    max-width: 65%;
    padding: 5px;
  margin: 10px;
  }

  .image-profile-eng {
  margin: 2px;
  max-width: 400px;
  }

  .contact-form iframe {
    width: 700px;
  }
}

.body {
  flex-direction: column;
}

.about-eng {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
}

.about-cards-eng {
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
  .about-cards-eng {
    flex-direction: row;
  }
  .card span {
    font-size: 16px;
    margin: 20px
  }
}

.portfolio-eng {
  text-align: center;
  padding-top: 60px;
}

.portfolio-cards-container-eng {
  width: 100%;
  margin: auto;
}

.portfolio-cards-group-eng {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio-cards-group-eng:hover .portfolio-card__btn_eng:not(:hover) {
  filter: grayscale(100%);
  opacity: 0.75;

}

.portfolio-cards-group-eng:hover .portfolio-card__btn-eng:not(:hover)::after {
  background-color: rgba(#000, 0.5);
}

.portfolio-card__btn-eng {
  position: relative;
  width: 80%;
  max-width: 395px;
  margin: 15px;
  padding: 0px;
  cursor: pointer;
  transition: 0.3s;
}
.portfolio-card__btn-eng {
position: relative;
width: 80%;
max-width: 395px;
margin: 15px;
padding: 0px;
cursor: pointer;
transition: 0.3s;
}

.portfolio-card__description-eng {
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

.portfolio-card__btn-eng:hover .portfolio-card__description-eng {
transform: rotateY(0);
opacity: 1;
}

.portfolio-card__btn-eng img {
width: 100%;
border-radius: 5px;
max-width: 100%;
}

.portfolio-card__btn-eng a {
margin: 10px;
text-decoration: none;
color: #10A37F;
font-size: 14px;
font-weight: 600;
-webkit-transition: .3s ease-in-out;
transition: .3s ease-in-out;
opacity: 0;
}

.portfolio-card__btn-eng:hover a  {
opacity: 1;
-webkit-transition: .3s ease-in-out;
transition: .3s ease-in-out;
text-decoration: none;
color: #10A37F;
}
@media (min-width: 769px) {
  .portfolio-eng {
  text-align: center;
  padding-top: 40px;
  }
  .portfolio-cards-group-eng {
    flex-direction: row;
  }
  .portfolio-card__btn-eng img {
    width: 100%;
  }
}

.service-eng {
  text-align: center;
  padding-top: 60px;
  height: auto;
  background-color: #ffffff;
  margin: 5px;
}

.cardService {
  min-height: 410px;
  width: 290px;
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

/* Seccion de estudios */

.studies-main-eng {
  padding-top: 25px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.studies-bottom-parraph{
  font-size: 14px;
}

.studies {
  padding-top: 60px;
  height: auto;
  background-color: #ffffff;
}

.studies-title {
  text-align: center;
}


.studies-main-eng h2 {
  font-weight: 700;
}

.studies-main-eng h3 {
  font-weight: 600;
  font-size: 22px;
}

@media screen and (min-width: 769px) {
  .cardService {
    width: 400px;
  }
  .studies-main-eng {
    margin-left: 15%;
    margin-right: 15%;
  }
  .studies-bottom-parraph-eng{
    width: 65%;
    font-size: 16px;
  }
}
.carousel1 {
  border: 1px solid rgba(0, 0, 0, 0.175);
  width: 70%;
  margin: auto;
}

.studies-bottom-eng {
  text-align: center;
}

.studies-bottom-main-eng {
  height: auto;
  opacity: 0.96;
  background-image: url("../assets/Ajedrez.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.studies-bottom-container-eng {
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.studies-bottom-main-content-eng {
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.studies-bottom-main-content-eng h2 {
  margin: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
}

.studies-bottom-container-eng h3 {
  margin: 10px;
  color: #ffffff;
  font-weight: 400;
}

.studies-bottom-img-eng {
  width: 28%;
  border-radius: 50%;
  transition: 0.2s;
}


@media screen and (min-width: 769px) {
  .studies-bottom-container-eng {
    width: 80%;
  }
  
  .studies-bottom-img-eng {
    margin: 4px;
    max-width: 90px;
    border-radius: 50%;
  }

  .studies-bottom-img-eng:hover {
    transform: scale(1.5);
  }
  
  .studies-bottom-main-content-eng h2 {
    font-size: 32px;
  }
}

@media screen and (min-width: 501px) and (max-width:768) {
  .studies-bottom-main-content-eng h2 {
    font-size: 22px;
  }
}
.studies-bottom-parraph-eng {
  padding: 5px;
  font-size: 14px;
  color: #5D4581;
  font-weight:600;
  backdrop-filter: blur(1.0px);
  background-color: hsla(0, 0%, 100%, 0.578);
  border-radius: 5px ;
}

.studies-bottom-icons-eng {
  padding-top: 35px;
}

.studies-bottom-icons-eng img {	
  background-color: #fff;
  border-radius: 10px;
  margin: 4px;
  padding: 10px;
  height: 50px;
  transition: transform .3s
}

.studies-bottom-icons-eng img:hover {	
  transform: scale(2);
}

.experience-eng {
  text-align: center;
  padding-top: 40px;
  height: auto;
  background-color: #ffffff;
}

.experience-main-eng {
  text-align: start;
  margin: 15px;
  padding-top: 20px;
  height: auto;
  background-color: #ffffff;
}

.publications-eng{
  text-align: center;
  padding-top: 20px;
  height: auto;
  background-color: #ffffff;
}
.publications-main-eng{
  text-align: start;
  margin: 15px;
  padding-top: 20px;
  height: auto;
  background-color: #ffffff;
}
.publications-main-eng ul li{
  padding:10px;
}
/* Sección Contacto */
.contact-eng {
  text-align: center;
  padding-top: 20px;
}

.contact-main-eng {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-main-col-eng{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-card-eng {
  width: 100%;
}
.contact-main-col-eng .card {
  min-height: 150px !important;
}

@media screen and (min-width: 769px) {
.experience-main-eng {
    padding-top:20px;
    margin:25px;
  }
  .contact-main-col-eng {
    display: flex;
    justify-content: center;
    width: 90%;
  }
  .contact-card-eng {
    width: 60%;
  }
  .contact-body-eng{
    height:200px;
  }
  .contact-main-eng {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.card-body-eng i {	
  font-size: 32px;
  color:#6195ff;
  padding: 10px;
}

.card-body-eng h3 {
  padding: 5px;
}

.contact-button-eng {
  color:#ffffff;
  background-color:#6195ff;
  padding: 10px 25px;
  margin-top: 30px;
  margin-bottom: 22px;
  border: none;
  border-radius: 5px;
}

.contact-form-eng form {
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
}

.form-control-eng {
  margin:12px ;
  width: 90%;
}

.form-label-eng {
  margin: 0 15px;
  text-align: start;
}

.contact-form-eng form button {
  text-align: center;
  width: 50%;
  margin: auto;
  margin-bottom: 10px;
}
@media screen and (min-width: 769px) {
  .contact-form-eng form {
    width: 38%;
  }
  .contact-button-eng {
    max-width: 150px;
  }
  
}
#mybtn-eng {
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
#mybtn-eng:hover {
  background-color: #555;
}
</style>