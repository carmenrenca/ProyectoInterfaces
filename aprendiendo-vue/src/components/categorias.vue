<template>
  
  
<nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
<a class="navbar-brand" href="#">Categorías</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav" >
      <li class="nav-item "  v-for="item of this.categori" :key="item">
 
        <a class="nav-link" type="submit" href="#" @click="gosearch(item.title)"  >{{item.title}} <span class="sr-only">(current)</span></a>

      </li>
      
   
    </ul>
  </div>
</nav>

  
</template>

<script>
import axios from "axios";
import { global } from "../global";
//import Blog from "../components/Blog";
export default {
  name: "category",
  mounted(){
this.getCategori();
  },
  data(){
    return{
   
        file: "",
      url: global.url,
         categori:[]
    }
  }
  ,
   components:{

   }
  , methods:{

     getCategori(){

        axios.get(this.url+"getcategori/").then(res => {
        if (res.data.status == "success") {
          this.categori = res.data.Categoria;
          console.log(res.data.Categoria);
          
        }else{
          console.log(res.data.status)
        }
      });
    },
       gosearch(searchString){
         

         console.log(searchString)
          this.$router.push('/categoria/'+searchString);
    }
  }
  }
</script>