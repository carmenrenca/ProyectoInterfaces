class Evento{


    constructor(titulo, lugar, date , imagen,descripcion,enlace,maps){
        this.titulo=titulo;
        this.lugar=lugar;
        this.date=null;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.enlace=enlace;
        this.maps=maps;

    }
/**title: String,
content: String,
date : {type:Date, default: Date.now},
imagen: String */
}

export default Evento;