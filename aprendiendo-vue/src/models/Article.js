class Article{


    constructor(title, content, date , imagen, precio,cantidad,categoria, stock){
        this.title=title;
        this.content=content;
        this.date=null;
        this.imagen=imagen;
        this.precio=precio;
        this.cantidad=cantidad;
        this.categoria=categoria
        this.stock=stock;
    }
/**title: String,
content: String,
date : {type:Date, default: Date.now},
imagen: String */
}

export default Article;