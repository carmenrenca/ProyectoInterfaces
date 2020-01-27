<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Categoria</h1>
        <form class="mid-form" v-on:submit.prevent="save()">
          <div class="form-group">
            <label for="title">Nombre de la Categoría</label>
            <input type="text" name="title" v-model="categori.title" />
          </div>

          <div class="form-group">
           

            <label for="imagen">Imagen</label>
            <input type="file" id="file" ref="file" name="file0" @change="fileChange()" />
          </div>

          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./sidebar.vue";
import Categoria from '../models/Categori'
import { global } from "../global";

import axios from "axios";
import swal from 'sweetalert';
//import {required, minLength} from 'vuelidate/lib/validators';
export default {
  name: "CreateCategoria",
  components: {
    Sidebar
  },
  data() {
    return {
      file: "",
      url: global.url,
   
      categori: new Categoria("","",null)
    };
  },
  mounted() {},
  methods: {
 save() {
      console.log(this.categori);
      axios
        .post(this.url + "savecategori/", this.categori)
        .then(res => {
          if (res.data.status == "success") {
            if (
              this.file != null &&
              this.file != undefined &&
              this.file != ""
            ) {
              //subida del archivo, crep un formulario ficticio para poder guardat mi imagen
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);
                            console.log( res.data.Categoria+"idd");

              var categoriaID = res.data.Categoria._id;
              axios
                .post(this.url + "upload-imageCategori/" + categoriaID, formData)
                .then(res => {
                  if (res.data.Categoria) {
                    swal(
                      "Categoría Creada",
                      "La categoría  se ha creado correctamente :)",
                      "success"
                    );
                    this.categori = res.data.Categoria;
                    this.$router.push("/Blog");
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            } else {
            swal(
                      "Categoria Creada",
                      "La categoria se ha creado correctamente :)",
                      "succes"
                    );
              this.article = res.data.article;
              this.$router.push("/Blog");
            }
            console.log(res.data);
          }else{
            swal(
                      "Creación fallida",
                      "La categoria no se ha creado bien :(",
                      "error"
                    );

            
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
        getCategori(){
 console.log("ennntraa")
        axios.get(this.url+"getcategori/").then(res => {
        if (res.data.status == "success") {
          this.categori = res.data.Categoria;
          console.log( res.data.Categoria);
          
        }else{
          console.log(res.data.status)
        }
      });
    }
  }
 
  }

</script>