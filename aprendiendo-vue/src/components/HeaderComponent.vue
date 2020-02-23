<template>
    <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Musi</strong>carium
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu" class="col-lg-12" >
                 
                    <ul class="" >
                        <li >
                        <router-link to="/home">Inicio</router-link>
                      
                        </li>
                         <li >
                        <router-link to="/pefil">Mi Perfil</router-link>
                      
                        </li>
                        <li>
                            <router-link to="/Blog" >Articulos</router-link>
                        </li>
                        <li >
                        <router-link to="/TablonEventos">Eventos</router-link>
                      
                        </li>
                        <li v-show="this.rol=='Administrador'">
                       <router-link to="/Cliente">Clientes</router-link>
                        </li>
                     
                            <li v-show="this.rol=='Administrador'">
                          <router-link to="/Factura" >Facturas</router-link>

                        </li>
                     
                         
                   <li> <button v-on:click="cerrarsesion()">Cerrar<i class="far fa-trash-alt"></i></button>
                      
                       </li>   
                            
                    </ul>
                    
                </nav>
 
  </div>
                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>

        </header>

</template>

<script>
 import {
    mdiAccount,
   
  } from '@mdi/js'
  import Swal from 'sweetalert2'

export default {
    data:()=>({
         icons: {
        mdiAccount,
     
      }, rol:""
    }),
    mounted(){
     this.verificarol();

    },
    name:'HeaderComponent',
     methods:{
    
     verificarol(){
     
        this.rol= localStorage.getItem('rol');
     console.log(this.rol+"%%%%%%%%%%%%%%")
            
            
                },
  cerrarsesion(){
      
     Swal.fire({
  title: 'Cerrar Sesion?',
  text: "Va a cerrar la sesion",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Salir'
}).then((result) => {
  if (result.value) {
     localStorage.removeItem('usertoken');      
            
            setTimeout(() => {
              this.$router.push("/")
            }, 1500)
   
  }
})        
  }

     
                     

     }
}
</script>