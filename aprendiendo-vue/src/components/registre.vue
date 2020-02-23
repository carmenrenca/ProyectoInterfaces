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

                  <v-select
                    :items="items"
                    label="Tipo De Usuario"
                    name="DNI"
                    prepend-icon="person"
                    type="text"
                    v-model="clientes.rol"
                  ></v-select>

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

                <div class="row">
                  <div class="col-md-offset-2">
                    <button
                      class="btn btn-primary"
                      style="margin-left :20px"
                      @click="registro()"
                    >Registrar</button>
                    <router-link
                      class="button is-light"
                      style="margin-left :80px"
                      to="/"
                    >Iniciar sesion</router-link>

                    <div class="col-2"></div>

                    <div class="col-2"></div>

                    <div
                      v-if="this.loanding"
                      v-bind:style="styles"
                      class="spinner spinner--stretch"
                    >
                      <div v-bind:style="rectStyles" class="rect rect-1"></div>
                      <div v-bind:style="rectStyles" class="rect rect-2"></div>
                      <div v-bind:style="rectStyles" class="rect rect-3"></div>
                      <div v-bind:style="rectStyles" class="rect rect-4"></div>
                      <div v-bind:style="rectStyles" class="rect rect-5"></div>
                    </div>
                    <p style="color:red;">{{this.validacion}}</p>
                  </div>
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
 import jwtDecode from 'jwt-decode'

import Cliente from "../models/Cliente.js";
export default {
  props: {
    size: {
      default: "70px",
      source: String
    },

    background: {
      default: "#41b883"
    },
    duration: {
      default: "1.2s"
    }
  },

  computed: {
    rectStyles() {
      return {
        backgroundColor: this.background,
        animationDuration: this.duration
      };
    },
    styles() {
      return {
        width: this.size,
        height: this.size
      };
    }
  },

  data() {
    return {
      url: global.url,
      items: ["Administrador", "Cliente"],
      user: null,
      body: null,
      cliente: new Cliente("", "", "", "", "", "", ""),
      loanding: false,
      clientes: new Cliente("", "", "", "", "", "", ""),
      nombre: "",
      apellido: "",
      email: "",
      password: "",

      validacion: ""
    };
  },

  methods: {
    registro() {
      this.loanding = true;
      this.validacion = "";
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
          if (res.data.result == "Faltan datos por enviar") {
            this.validacion = res.data.result;
            this.loanding = false;
          } else if (res.data.result == "El Email no es correcto") {
            this.validacion = res.data.result;
            this.loanding = false;
          } else if (res.data.result == "El telefono no es correcto") {
            this.validacion = res.data.result;
            this.loanding = false;
          } else if (res.data.result == "El DNI no es correcto") {
            this.validacion = res.data.result;
            this.loanding = false;
          } else {
            this.loanding = false;
            console.log(res.data.token) + "TOKEN";

            localStorage.setItem("usertoken", res.data.token);

            this.email = "";
            this.password = "";
            localStorage.removeItem("rol");
            const token = localStorage.usertoken;
            const decoded = jwtDecode(token);
            this.rol = decoded.identity.rol;
            console.log("ROLLL: " + this.rol);
            localStorage.setItem("rol", this.rol);
            if (localStorage.getItem("usertoken") != "undefined") {
              this.$router.push("/LastArticle");
              console.log("entraa");
            } else {
              console.log("es undefine" + localStorage.getItem("usertoken"));
              swal({
                title: "Usuario Invalido",
                text: "Si no dispone de una cuenta de usuario registrese",
                icon: "warning",

                dangerMode: true
              });
            }

            swal(
              "Cliente Creado",
              "el Cliente se ha creado correctamente :)",
              "success"
            );
            this.$router.push("/LastArticle");
          }
        })
        .catch(err => {
          this.loanding = false;
          console.log(err);
          swal("Error", "Datos No Validos", "error");
        });
    }
  }
};
</script>