class Cliente{


    constructor(nombre, apellido, telefono , direccion,email,dni,password, rol){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.direccion=direccion;
        this.email=email;
        this.dni=dni;
        this.password=password;
        this.rol=rol;

    }
/**title: String,
content: String,
date : {type:Date, default: Date.now},
imagen: String */
}

export default Cliente;