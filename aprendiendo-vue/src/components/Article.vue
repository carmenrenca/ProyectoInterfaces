<template>


  <div class="general">
   
    <div class="center">
      <section id="content">
         <b-card class="">
        <article class="article-item article-detail" v-if="article">
          <div class="imgA">
            <img 
            :src="url+'get-image/'+article.imagen" :alt="article.title" v-if="article.imagen" class="imgstyle"
            />
       
          </div>

          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{article.date | moment("from", "now")}}</span>
        <p>{{article.content}}</p>
          <div class="clearfix"></div>
          <router-link  v-show="rol=='Administrador'" :to="'/editarticle/'+article._id" class="btn btn-warning">Editar</router-link>
                <a  v-show="rol=='Administrador'" @click="deleteArticle(article._id)" to="/eliminar" class="btn btn-danger">Eliminar</a>
               <h5 v-if="article.stock<5" class="stock-color">Disponible en stock: {{article.stock}}!!</h5>
                <h5 v-else style="text-align:right">Disponible en stock: {{article.stock}}</h5>
       <p class="display-4" style="text-align:right">{{article.precio}}€</p>
        </article>
         </b-card>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>


import Sidebar from "./sidebar.vue";
import {global} from '../global';
import axios from "axios";
import swal from "sweetalert";

export default {
    name: 'Article',
    
    components:{
   
        Sidebar
    },
    data(){
        return {
            url: global.url,
            article:null, rol:""
        }
    }, mounted(){
      var  articleId=this.$route.params.id;
 this.getArticle(articleId);
 this.verificarol();
    },
    methods:{
        getArticle(articleId){
            axios.get(this.url+'article/'+articleId).then(res=>{
                    if(res.data.status=='success'){
                        this.article= res.data.article; 
                    }
            });
        },

        verificarol(){
          this.rol= localStorage.getItem('rol');
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