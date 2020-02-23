<template>


  <div class="general">
   
    <div class="center">
      <section id="content">
         <b-card class="">
               <h1 class="subheader">{{evento.titulo}}</h1>

        <article class="article-item article-detail" v-if="evento">
          <div class="imgA">
            <img 
            :src="url+'evento/get-image/'+evento.imagen" :alt="evento.titulo" v-if="evento.imagen" class="imgstyle"
            />
       
          </div>

        
          <span class="date">{{evento.date | moment("from", "now")}}</span>
        <p>{{evento.descripcion}}</p>

          <div class="clearfix"></div>
             
 <a v-bind:href="evento.enlace">Pulsa aquí para mas Información</a>
                  
                          <div class="col-md-2"></div>
  <h2  style="text-align:right">{{evento.date.substring(0, 10)}}</h2>
   <h2  style="text-align:right">{{evento.date.substring(11, 16)}}</h2>

   
         
          
  
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.206901779004!2d-5.95903168533968!3d37.40858424091714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12693400b90dc3%3A0x8ffaa6904f9a0e76!2sSala%20CUSTOM!5e0!3m2!1ses!2ses!4v1581882563330!5m2!1ses!2ses" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

        </article>
     <div class="col-lg-1 align-self-end" v-show="rol=='Administrador'">            <a  to="/eliminar" class="btn btn-danger " @click="eliminar(evento._id)">Eliminar</a>
</div>
    
         </b-card>

      </section>

      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script src="https://unpkg.com/vue-static-map/dist/StaticMap.umd.min.js"></script>

<script>


import Sidebar from "./sidebar.vue";
import {global} from '../global';
import axios from "axios";
import swal from "sweetalert";
export default {
    name: 'Evento',
    
    components:{

        Sidebar
    },
    data(){
        
        return {
         
     
            url: global.url,
            evento:null, rol:""
        }
    }, mounted(){
      var  eventoId=this.$route.params.id;
 this.getEvento(eventoId);
 this.verificarol();

    },
    methods:{
        getEvento(eventoId){
            axios.get(this.url+'evento/getEvento/'+eventoId).then(res=>{
                    if(res.data.status=='success'){
                        this.evento= res.data.evento; 
                    }
            });
        },
  verificarol(){
     
        this.rol= localStorage.getItem('rol');
     console.log(this.rol+"%%%%%%%%%%%%%%")
            
            
                },
          eliminar(eventoId) {
      console.log(eventoId);
      axios.delete(this.url + "evento/delete/" + eventoId).then(res => {
        console.log(res);
        swal(
          "Evento Eliminado",
          "El Evento se ha borrado correctamente",
          "success"
        );
        this.$router.push("/TablonEventos");
      });
    },
        deleteArticle(articleId){
         axios.delete(this.url+'article/'+articleId).then(res=>{
           console.log(res);
               swal('Articulo Eliminado','El articulo se ha borrado correctamente','success' );
          this.$router.push('/Blog');
         });
        },
       
 
    }

}
</script>