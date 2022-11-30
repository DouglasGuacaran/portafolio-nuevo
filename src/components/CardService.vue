<template>
    <div class="cardService">
      <i :class="`${iconName} icon`"></i>
      <div class="column">
        <h2>{{title}}</h2>
        <span>{{content}}</span>
      </div>
</div>
</template>

<script>
export default {
    name: 'CardService',  
    props: {
        iconName: String,
        title: String,
        content:String,
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');


.cardService {
  width: 20%;
}

.column {
  font-weight: 400;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;

}

</style>