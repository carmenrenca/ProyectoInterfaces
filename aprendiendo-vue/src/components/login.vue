<template>
  <v-app id="inspire">
    <v-content>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
                <button class="btn btn-primary" @click="onSubmit()">Entrar</button>
              </v-card-text>
              <v-card-actions>
                <v-spacer />

                <router-link class="button is-light" to="/registro">Registrame</router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script src="https://apis.google.com/js/platform.js" async defer></script>

<script >
import axios from "axios";
import { global } from "../global";
import swal from "sweetalert";
 import jwtDecode from 'jwt-decode'
//import EventBus from './EventBus'


export default {
  data() {
    return {
      searchString: null,
      url: global.url,
      user: null,
      email: "",
      password: "",
      rol:"",
      body: null
    };
  },
  props: {
    source: String
  },
  mounted() {},
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:5000/users/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data.token);

          this.email = "";
          this.password = "";
            localStorage.removeItem("rol");
const token = localStorage.usertoken
const decoded = jwtDecode(token)
this.rol= decoded.identity.rol;
console.log("ROLLL: "+this.rol)
localStorage.setItem("rol",this.rol);
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

          //  router.push({ name: 'Profile' })
        })
        .catch(err => {
          console.log(err);
        });
      // this.emitMethod()
    },
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  }
};
</script>