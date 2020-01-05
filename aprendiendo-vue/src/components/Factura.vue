<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Factura</h2>
        <br />
        <div></div>
        <form>
          <h5>Cliente</h5>
          <div id="search" class="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el cliente que buscas</p>
            <form @submit.prevent="getClienteBySearch(searchString)">
              <input type="text" name="search" v-model="searchString" />
              <input type="submit" name="submit" value="Buscar" class="btn" />
            </form>
          </div>
          <br />
         XHTML
XHTML
<template>
    <div>
        Número de páginas: {{ numPages }}
        <pdf :src="src"></pdf>
    </div>
</template>

<template>
    <div>
        Número de páginas: {{ numPages }}
        <pdf :src="src"></pdf>
    </div>
</template>
XHTML
<pdf 
     v-for="i in numPages"
     :key="i"
     :src="src"
     :page="i"
     style="display: inline-block; width: 100%"
></pdf>



          <div class="row">
            <table class="table col-2">
              <tbody>
                <div v-for="clientes in clientes" :key="clientes._id">
                  <tr>
                    <th scope="row">{{clientes.dni}}</th>
                    <td>{{clientes.nombre}}</td>
                    <td>{{clientes.apellido}}</td>
                    <td>{{clientes.direccion}}</td>
                    <td>{{clientes.telefono}}</td>
                    <td>{{clientes.email}}</td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
        </form>
        <div>
          <b-button v-b-modal.modal-1>+Producto</b-button>

          <b-modal id="modal-1" size="xl" title="Articulos">
            <v-card class="mx-auto" max-width="300" tile></v-card>

            <v-row justify="center">
              <v-dialog v-model="dialog2" scrollable max-width="300px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                </template>
                <v-card>
                  <v-card-title>Select Country</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text style="height: 300px;">
                    <v-radio-group v-model="dialogm1" column>
                      <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                      <v-radio label="Bahrain" value="bahrain"></v-radio>
                      <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                      <v-radio label="Barbados" value="barbados"></v-radio>
                      <v-radio label="Belarus" value="belarus"></v-radio>
                      <v-radio label="Belgium" value="belgium"></v-radio>
                      <v-radio label="Belize" value="belize"></v-radio>
                      <v-radio label="Benin" value="benin"></v-radio>
                      <v-radio label="Bhutan" value="bhutan"></v-radio>
                      <v-radio label="Bolivia" value="bolivia"></v-radio>
                      <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                      <v-radio label="Botswana" value="botswana"></v-radio>
                      <v-radio label="Brazil" value="brazil"></v-radio>
                      <v-radio label="Brunei" value="brunei"></v-radio>
                      <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                      <v-radio label="Burkina Faso" value="burkina"></v-radio>
                      <v-radio label="Burma" value="burma"></v-radio>
                      <v-radio label="Burundi" value="burundi"></v-radio>
                    </v-radio-group>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <div id="search" class="sidebar-item">
              <h3>Buscador</h3>
              <p>Encuentra el articulo que buscas</p>
              <form @submit.prevent="getArticleBySearch(searchString2)">
                <input type="text" name="search"  />
                <input type="submit" name="submit" value="Buscar" class="btn" />
                <b-button variant="outline-primary">Ver Todo</b-button>
              </form>
            </div>
            <div class="article-item">
              <v-subheader>ARTICULOS</v-subheader>
             
          
<table class="table">
  <thead class="thead-dark">
    <tr>
   <th scope="col">Eliga el artículos</th>

      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio Total</th>
    </tr>
  </thead>
  <tbody>
 <tr>
      <td><select @click="calculos()"  id="artf" class="form-control col-9">
 <option  v-for="articles in articles" v-bind:key="articles">{{articles.title}} </option>

</select></td>
          
  <td><div class="col-6">  <input id="precio" type="text" class="form-control" >   </div></td>
 
  <td><div class="col-3"> <input id="cantidaddd" type="number"  class="form-control" @click="calculos()" v-model="cant"    ></div></td>
 <td><div class="col-6"> <input id="totalartiulo" class="form-control"></div></td>
  <td><button @click="añadirlineaventa()" type="button" class="btn btn-info">+</button></td>
  
     
     
    </tr>
  </tbody>
</table>
            </div>
            
          </b-modal>
        </div>
        <br />
        <br />
        <table class="table mt-9 table-striped" id="tablafactura">
          <thead class="thead-dark">
            <tr>
              <th scope="col">CODIGO</th>

              <th scope="col">NOMBRE ART.</th>
              <th scope="col">PRECIO UNIT.</th>
              <th scope="col">CANT.</th>
              <th scope="col">PRECIO TOTAL</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="lineaf">
            <tr v-for="checkedName in checkedNames" v-bind:key="checkedName">
             

            

              
          
            </tr>
          </tbody>
          <tfoot id="lineafooter">
            <td>
              <v-list-item-title>{{precioS}}</v-list-item-title>
            </td>
            <td></td>
            <td></td>
            <td>SUBTOTAL €</td>
            <td>
              <input id="subtotal" type="text" class="form-control col-5" v-model="subtotal" />
            </td>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>IVA</td>
              <td>
                <input id="iva" type="text" class="form-control col-5" v-model="iva" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>
                <input id="total" type="text" class="form-control col-5" v-model="total" />
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script >



import Sidebar from "./sidebar.vue";
import axios from "axios";
import { global } from "../global";
import Cliente from "../models/Cliente";
import Article from "../models/Article";
import form from "../models/form";

//import VModal from 'vue-js-modal'

export default {
  name: "Factura",
  components: {
    Sidebar
  },
  mounted() {
    this.getClientes(), this.getArticulos()
    
  },
  data() {
    return {

    
        headers: [
          {
          
            align: 'left',
            filterable: false,
            value: 'name',
          },
          { text: 'Titulo', value: 'title' },
          { text: 'Precio€', value: 'precio' },
          { text: 'Cantidad', value: 'cantidad' },
        
             { text: 'ADD', value: 'action', sortable: false },
        ],
      dialogm1: "",
factura:[],
      dialog: false,
      totalarticulo: 0,
      cant: 0,
      precio:"",
    calculo:0,
      checkedNames: [],
    
      subtotal: 0,
      iva: 21.0,
      total: 0,
      dense: false,
      fixedHeader: false,
      height: 300,
      precioS: 0,
      dialog2: false,
      showModal: false,
      searchString: null,
      url: global.url,
      cliente: {
        nombre: "",
        apellidos: "",
        telefono: "",
        direccion: "",
        email: "",
        dni: ""
      },

      clientes: new Cliente("", "", "", 0, "", "", ""),
      articles: new Article("", "", "", "", ""),
      form: new form("", "", "", 0)
    };
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
      console.log("entraa");
    },

    

    calculos() {
      console.log(this.cant)
  var cod = document.getElementById("artf").value;

console.log(cod);
this.checkedNames=this.articles;
var i;
for(i=0 ; i<this.checkedNames.length; i++){
if(this.checkedNames[i].title==cod){
 
  this.precio=this.checkedNames[i].precio;
  document.getElementById("precio").value=this.precio
  this.calculo = parseInt(this.checkedNames[i].precio)*this.cant

document.getElementById("totalartiulo").value=this.calculo


}
}


  
    },
    añadirlineaventa() {
        var cod = document.getElementById("artf").value;
  var fila="<tr><td>"+cod+"</td><td>"+this.precio+"</td><td>"+this.cant+"</td><td>"+this.calculo+"</td><td><button class='btn btn-danger' onclick='eliminarlineadefactura('+${codigo}')'>Eliminar</button></td><td><button class='btn btn-info'>Editar</button></td></tr>";
   var btn = document.createElement("TR");
    btn.innerHTML=fila;
     document.getElementById("lineaf").appendChild(btn);
   
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

    getClienteBySearch(searchString) {
      axios
        .get(this.url + "cliente-search/" + searchString)
        .then(res => {
          if (res.data.status == "success") {
            this.clientes = res.data.clientes;

            console.log(searchString);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getArticleBySearch(searchString2) {
      axios.get(this.url + "search/" + searchString2).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
    getArticulos() {
      console.log("ee");
      axios
        .get(this.url + "articles")
        .then(res => {
          if (res.data.status == "success") {
            this.articles = res.data.articles;
            console.log(this.articles);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

