<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Categorias</h3>

    </div>

    <div id="search" class="sidebar-item">
   
    </div>
  </aside>
</template>

<script>
export default {
  name: "category",
  data(){
    return{
      searchString: null
    }
  }, methods:{
    gosearch(){
    }
  }
};
</script>