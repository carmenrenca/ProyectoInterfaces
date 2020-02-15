<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <br />
        <h2 class="subheader">Clientes</h2>

        <div id="search" class="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el cliente que buscas</p>
          <form @submit.prevent="getClienteBySearch(searchString)">
            <input type="text" name="search" v-model="searchString" />
            <input type="submit" name="submit" value="Buscar" class="btn" />
            <b-button variant="outline-primary" @click="getClientes()">Ver Todo</b-button>
          </form>
        </div>
        <div class="col-md-8"></div>
        <div class="table-responsive">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">DNI</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Rol</th>
                <th scope="col">Direccion</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in cliente" :key="cliente._id">
                <th scope="row">{{cliente.dni}}</th>
                <td>{{cliente.nombre}}</td>
                <td>{{cliente.apellido}}</td>
                <td>{{cliente.rol}}</td>
                <td>{{cliente.direccion}}</td>
                <td>{{cliente.telefono}}</td>
                <td>{{cliente.email}}</td>
                <td>
                  <router-link :to="{name:'cliente', params:{id: cliente._id}}">
                    <button type="button" class="btn btn-outline-primary">Editar</button>
                  </router-link>
                </td>
                <td>
                  <button
                    class="btn btn-outline-danger"
                    @click="deleteCliente(cliente._id)"
                  >Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import axios from "axios";
import { global } from "../global";
import Sidebar from "./sidebar.vue";
import swal from "sweetalert";
import Cliente from "../models/Cliente.js";

export default {
  name: "Cliente",

  components: {
    Sidebar
  },
  validations: {
    cliente: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellidos: {
        required,
        minLength: minLength(2)
      },
      telefono: {
        minLength: minLength(9)
      },
      email: {
        required
      }
    }
  },
  data() {
    return {
      myHeaders: new Headers(),

      url: global.url,
      submite: false,
      cliente: new Cliente("", "", "", 0, "", "", ""),
      clientes: new Cliente("", "", "", 0, "", "", ""),
      clientesList: []
    };
  },
  mounted() {
    this.myHeaders.append("authorization", `Bearer ${localStorage.token}`),
      this.GETCLIENTES();
  },
  methods: {
    mostrarusuario() {
      console.log(this.cliente);
      this.submite = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      alert("Validacion Pasada");
    },
    getClienteBySearch(searchString) {
      axios
        .get(this.url + "cliente-search/" + searchString)
        .then(res => {
          if (res.data.status == "success") {
            this.cliente = res.data.clientes;

            console.log(searchString);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getClientes() {
      axios
        .get(this.url + "clientes")
        .then(res => {
          if (res.data.status == "success") {
            this.cliente = res.data.clientes;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    save() {
      console.log(this.url);
      console.log(this.clientes);
      axios
        .post(this.url + "cliente/save", this.clientes)
        .then(res => {
          if (res.data.status == "success") {
            swal(
              "Cliente Creado",
              "el Cliente se ha creado correctamente :)",
              "success"
            );
            this.clientes = res.data.cliente;
            this.$router.push("/Blog");
          } else {
            swal(
              "Creación fallida",
              "El articulo no se ha creado bien :(",
              "error"
            );
          }
        })
        .catch(err => {
          console.log(err);
          console.log(this.cliente);
        });
    },

    GETCLIENTES() {
      return axios({
        method: "GET",
        url: this.url + "clientes/",
        headers: this.myHeaders
      })
        .then(res => {
          console.log(res);
          if (res.data.status == "success") {
            this.cliente = res.data.clientes;
            this.clientesList.push(res.data.clientes);
            console.log(this.clientesList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    deleteCliente(clienteId) {
      axios.delete(this.url + "clientes-delete/" + clienteId).then(res => {
        console.log(res);
        this.GETCLIENTES();
      });
    }
  }
};
</script>