"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //metodos para configurar la BD
    config() {
        //para decirle el puerto
        this.app.set('port', process.env.PORT || 3000);
    }
    // IMPORTANTISIMO
    routes() {
        this.app.use(cors_1.default);
        this.app.use(indexRoutes_1.default);
        this.app.use('/usuarios', usuariosRoutes_1.default);
    }
    start() {
        //escuchador
        this.app.listen(this.app.get('port'), () => console.log('puerto servidor esta seguro2020'));
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
    }
}
//ejecuramos la instancia
const server = new Server();
server.start();
