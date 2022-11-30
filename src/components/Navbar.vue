<template>
  <div :id= "`${id}`" class="header">
        <b-navbar  class="nav-bar" toggleable="md" type="dark" variant="dark">
        <img class="header-logo" src="../assets/Ajedrez.jpg" alt="logo">
        <b-navbar-brand href="#section1">Douglas Guacaran</b-navbar-brand>
        <b-navbar-toggle class="mx-2" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="mx-1 justify-content-end" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#section1">Inicio</b-nav-item>
            <b-nav-item href="#about">Acerca</b-nav-item>
            <b-nav-item href="#portfolio">Portafolio</b-nav-item>
            <b-nav-item href="#service">Servicios</b-nav-item>
            <b-nav-item href="#studies">Estudios</b-nav-item>
            <b-nav-item href="#experience">Experiencia</b-nav-item>
            <b-nav-item href="#contact">Contacto</b-nav-item>
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    min-width: 320px;
}

.header-logo {
    margin-left: 6px;
    height: 35px;
    width: 35px;
}
.nav-bar {
    width:100%;
}

.navbar-brand {
  font-family: 'Varela Round', sans-serif;
  color: #fff;
  letter-spacing:-1px;
  font-size: 14px;
  margin-left:20px;
}

@media screen and (max-width: 330px){
    .navbar-brand {
        margin-left:2px;
    }
    .header-logo {
        height:25px;
        width: 25px;
    }
}

nav a {
  font-family: 'Varela Round', sans-serif;
  font-weight: bold;
  letter-spacing:0px;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color:#ffffff;
}
</style>