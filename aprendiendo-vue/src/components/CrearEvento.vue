<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Nuevo Evento</h1>
        <form class="mid-form" v-on:submit.prevent="save()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="evento.titulo" />
          </div>

          <div class="form-group">
            <label for="precio">Lugar</label>
            <input type="text" name="title" v-model="evento.lugar" />
          </div>
          

         <div class="form-group">
            <label for="stock">Fecha</label>
       <datetime type="datetime"  v-model="evento.date"></datetime>


          </div>
       
          <div class="form-group">
            <label for="content">Descripcion</label>
            <textarea name="content" v-model="evento.descripcion" />
          </div>
          <div class="form-group">
            <label for="precio">URL del Lugar</label>
            <input type="text" name="title" v-model="evento.maps"/>
          </div>
           <div class="form-group">
            <label for="precio">Enlaces de interes</label>
            <input type="text" name="title" v-model="evento.enlace"/>
          </div>
          <div class="form-group">
           

            <label for="imagen">Imagen</label>
            <input type="file" id="file" ref="file" name="file0" @change="fileChange()" />
          </div>

          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
     
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script src="vue.js"></script>
<script src="luxon.js"></script>
<script src="weekstart.js"></script>
<script src="vue-datetime.js"></script>
<script>

import { global } from "../global";
import Evento from "../models/Evento";
import axios from "axios";
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import swal from 'sweetalert';

//import {required, minLength} from 'vuelidate/lib/validators';

export default {
  name: "CreateEvento",
  components: {
 datetime: Datetime
   },
  data() {
    return {
      file: "",
      url: global.url,
      evento: new Evento("", "","", null, "","",""),
       categori:[{

       }]
    };
  },

  
  mounted() {},
  methods: {

 
    save() {
    
   console.log("%%%%%%%%%%%%%% "+this.evento.date)
      axios
        .post(this.url + "evento/save", this.evento)
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
              var eventoId = res.data.evento._id;
              axios
                .post(this.url + "evento/upload-image/" + eventoId, formData)
                .then(res => {
                  if (res.data.evento) {
                    swal(
                      "Evento Creado",
                      "el evento se ha creado correctamente :)",
                      "success"
                    );
                    this.evento = res.data.evento;
                    this.$router.push("/Blog");
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            } else {
            swal(
                      "Evento Creado",
                      "el evento se ha creado correctamente :)",
                      "succes"
                    );
              this.evento = res.data.evento;
              this.$router.push("/Blog");
            }
            console.log(res.data);
          }else{
            console.log(res.data);
            swal(
                      "Creación fallida",
                     res.data.message+" :(",
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

  }
 
};
</script>