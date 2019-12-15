 
<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <div class="center">
      <!--<LastArticle></LastArticle>-->
      <router-view></router-view>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import Slider from "./components/Slider.vue";
import Sidebar from "./components/sidebar.vue";
//import LastArticle from "./components/LastArticle.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "app",

  components: {
    HeaderComponent,
    Slider,
    Sidebar,
   // LastArticle,
    FooterComponent
  }
};
</script>

<style>
@import "./assets/css/style.css";
</style>
