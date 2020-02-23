<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Cliente</h1>
   <template>
    
</template>   

        <form class="mid-form" v-on:submit.prevent="registro()">
          <div class="form-group">
            <label for="title">Nombre</label>
            <input type="text" name="title" v-model="clientes.nombre" />
          </div>

          <div class="form-group">
            <label for="precio">Apellido</label>
            <input type="text" name="title" v-model="clientes.apellido" />
          </div>

          <div class="form-group">
            <label for="stock">Dirección</label>
            <input type="text" name="stock" v-model="clientes.direccion" />
          </div>
          <div class="form-group">
            <label for="content">Telefono</label>
            <input type="text" name="stock" v-model="clientes.telefono" />
          </div>
          <div class="form-group">
            <label for="content">Email</label>
            <input type="text" name="stock" v-model="clientes.email" />
          </div>
          <div class="form-group">
            <label for="content">DNI</label>
            <input type="text" name="stock" v-model="clientes.dni" />
          </div>
          <label for="staticDNI" class="col-sm-2 col-form-label">Roles</label>
          <div class="form-group">
            <select v-model="clientes.rol" class="form-control" id="exampleFormControlSelect1">
              <option>Administrador</option>
              <option>Cliente</option>
            </select>
          </div>
          <div class="form-group">
            <label for="content">Password</label>
            <input type="text" name="stock" v-model="clientes.password" />
          </div>
          <div class="row">
          <input type="submit" value="Guardar" class="btn btn-success" />
          <div class="col-2"></div>
          <div v-if="this.loanding" v-bind:style="styles" class="spinner spinner--stretch">
      <div v-bind:style="rectStyles" class="rect rect-1"></div>
      <div v-bind:style="rectStyles" class="rect rect-2"></div>
      <div v-bind:style="rectStyles" class="rect rect-3"></div>
      <div v-bind:style="rectStyles" class="rect rect-4"></div>
      <div v-bind:style="rectStyles" class="rect rect-5"></div>
    </div>
    <div>  <p class="col-md-2" style="color:red;">{{this.validacion}}</p></div>
          
          </div>
        </form>
      </section>
      <div>
        <Sidebar></Sidebar>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./sidebar.vue";
import { global } from "../global";
import Cliente from "../models/Cliente";
import axios from "axios";
import swal from "sweetalert";


//import {required, minLength} from 'vuelidate/lib/validators';
export default {
    props: {
    size: {
      default: '70px'
    },
    background: {
      default: '#41b883'
    },
    duration: {
      default: '1.2s'
    }
  },
  computed: {
    rectStyles () {
      return {
        backgroundColor: this.background,
        animationDuration: this.duration
      }
    },
    styles () {
      return {
        width: this.size,
        height: this.size
      }
    }
  },
  name: "CreateCliente",
  components: {
    Sidebar
  },
  data() {
    return {
      file: "",
      validacion:"",
      url: global.url,
      clientes: new Cliente("", "", "", "", "", "", ""),
      loanding:Boolean,
    };
  },
  mounted() {
    this.loanding=false
  },
  methods: {
    registro() {

         this.loanding=true;
      this.validacion=''
      axios
        .post("http://localhost:5000/users/register", {
          nombre: this.clientes.nombre,
          apellido: this.clientes.apellido,
          email: this.clientes.email,
          password: this.clientes.password,
          dni: this.clientes.dni,
          telefono: this.clientes.telefono,
          direccion: this.clientes.direccion,
          rol: this.clientes.rol
        })
        .then(res => {
          res.data;
          console.log("22"+res.data.result)
          if(res.data.result=='Faltan datos por enviar'){
            this.validacion=res.data.result;
              this.loanding=false;
          }else if(res.data.result=='El Email no es correcto'){
               this.validacion=res.data.result;
            this.loanding=false;

          }else if(res.data.result=='El telefono no es correcto'){
            this.validacion=res.data.result;
             this.loanding=false;

          }else if(res.data.result=='El DNI no es correcto'){
             this.validacion=res.data.result;
                      this.loanding=false;

          
          }else{

              


          this.loanding=false;
            console.log("entra en else")
     
        swal(
            "Cliente Creado",
          "Cliente Creado",
            "success"
         );

         
          //  router.push({ name: 'Profile' })
        

          this.$router.push("/Cliente");
        
          }
     
        })
        .catch(err => {
          console.log(err);
           this.loanding=false;
          swal(
            "Error",
            "Datos No Validos",
            "error"
          );
        
        });

   
    }
  }
};
</script>