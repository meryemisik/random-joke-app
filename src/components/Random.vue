<template>
  <div>
    <div v-if="isloading">Loading...</div>
    <div class="mt-3 randomJoke" v-if="!isloading">
      <b-card-group deck>
        <b-card border-variant="info" :header="'Joke ID : '+random.id"  align="center">
            <img :src="random.icon_url" alt="">
          <b-card-text
            >{{random.value}}</b-card-text
          >
        </b-card>
        
      </b-card-group>
    </div>
  </div>
</template>

<script>
import {settings} from "../assets/icons"
export default {
  data() {
    return {
      isloading : true,
      random: {},
    };
  },
  mounted(){
      fetch(settings.baseURL + "random")
      .then(response=> {
        if(response.ok)
        {
          this.isloading = false;
        }
        return response.json()
      })
      .then(data=> this.random = data);    
    }
};
</script>

<style>
.randomJoke {
  margin: auto;
  width: 50%;
}
</style>