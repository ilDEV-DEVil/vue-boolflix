<template>
  <div id="app">
   <input @keyup.enter="printCard('/search/movie', 'filmList' ),printCard('/search/tv','tvShowList')"  v-model="userSearch" type="text">
   <button @click="printCard('/search/movie', 'filmList' ),printCard('/search/tv','tvShowList')" >cerca</button>
   
   <!-- FILM -->
   <ul>
     <li><h2>FILM</h2></li>
     <li v-for="card in filmList" :key="card.id">
       <img :src="imgPath(card.poster_path)" alt=""> <br>
       titolo: {{ card.title }} <br>
       titolo originale: {{ card.original_title }} <br>
       lingua : <img class="flags" :src=" !flags[card.original_language] ? urlWorld : flags[card.original_language]" alt=""> <br>
       voto : <!-- {{ Math.ceil(card.vote_average / 2) }} --> 
       <!-- STELLE PIENE -->
        <i v-for="star,i in 5" :key="i" class="fa fa-star text-warning" :class=" Math.ceil(card.vote_average / 2) < i + 1 ? 'd-none' : ''"  aria-hidden="true"></i>
        <!-- <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 1 ? 'd-none' : ''"  aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 2 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 3 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 4 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 5 ? 'd-none' : ''" aria-hidden="true"></i> -->

        <!-- STELLE VUOTE-->
        <i v-for="starEmpty,i in 5" :key="i + 5" class="fa fa-star-o " :class=" Math.ceil(card.vote_average / 2) > i ? 'd-none' : ''"  aria-hidden="true"></i>
        <!-- <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 0 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 1 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 2 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 3 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 4 ? 'd-none' : ''"  aria-hidden="true"></i> -->                                               
        
      </li>
    </ul>

  <!-- SERIE TV -->
    <ul>
      <li><h2>SERIE TV</h2></li>
      <li v-for="card in tvShowList" :key="card.id">
        <img :src="imgPath(card.poster_path)" alt=""> <br>
        titolo: {{ card.name }} <br>
        titolo originale: {{ card.original_name}} <br>
        lingua : <img class="flags" :src=" !flags[card.original_language] ? urlWorld : flags[card.original_language]" alt=""> <br>
        voto : {{ Math.ceil(card.vote_average / 2) }} 
        <!-- STELLE PIENE -->
        <!-- <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 1 ? 'd-none' : ''"  aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 2 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 3 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 4 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star" :class=" Math.ceil(card.vote_average / 2) < 5 ? 'd-none' : ''" aria-hidden="true"></i> -->  
        <i v-for="star,i in 5" :key="i + 10" class="fa fa-star text-warning" :class=" Math.ceil(card.vote_average / 2) < i + 1 ? 'd-none' : ''"  aria-hidden="true"></i>
        

        <!-- STELLE VUOTE-->
        <!-- <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 0 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 1 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 2 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 3 ? 'd-none' : ''" aria-hidden="true"></i>
        <i class="fa fa-star-o" :class=" Math.ceil(card.vote_average / 2) > 4 ? 'd-none' : ''"  aria-hidden="true"></i> -->
        <i v-for="starEmpty,i in 5" :key="i + 15" class="fa fa-star-o " :class=" Math.ceil(card.vote_average / 2) > i ? 'd-none' : ''"  aria-hidden="true"></i>

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
      apiUrl : "https://api.themoviedb.org/3",
      apiKey : "113afd4e2596a1b537a7d1a2d3a3c2c0",
      userSearch : "",
      filmList : "",
      tvShowList : "",
  
      urlWorld : "https://images.emojiterra.com/twitter/v13.1/128px/1f310.png",
      flags: {
        it : "https://hotemoji.com/images/dl/9/flag-of-italy-emoji-by-twitter.png",
        en : "https://images.emojiterra.com/twitter/v12.1.5/512px/1f1ec-1f1e7.png",
        es : "https://images.emojiterra.com/twitter/v12.1.5/512px/1f1ea-1f1f8.png",
        de : "https://images.emojiterra.com/twitter/v13.1/512px/1f1e9-1f1ea.png",
  
        //se la lingua non è presente nele mie flags allora inserisci terra se no 
        // !Flags ? "https://images.emojiterra.com/twitter/v13.1/128px/1f310.png" : "Flags[card.original_language]"
      },
      basePosterPath:  "https://image.tmdb.org/t/p/",
      sizePosterPath:  "w342",
    }
  },
  methods: {
    /**
     * listKey (è la mia lista dove pusho gli elementi, quando viene invocato va scritto sottoforma di stringa, perchè è come se fosse la chiave di this e le chiavi ed i valori  vanno scritti come stringhe nei JSON )
     */
    printCard(search, listKey ){
    
      axios.get(this.apiUrl + search, {
        params: {
          api_key : this.apiKey,
          query : this.userSearch,
        }
      })
    .then(resp => {
      this[listKey] = resp.data.results
		})
    },

    imgPath(urlPoster) {
        /* const urlImg = "https://image.tmdb.org/t/p/"
        const posterSize = "w342" */
        if(!urlPoster){
          return "data:image/png;base64,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"
        }
        return this.basePosterPath + this.sizePosterPath + urlPoster
      },
  },
 /*  computed: {
    computedImgPath(){
      this.imgPath(this.poster_path)
      return this.basePosterPath + this.sizePosterPath + this.posterPath
    }
  }  */
}
</script>

<style lang="scss" >
 @import "~bootstrap/scss/bootstrap";
 @import "~font-awesome/css/font-awesome.min.css";

 .flags{
   width: 20px !important;
 }
 //funziona gli || e && con le if ternary??
</style>
 