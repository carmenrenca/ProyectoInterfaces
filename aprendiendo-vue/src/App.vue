<template>
  <div id="app" >
    <div v-if="route!='login' && route!='registro'" >

 <HeaderComponent></HeaderComponent>
    </div>
   
    
    <div class="center">
      <!--<LastArticle></LastArticle>-->
      <router-view></router-view>
      
    </div>
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
//import Slider from "./components/Slider.vue";
//import Sidebar from "./components/sidebar.vue";
//import LastArticle from "./assets";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "app",
  components: {
    HeaderComponent,
   // Slider,
  
   // LastArticle,
    FooterComponent
  },
  computed: {
  route: function  currentRouteName() {
    console.log(this.$route.name)
        return this.$route.name;
    }
  }
};
</script>

<style>
@import "./assets/css/style.css";
</style>