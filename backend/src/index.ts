

import express, { Application } from "express";
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import morgan from 'morgan';
import cors from 'cors';



class Server{
    public app:Application;
   
    constructor(){
        this.app = express();
        
        this.config();
        this.routes();
    }
    //metodos para configurar la BD
    config():void{
        //para decirle el puerto
        this.app.set('port',process.env.PORT||3000);
    }
    // IMPORTANTISIMO
    routes():void{
        this.app.use(cors);
        this.app.use(indexRoutes);
        this.app.use('/usuarios',usuariosRoutes);
    }
    start():void{
        //escuchador
        this.app.listen(this.app.get('port'),()=>console.log('puerto servidor esta seguro2020'));
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }
}
//ejecuramos la instancia
const server = new Server();
server.start();



