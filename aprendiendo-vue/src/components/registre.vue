<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registro</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Nombre"
                    name="nombre"
                    prepend-icon="person"
                    type="text"
                    :state="null"
                    v-model="clientes.nombre"
                  />
                  <v-text-field
                    label="Apellidos"
                    name="apellidos"
                    prepend-icon="person"
                    type="text"
                    :state="null"
                    v-model="clientes.apellido"
                  />
                  <v-text-field
                    label="Direccion"
                    name="direccion"
                    prepend-icon="home"
                    type="text"
                    :state="null"
                    v-model="clientes.direccion"
                  />
                  <v-text-field
                    label="Telefono"
                    name="telefono"
                    prepend-icon="person"
                    type="text"
                    :state="null"
                    v-model="clientes.telefono"
                  />
                  <v-text-field
                    label="DNI"
                    name="DNI"
                    prepend-icon="person"
                    type="text"
                    :state="null"
                    v-model="clientes.dni"
                  />
                    <v-text-field
                    label="Rol"
                    name="Rol"
                    prepend-icon="person"
                    type="text"
                    :state="null"
                    v-model="clientes.rol"
                  />
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    :state="null"
                    v-model="clientes.email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    :state="null"
                    v-model="clientes.password"
                  />
                  
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <button class="btn btn-primary" @click="registro()">Registrar</button>
                <div class="buttons">
                  <router-link class="button is-light" to="/">Iniciar sesion</router-link>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";
import { global } from "../global";
import swal from "sweetalert";

import Cliente from "../models/Cliente.js";
export default {
  data() {
    return {
      url: global.url,
      user: null,
       body:null,
      cliente: new Cliente("", "", "", 0, "", "", "",""),
      clientes: new Cliente("", "", "", 0, "", "", "",""),
        nombre: '',
      apellido: '',
      email: '',
      password: '',
    
    };
  },
  props: {
    source: String
  },

  methods: {
     registro () {
 
      axios.post('http://localhost:5000/users/register', {
        nombre: this.clientes.nombre,
        apellido: this.clientes.apellido,
        email: this.clientes.email,
        password: this.clientes.password,
        dni: this.clientes.dni,
        telefono: this.clientes.telefono,
        direccion: this.clientes.direccion,
        rol: this.clientes.rol
      }).then(res=>{
        res.data;
       swal(
              "Cliente Creado",
              "el Cliente se ha creado correctamente :)",
              "success"
            );
            this.$router.push("/LastArticle")


      }).catch(err => {
        console.log(err)
         swal(
              "Direccion Existente",
              "Esa direccion ya existe prueba con otra ",
              "error"
            );
      })
    }
  }
  
};
</script>