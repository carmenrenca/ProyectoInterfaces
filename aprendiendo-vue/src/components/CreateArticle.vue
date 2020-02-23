<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Articulo</h1>
        <form class="mid-form" v-on:submit.prevent="save()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="article.title" />
            <div v-if="!$v.article.title">Este Campo Es Requerido</div>
          </div>

          <div class="form-group">
            <label for="precio">Precio</label>
            <input type="text" name="title" v-model="article.precio" />
          </div>

          <div class="form-group">
            <label for="stock">Stock</label>
            <input type="text" name="stock" v-model="article.stock" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Categoria</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="article.categoria"
              v-on:click.prevent="getCategori()"
            >
              <option v-for="item of this.categori" :key="item">{{item.title}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="content">Descripcion</label>
            <textarea name="content" v-model="article.content" />
            <div v-if="!$v.article.content">Este Campo Es Requerido</div>
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
import { global } from "../global";
//import Article from "../models/Article";
import axios from "axios";
import swal from "sweetalert";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      submitted: false,
      file: "",
      url: global.url,
      // article: new Article("", "", null, "", "","",""),
      article: {
        title: "",
        content: "",
        date: "",
        imagen: null,
        precio: "",
        cantidad: "",
        categoria: "",
        stock: ""
      },
      categori: [{}]
    };
  },
  validations: {
    article: {
      title: {
        required,
        minLength: minLength(2)
      },
      content: {
        required
      }
    }
  },
  mounted() {},
  methods: {
    save() {
      this.submitted == true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        swal(
          "Creación fallida",
          "El articulo no se ha creado bien :(",
          "error"
        );
        return false;
      } else {
        console.log(this.article.stock);
        axios
          .post(this.url + "save", this.article)
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
                var articleId = res.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then(res => {
                    if (res.data.article) {
                      swal(
                        "Articulo Creado",
                       res.data.article.message,
                        "success"
                      );
                      this.article = res.data.article;
                      this.$router.push("/Blog");
                    }
                  })
                  .catch(err => {
                    console.log(err);
                    this.$router.push("/Blog");
                  });
              } else {
                swal(
                  "Articulo Creado",
                  res.data.message,
                  "succes"
                );
                this.article = res.data.article;
                this.$router.push("/Blog");
              }
              console.log(res.data);
            } else {
              swal(
                "Creación fallida",
               res.data.message,
                "error"
              );
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getCategori() {
      console.log("ennntraa");
      axios.get(this.url + "getcategori/").then(res => {
        if (res.data.status == "success") {
          this.categori = res.data.Categoria;
          console.log(res.data.Categoria);
        } else {
          console.log(res.data.status);
        }
      });
    }
  }
};
</script>