<template>
  <div id="app">
   <input @keyup.enter="printCard('/search/movie'),printCard('/search/tv')"  v-model="UserSearch" type="text">
   <button @click="printCard('/search/movie'),printCard('/search/tv')" >cerca</button>
   <ul>
     <li><h2>FILM</h2></li>
     <li v-for="card in FilmList" :key="card.id">
       titolo: {{ card.title }} <br>
       titolo originale: {{ card.original_title }} <br>
       lingua : <img class="flags" :src="  FlagsArray[0] || FlagsArray[1] || FlagsArray[2] || FlagsArray[3] === card.original_language ? 'https://images.emojiterra.com/twitter/v13.1/128px/1f310.png' : Flags[card.original_language]" alt=""> <br>
       voto : {{ card.vote_average }} 
      </li>
      <li><h2>SERIE TV</h2></li>
      <li v-for="card in TvShowList" :key="card.id">
        titolo: {{ card.name }} <br>
        titolo originale: {{ card.original_name}} <br>
        lingua : <img class="flags" :src=" !FlagsArray.includes(card.original_language) ? 'https://images.emojiterra.com/twitter/v13.1/128px/1f310.png' : Flags[card.original_language]" alt=""> <br>
        voto : {{ card.vote_average}}
      </li>
   </ul>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      ApiUrl : "https://api.themoviedb.org/3",
      ApiKey : "113afd4e2596a1b537a7d1a2d3a3c2c0",
      UserSearch : "",
      FilmList : "",
      TvShowList : "",
      Flags: {
        it : "https://hotemoji.com/images/dl/9/flag-of-italy-emoji-by-twitter.png",
        en : "https://images.emojiterra.com/twitter/v12.1.5/512px/1f1ec-1f1e7.png",
        es : "https://images.emojiterra.com/twitter/v12.1.5/512px/1f1ea-1f1f8.png",
        de : "https://images.emojiterra.com/twitter/v13.1/512px/1f1e9-1f1ea.png",
        "" : ""
        //se la lingua non è presente nele mie flags allora inserisci terra se no 
        // !Flags ? "https://images.emojiterra.com/twitter/v13.1/128px/1f310.png" : "Flags[card.original_language]"
      },
      FlagsArray : ""
    }
  },
  methods: {
    printCard(search){
      /* console.log(Object.keys(this.Flags));
      console.log("ricerca partita"); */
      this.FlagsArray= Object.keys(this.Flags)
      console.log(this.Flags.it);
      axios.get(this.ApiUrl + search, {
        params: {
          api_key : this.ApiKey,
          query : this.UserSearch,
        }
      })
    .then(resp => {
      if(search === '/search/movie'){
        this.FilmList = resp.data.results
      } else{
        this.TvShowList = resp.data.results
      }
		})
    },
  }
}
</script>

<style lang="scss" scoped>
 @import "./styles/App.scss";

 .flags{
   width: 20px !important;
 }
 //funziona gli || e && con le if ternary??
</style>
 