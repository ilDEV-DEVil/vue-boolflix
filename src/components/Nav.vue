<template>
  <div class="background d-flex justify-content-between align-items-center pt-3 pb-3">
    <h1 class="ms-3">BOOLFLIX</h1>
    <!-- <select v-model="filter" class="form-select w-25" aria-label="Default select example">
        <option selected>All</option>
        <option value="film">Film</option>
        <option value="serie TV">Serie TV</option>
        
    </select> -->
    <div class="input-group w-25 me-4">
        <input v-model="searchData" @keyup.enter="getCardData('/search/movie', 'filmList' ),getCardData('/search/tv','tvShowList')"  type="text" class="form-control" placeholder="Cerca Film o Serie Tv..." aria-label="Recipient's username" aria-describedby="button-addon2">
        <button @click="getCardData('/search/movie', 'filmList' ),getCardData('/search/tv','tvShowList')" class="btn btn-danger" type="button" id="button-addon2">Button</button>
    </div>
  </div>
</template>

<script>

import axios from "axios"

export default {
name: "Nav",
data(){
    return{

        apiUrl : "https://api.themoviedb.org/3",
        apiKey : "113afd4e2596a1b537a7d1a2d3a3c2c0",
        searchData: "",
        filter : "",
        filmList : "",
        tvShowList : "",
    }
},
methods: {

    /**
     * listKey (è la mia lista dove pusho gli elementi, quando viene invocato va scritto sottoforma di stringa, perchè è come se fosse la chiave di this e le chiavi ed i valori  vanno scritti come stringhe nei JSON )
     */
    getCardData(search, listKey ){
    
      axios.get(this.apiUrl + search, {
        params: {
          api_key : this.apiKey,
          query : this.searchData,
        }
      })
    .then(resp => {
      this[listKey] = resp.data.results
      this.$emit('getListData', this.filmList, this.tvShowList )
		})
    },

}
}
</script>

<style lang="scss" scoped>
    .background{
        background-color: black;
        color: red;
    }
</style>