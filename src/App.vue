<template>
  <div id="app" class="app">
    <Navbar id="nav-bar-sticky"/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      Navbar
    },
    methods: {
      handleScroll (event) {
        let header = document.getElementById("nav-bar-sticky")
        let sticky = header.offsetTop
        if (window.pageYOffset >= sticky) {
          header.classList.add("sticky")
        } else {
          header.classList.remove("sticky")
        }
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style>
    .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
}
</style>
