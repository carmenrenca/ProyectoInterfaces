<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Edita Cliente</h1>
        <form class="mid-form" v-on:submit.prevent="save()">
          <div class="form-group">
            <label for="title">Nombre</label>
            <input type="text" name="title" v-model="cliente.nombre" />
          </div>

          <div class="form-group">
            <label for="precio">Apellidos</label>
            <input type="text" name="title" v-model="cliente.apellido" />
          </div>
          <div class="form-group">
            <label for="stock">Direccion</label>
            <input type="text" name="stock" v-model="cliente.direccion" />
          </div>
             <div class="form-group">
            <label for="stock">Rol</label>
            <input type="text" name="stock" v-model="cliente.rol" />
          </div>
     <div class="form-group">
            <label for="stock">Telefono</label>
            <input type="text" name="stock" v-model="cliente.telefono" />
          </div>
           <div class="form-group">
            <label for="stock">DNI</label>
            <input type="text" name="stock" v-model="cliente.dni" />
          </div>
      <div class="row">
             <a @click="deleteCliente(cliente._id)" to="/eliminar" class="btn btn-danger">Eliminar</a>
      <div class="col-md-1"></div>
          <input type="submit" value="Guardar" class="btn btn-success" @click="save()" />
      </div>
  
        </form>
      </section>
      <Sidebar></Sidebar>
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
  name: "EditCliente",
  components: {
    Sidebar
  },
  data() {
    return {
      clienteID:'',
      file: "",
      url: global.url,
      cliente: new Cliente("", "", "", 0, "", "", "",""),
       clientes: new Cliente("", "", "", 0, "", "", "",""),
    
      isEdit: true
    };
  },
  mounted() {
    this.clienteID = this.$route.params.id;
    console.log(this.clienteID);
    this.getclientes(this.clienteID);
  },
  methods: {
   save() {
      var clienteid = this.$route.params.id;
   
      axios
        .put(this.url + "clienteupdate/" + clienteid, this.cliente)
        .then(res => {
          if (res.data.status == "success") {
             swal(
              "Edición finalizada",
              "El cliente se ha modificado correctamente :)",
              "success"
            );
           this.$router.push("/Cliente");
          } else {
            swal(
              "Edición fallida",
              "El elcliente no se ha modificado :(",
              "error"
            );
          }
        })
        .catch(error => {
          console.log(error+"22");
             
        });
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
   getclientes(){
 return axios({
          method: 'GET',
          url: this.url+"cliente/"+this.clienteID,

          
        }).then(res => {
          console.log(res)
          if (res.data.status == "success") {
            this.cliente = res.data.cliente;
    console.log( res.data.cliente+"2222")
          }
        })
        .catch(err => {
          console.log(err);
        });
  },

     deleteCliente(clienteId) {
      axios.delete(this.url + "clientes-delete/" + clienteId).then(res => {
        console.log(res);
        swal(
          "Cliente Eliminado",
          "El Cliente se ha borrado correctamente",
          "success"
        );
        this.$router.push("/Cliente");
      });
    }
  }
};
</script>