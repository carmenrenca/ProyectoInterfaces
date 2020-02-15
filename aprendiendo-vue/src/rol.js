import jwtDecode from 'jwt-decode'

export var rol={
    rol:this.rol,

    data(){
        return {
           rol:""
        }
    }, mounted(){
        this.verificarol();
    },
    methods:{
        verificarol(){
     
            const token = localStorage.usertoken
            const decoded = jwtDecode(token)
            this.rol= decoded.identity.rol;
            console.log("ROLLL: "+this.rol)
            
            
                }
    }
};

