<template>
  <div id="eventos-list">
    <article class="article-item" v-for="eventos in eventos" :key="eventos._id">
      <div class="image-wrap">

        <img :src="url+'evento/get-image/'+eventos.imagen" :alt="eventos.titulo" v-if="eventos.imagen" />
      </div>

   <h2>  <router-link :to="{name:'evento', params:{id: eventos._id}}">{{eventos.titulo}}</router-link> </h2>
     
   <h5 >{{eventos.date.substring(0, 10)}} , {{eventos.date.substring(11, 16)}}</h5>  
    
 <h5 ><a v-bind:href="eventos.maps">{{eventos.lugar}}</a></h5>  

  <div class="btn-toolbar" role="toolbar">
  <button type="button" class="btn btn-default btn-lg">
   <span class="glyphicon glyphicon-search"></span>
  </button>
   
  </div>
         <div class="clearfix"></div>
    </article>
  </div>
  
</template>

<script>

import { global } from "../global";



export default {
  name: "Eventos",

  props: ["eventos"],
  data() {
    return {
      fecha:"",
      url: global.url
    };
  }, methods:{
 

  }
};
</script>