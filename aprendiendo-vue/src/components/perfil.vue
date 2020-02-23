<template>

 <form class="col-md-5 center">

 <div class="row ">
         <div class="col-md-4"></div>
          <img src='../assets/user.png' alt="..." class="img-thumbnail whi col-md-5" height="100" width="100">

    
   </div>
      

  
     
  <div class="form-group row">
        <label  class="col-sm-2 col-form-label">Nombre</label>
    <div class="col-sm-10">
      <input type="text" v-model="nombre" id="staticName" >
    </div>

    <label for="staticApellido" class="col-sm-2 col-form-label">Apellido</label>
    <div class="col-sm-10">
      <input type="text" v-model="apellido"  id="staticApellido" >
    </div>
     <label for="staticDireccion" class="col-sm-2 col-form-label">Dirección</label>
    <div class="col-sm-10">
      <input type="text" v-model="direccion"  id="staticDireccion" >
    </div>
      <label for="staticDNI" class="col-sm-2 col-form-label">Roles</label>
    <div class="form-group col-sm-10">
    
    <select value="escribe tu nombre" v-model="rol" class="form-control" id="exampleFormControlSelect1">
         
      <option >Administrador</option>
      <option>Cliente</option>
    </select>
  </div>
      <label for="statictelefono" class="col-sm-2 col-form-label">Telefono</label>
    <div class="col-sm-10">
      <input type="text" v-model="telefono"   id="statictelefono" >
    </div>
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" v-model="email" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
  
    <div>   <button  type="button" class="btn btn-warning"  v-on:click="updateuser()">Modificar</button></div>
    <div class="col-md-1"></div>
  <div>   <button  type="button" class="btn btn-danger" v-on:click="deleteuser()" >Eliminar Cuenta</button></div>
    
  </div>
</form>

</template>
<script src="sweetalert2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<script>
import { global } from "../global";
import axios from "axios";
 import jwtDecode from 'jwt-decode'
import Swal from 'sweetalert2'


export default {
    name:'perfil',
   mounted() {
    this.clienteID = this.$route.params.id;
 this.tokendecode();
    this.getclientes(this.clienteID);
  },
    data() {
      const token = localStorage.usertoken
const decoded = jwtDecode(token);
    return {
      clienteID:'',
      nombre:'',
      apellido:'',
      dni:'',
      telefono:'',
      email:'',
      password:'',
      direccion:'',
      url: global.url ,
      id:'',
      rol:decoded.identity.rol
      
    };
  },
    methods:{

          deleteuser(){
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
     axios.delete(`http://localhost:5000/user/delete/${this.email}`)
        .then(res => {
      
        res.data;
           
        })
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
     localStorage.removeItem('usertoken');      
            
            setTimeout(() => {
              this.$router.push("/")
            }, 1500)
            
  }
})       
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
  updateuser(){
    console.log(this.nombre);
       console.log(this.email);
  axios.put(`http://localhost:5000/user/update/${this.dni}`,
       { nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        rol:this.rol,
        telefono: this.telefono,
        direccion: this.direccion,
   
       })
        .then(res => {
         swal(
              "Cliente Editado",
              "el Cliente se ha Modificado correctamente :)",
              "success"
            );
          console.log(res)
          this.cerrarsesion();
        })
        .catch(err => {
          console.log(err)
        })
  },
  tokendecode(){
    const token = localStorage.usertoken
const decoded = jwtDecode(token);
this.nombre= decoded.identity.nombre;
this.apellido= decoded.identity.apellido;
this.dni= decoded.identity.dni;
this.telefono= decoded.identity.telefono;
this.email= decoded.identity.email;
this.direccion=decoded.identity.direccion;
this.password= decoded.identity.password;
this.id=decoded.identity.id;

  },

    cerrarsesion(){
          localStorage.removeItem('usertoken');      
            
            setTimeout(() => {
              this.$router.push("/")
            }, 1500)
            
         }
    }

};
</script>