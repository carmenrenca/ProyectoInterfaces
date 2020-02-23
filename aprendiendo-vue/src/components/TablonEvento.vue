<template>


<div class="general">
   <template>


</template>
 
    <div class="center">
  <section id="content">
    <h1 class="subheader">Próximos Eventos</h1>
    
    <div id="eventos" v-if="eventos">
               <Eventos :eventos="eventos"></Eventos>       
                    <!--AÑADIR Eventos VIA JS-->
                </div>
                
  </section>
<Sidebar></Sidebar>
    </div>
    <div class="clearfix col-md-1">
     
    </div>

 
  </div>
</template>

<script>

import axios from "axios";
import {global} from '../global';
import Sidebar from "./sidebar.vue";
import Eventos from './Eventos';

//import VueJWT from 'vuejs-jwt'

//import * as jwt_decode from 'jwt-decode';


export default {
   
  name: "TablonEventos",
  components:{
   Eventos,
  Sidebar,
 
  },
  mounted() {

    this.getEventos();

  },
  data() {
   
    return {
       url: global.url,
      eventos: [], 

     
    };
  },
  methods: {

   
     
    getEventos() {
      axios.get(this.url+"evento/getenventos").then(res => {
        if (res.data.status == "success") {
          this.eventos = res.data.eventos;
    
        }
   
      });
    }, 

  }
};
</script>