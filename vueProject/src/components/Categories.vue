<template>
  <div class="card_div">
    <div v-for="(category, index) in categories" :key="index" class="card" style="width: 20rem;">
      <i style="font-size:30px; margin-top:15px;" :class="category.icon"></i>
    <div class="card-body">
      <h5 class="card-title">{{category.name}}</h5>
      <p class="card-text">Prepare yourself to laugh a joke about {{category.name}}</p>
      <button @click="goToJoke(category)" class="btn btn-primary">To  {{category.name}} joke</button>
    </div>
    </div>
  </div>
</template>
<script>
import { settings } from "../assets/icons.js"
export default{
  data(){
    return {
      categories : []
    }
  },
  mounted(){
    fetch(settings.baseURL + "categories")
    .then(response => response.json())
    .then(data=> {
      let categories = data.map(category => {
        return {
          icon : settings.icons[`${category}`],
          name : category
        }
      })
      this.categories = categories;
    });
  },
  methods : {
    goToJoke(category){
      this.$router.push({name : "Joke", params : {categoryId : category.name}});
    }
  }
}
</script>
<style scoped>
.card{
  width: 10rem;
  margin-left: 1rem;
  margin-top: 1rem;
}
.card_div{
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
}
</style>