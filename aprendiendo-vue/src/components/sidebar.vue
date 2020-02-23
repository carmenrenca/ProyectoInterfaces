<template>
  <aside id="sidebar" >
    <div id="nav-blog" class="sidebar-item" v-show="rol=='Administrador'">
      <h3>Puedes hacer esto</h3>
        <div class="clearfix" v-if="route=='Cliente'">
   <router-link to="/createcliente" class="btn btn-success">Crear Cliente</router-link>
      <router-link to="/crearcategoria" class="btn btn-success">Edit Categoria</router-link>
        </div>
        <div class="clearfix" v-else-if="route=='TablonEventos' || route=='evento' "  >
   <router-link to="/CreateEvento" class="btn btn-success">Nuevo Evento</router-link>
        </div>
     
        <div v-else>
  <router-link to="/createarticle" class="btn btn-success">Crear Articulo</router-link>
      <router-link to="/crearcategoria" class="btn btn-success">Edit Categoria</router-link>
        </div>
  
    </div>

    <div id="search" class="sidebar-item" v-show="route!='evento' && route!='TablonEventos'">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <form @submit.prevent="gosearch">
        <input type="text" name="search" v-model="searchString"/>
        <input type="submit" name="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>

export default {
  name: "Sidebar",
  data(){
    return{
      searchString: null,
       url:"",rol:""
    }
  }, methods:{
    gosearch(){
    
          this.$router.push('/redirect/'+this.searchString);
    },
     verificarol(){
     
        this.rol= localStorage.getItem('rol');
     console.log(this.rol+"%%%%%%%%%%%%%%")
            
            
                }
 
  },
   computed: {
  route: function  currentRouteName() {
    console.log(this.$route.name)
        return this.$route.name;
    }
  }, 
  mounted() {
    this.verificarol();
  },
};
</script>