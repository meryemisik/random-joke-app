<template>
  <div>
    <img class="joke-image" src="../assets/img.png" />
<br>
    <div>
      <p class="text">Retrieve a random chuck joke in JSON format.</p>
      <div class="card mt-4 randomJoke">
        <div @click="goToRandom()">/random</div>
      </div>

       <p class="text">Retrieve a list of available categories.</p>
      <div class="card mt-4 randomJoke">
        <div @click="goToCategories()" class="">/categories</div>
      </div>
    </div>

    <!-- <button @click="goToCategories()">{{ buttonTitle }}</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonTitle: "Categories",
    };
  },
  methods: {
    goToCategories() {
      this.$router.push("/categories");
    },
    
    goToRandom(){
        this.$router.push("/random");
    }
  },
};
</script>

<style>
.joke-image {
  height: 200px;
  width: 350px;
}
.text {
  width: 40%;
  font: 16px/1.5 "Courier New", Arial, sans-serif;
  margin: auto;
  text-align: justify;
  margin-top: 1.5rem;
}
.usage {
  color: #f15b23;
  display: block;
  font-size: 1.17em;
  font-weight: bold;
}
.randomJoke {
  width: 40%;
  margin: auto;
  padding: 0.8rem;
  font-family: monospace;
  border-radius: 0;
}
.subscribe {
  background-color: white;
  border: 1px solid rgb(207, 212, 217);
}
.input_mail {
  width: 40%;
  margin: auto;
}
</style>