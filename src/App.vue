<template>
  <div id="app" :class="!filmList || !tvShowList ? 'vh-100' : ''">
    <Nav @getListData="listenListData" ></Nav>
    

    <div class="ms-3 me-0 p-0">

    <h2 class="text-white mt-5 ms-3">FILM</h2>
    <div class="d-flex flex-row flex-nowrap overflow-auto myRow">
      <Card v-for="card in filmList" :key="card.id" :card="card"> </Card>
    </div>
    
    <h2 class="text-white mt-5 ms-3">SERIE TV</h2>
    <div class="d-flex flex-row flex-nowrap overflow-auto myRow pb-5">
      <Card class="" v-for="card in tvShowList" :key="card.id" :card="card"> </Card>
    </div>
  
    </div>
    


  </div>
</template>

<script>

import Nav from "./components/Nav.vue"
import Card from "./components/Card.vue"

export default {
  name: 'App',
  components: { Nav, Card },
  data(){
    return{
      userSearch : "",
      filmList : "",
      tvShowList : "",
      
    }
  },
  methods: {
    /**
     * listKey (è la mia lista dove pusho gli elementi, quando viene invocato va scritto sottoforma di stringa, perchè è come se fosse la chiave di this e le chiavi ed i valori  vanno scritti come stringhe nei JSON )
     */
    

    listenListData(listaFilm, listaSerieTv){
      console.log(listaFilm);
      console.log(listaSerieTv);
      this.filmList = listaFilm
      this.tvShowList = listaSerieTv
    }
    
  },
 
}
</script>

<style lang="scss" >
  @import "./styles/App.scss";

#app{
  background-color: black;

}

.myRow{
  width: 100%;
}


 


</style>
 