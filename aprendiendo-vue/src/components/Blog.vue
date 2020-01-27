<template>


<div class="general">
   <template>


</template>
 

<slider></slider>


<h2>Categorías</h2>
<div class="card-group">
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="card-img-top" src="../assets/guitarra.jpg" alt="">
        <div class="overlay">
           <h2>Guitarras</h2>
           <a class="info"  href="#"  @click="getArticleCategori('Guitarras')" >link here</a>
        </div>
    </div>
</div>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="card-img-top" src="../assets/teclado.jpg" alt="">
        <div class="overlay">
           <h2>Teclados</h2>
           <a class="info"  href="#"  @click="getArticleCategori('Pianos')"   >link here</a>
        </div>
    </div>
</div>

   <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="card-img-top" src="../assets/albunes.jpg" alt="">
        <div class="overlay">
           <h2>Albunes</h2>
           <a class="info" href="#" >link here</a>
        </div>
    </div>
</div>
 
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="card-img-top" src="../assets/bateria.jpg" alt="">
        <div class="overlay">
           <h2>Baterias/Percusion</h2>
           <a class="info" href="#">link here</a>
        </div>
    </div>
</div>
 
</div>

    <div class="center">
  <section id="content">
    <h1 class="subheader">Articulos</h1>
    
    <div id="articles" v-if="articles">
               <Articles :articles="articles"></Articles>       
                    <!--AÑADIR ARTICULOS VIA JS-->
                </div>
                
  </section>
    <Sidebar></Sidebar>
    </div>
    <div class="clearfix">
      
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./sidebar.vue";
import axios from "axios";
import {global} from '../global';
import Articles from './Articles';
export default {
   
  name: "Blog",
  components:{
   Articles,
     Slider,
    Sidebar,
 
  },
  mounted() {
 
    this.getArticle();
  },
  data() {
   
    return {
       url: global.url,
      articles: [],
     
    };
  },
  methods: {
    getArticle() {
      axios.get(this.url+"articles").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }, 

    getArticleCategori(categori){
      console.log(categori)
        axios.get(this.url+"articlecategoria/"+categori).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.article;
          console.log(res.data.article);
          
        }else{
          console.log(res.data.status)
        }
      });
    }
  }
};
</script>