<template>
  <div class="card">
    <!-- <img :src="require(`../assets/${imgURL}`)" /> -->
    <i :class="`${iconName} icon`"></i>
    <h2>{{name}}</h2>
    <span>{{content}}</span>
  </div>
</template>

<script>
export default {
    name: 'cardView',  
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
    max-width: 400px;
    min-height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Varela Round', sans-serif;
    margin: 10px;
    text-align: center;
}


</style>