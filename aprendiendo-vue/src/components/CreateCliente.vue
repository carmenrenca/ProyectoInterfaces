<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Cliente</h1>
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

          <input type="submit" value="Guardar" class="btn btn-success" />
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
  name: "CreateCliente",
  components: {
    Sidebar
  },
  data() {
    return {
      file: "",
      url: global.url,
      clientes: new Cliente("", "", "", 0, "", "", "")
    };
  },
  mounted() {},
  methods: {
    registro() {
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
          swal(
            "Cliente Creado",
            "el Cliente se ha creado correctamente :)",
            "success"
          );
          this.$router.push("/Cliente");
        })
        .catch(err => {
          console.log(err);
          swal(
            "Direccion Existente",
            "Esa direccion ya existe prueba con otra ",
            "error"
          );
        });
    }
  }
};
</script>