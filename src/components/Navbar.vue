<template>
  <div :id= "`${id}`" class="header">
        <b-navbar  class="nav-bar" toggleable="md" type="dark" variant="dark">
        <img class="header-logo" src="../assets/Ajedrez.jpg" alt="logo">
        <a class="navbar-brand ml-2" href="#">Douglas Guacaran</a>
        <b-navbar-toggle class="mx-2" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="flex justify-content-between" is-nav>
        <b-navbar-nav class="justify-content-left">
            <b-nav-item href="#section1">Inicio</b-nav-item>
            <b-nav-item href="#about">Acerca de</b-nav-item>
            <b-nav-item href="#portfolio">Portafolio</b-nav-item>
            <b-nav-item href="#service">Servicios</b-nav-item>
            <b-nav-item href="#studies">Estudios</b-nav-item>
            <b-nav-item href="#experience">Experiencia</b-nav-item>
            <b-nav-item href="#contact">Contacto</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="justify-content-right">
            <b-nav-item href="https://github.com/douglasguacaran"><img class="imagen-nav" src="../assets/img/icons/github-mark-white.png" alt="Github icon"></b-nav-item>
            <b-nav-item to="/"><img class="imagen-nav" src="../assets/img/icons/espana.png" alt="Github icon"></b-nav-item>
            <b-nav-item to="/home-eng"><img class="imagen-nav" src="../assets/img/icons/united-kingdom.png" alt="Github icon"></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        </b-navbar>
  </div>
</template>

<script>
export default {
    name:'Navbar',
    components:{
    },
    props: {
      id: String
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
.header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    position: fixed;
    width: 100%;
    min-width: 320px;
}

.header-logo {
    border-radius: 5px;
    margin-left: 6px;
    height: 35px;
    width: 35px;
}

.navbar-brand {
  font-family: 'Varela Round', sans-serif;
  color: #fff;
  letter-spacing:0px;
  font-size: 14px;
}

nav a {
  font-family: 'Varela Round', sans-serif;
  font-weight: bold;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color:hsl(208, 75%, 40%);
}

.imagen-nav {
  height: 30px;
  width: 30px;
}

@media screen and (max-width: 330px){
    .navbar-brand {
        margin:2px;
    }
    .header-logo {
        height:25px;
        width: 25px;
    }
}
</style>