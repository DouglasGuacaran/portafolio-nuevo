<template>
  <div class="card">
    <!-- <img :src="require(`../assets/${imgURL}`)" /> -->
    <i :class="`${iconName} icon`"></i>
    <h2>{{name}}</h2>
    <span>{{content}}</span>
    <span><a href="#">Leer más</a></span>
  </div>
</template>

<script>
export default {
    name: 'Card',  
    props: {
        iconName: String,
        name: String,
        content: String
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
    margin: 10px;
    text-align: center;
}


</style>