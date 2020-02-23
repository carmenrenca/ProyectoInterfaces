import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
import LastArticle from './components/LastArticle.vue';
import  MiComponente  from './components/MiComponente.vue';
import  HelloWorld  from './components/HelloWorld.vue';
import  Blog from './components/Blog.vue';
import Pagina from './components/Pagina.vue';
import ErrorComponent from'./components/ErrorComponent.vue';
import BootstrapVue from 'bootstrap-vue'
import Articulos from './components/Articulos.vue';
import Factura from './components/Factura.vue';
import Cliente from './components/Cliente.vue';
import Search from './components/Search.vue';
import Redirect from './components/redirect.vue';
import Article from './components/Article.vue';
import Evento from './components/Evento.vue';
import ClienteGes from './components/ClienteGestion.vue';
import CreateArticle from './components/CreateArticle.vue';
import CreateCliente from './components/CreateCliente';
import CreateEvento from './components/CrearEvento.vue';
import EditArticle from './components/EditArticle.vue';
import login from './components/login.vue';
import registro from './components/registre.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import CreateCategoria from './components/CrearCategory.vue';
import SearchCategori from './components/searchcategori.vue';
import perfil from './components/perfil.vue';
import RedirectCategori from './components/redirectCategori.vue';
import TablonEventos from './components/TablonEvento.vue';

//import hooks from './router/hooks'
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(Vuelidate);
Vue.use(vuetify);

Vue.use(VueMoment,{
  moment
});


const  routes=[
  //RUTAS BLOG CLIENTE
  {path:'/home', component: LastArticle},
  {path:'/ultimos-articulos', component: LastArticle},
  {path:'/mi-componente', component: MiComponente},
  {path:'/Hola-word', component: HelloWorld},
  {path:'/LastArticle', component: LastArticle},
  {path:'/Blog', component:Blog},
  {path:'/TablonEventos', name:'TablonEventos', component:TablonEventos},
  {path:'/CreateEvento', name:'CreateEvento', component:CreateEvento},
  {path:'/articulo/:id', name:'article', component: Article},
  {path:'/evento/:id', name:'evento', component: Evento},
  {path:'/cliente/:id', name:'cliente', component: ClienteGes},
  {path:'/Pagina1', component:Pagina},
  {path:'/Cliente', component:Cliente, name:'Cliente'},
  {path:'/Articulos', name:'Articulos', component:Articulos},
  {path:'/redirect/:searchString',  component:Redirect},
  {path:'/redirectCategori/:searchString',  component:RedirectCategori},
  {path:'/buscador/:searchString', component:Search},
  {path:'/categoria/:searchString', component:SearchCategori},
  {path:'/Factura', name:'Factura', component:Factura},
  {path:'/createarticle', name:'create', component:CreateArticle},
  {path:'/createcliente', name:'createcliente', component:CreateCliente},
  {path:'/editarticle/:id', name:'edit', component:EditArticle},
  {path:'/',component:login,  name:'login'},
  {path:'/registro',component:registro,  name:'registro'},
  {path:'/pefil', component:perfil, name:'perfil'},
  
  {path:'/crearcategoria',component:CreateCategoria, name:'createcategory' },
  //RUTAS GESTION

  {path:'*', component: ErrorComponent}
  
]
//hooks(this.routes)
const router = new VueRouter({

  routes,
  mode: 'history'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


