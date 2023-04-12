<template>
  <div>
    <div>
      <p v-if="isloading">Loading...</p>
    </div>
    <div class="mt-3 randomJoke" v-if="!isloading">
      <b-card-group deck>
        <b-card border-variant="info" :header="generateHeader" align="center">
          <img :src="joke.icon_url" alt="" /><br />
          <a :href="joke.url">Joke URL</a>
          <b-card-text>{{ joke.value }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { settings } from "../assets/icons";
export default {
  data() {
    return {
      joke: {},
      isloading: true,
    };
  },
  mounted() {
    fetch(settings.baseURL + `random?category=${this.$route.params.categoryId}`)
      .then((response) => {
        if (response.ok) {
          this.isloading = false;
        }
        return response.json();
      })
      .then((data) => (this.joke = data));
  },
  computed: {
    generateHeader() {
      return `Category : ${this.$route.params.categoryId}`;
      // return "Category : " + this.$route.params.categoryId;
    },
  },
};
</script>

<style>
.randomJoke {
  margin: auto;
  width: 50%;
}
</style>
