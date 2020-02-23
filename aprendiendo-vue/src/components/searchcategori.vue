<template>
<div class="general">
    <Slider texto="Busquedad"></Slider>
    <div class="center">
  <section id="content">
  <div class="subheader" v-if="articles"> <h1>{{this.searchString}}</h1>   </div>     
   <div class="subheader" v-else> <h1>Sin resultados</h1>   </div>     
    <div id="articles" v-if="articles">
               <Articles :articles="articles"></Articles>       
                    <!--AÑADIR ARTICULOS VIA JS-->
                </div>
         

 <div v-else>
           <h2>No hay artículos que coincidan con tu busquedad</h2> 
             </div>    

  </section>
    <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./sidebar.vue";
import axios from "axios";
import {global} from '../global';
import Articles from './Articles';

export default {
  name: "SearchCategori",
  components:{
   Articles,
     Slider,
    Sidebar,
 
  },
  
  mounted() {
     // this.searchString=this.$route.params.searchString
      var searchString= this.$route.params.searchString;
    this.getArticleBySearch(searchString);
  },
  data() {
   
    return {
       url: global.url,
      articles: [],
        //  searchString:this.$route.params.searchString
    };
  },
  methods: {
    getArticleBySearch(searchString) {
        console.log("eeeennnnntraa search")
      axios.get(this.url+"searchCategori/"+searchString).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      
      });
       
 
    } 
  }
};
</script>