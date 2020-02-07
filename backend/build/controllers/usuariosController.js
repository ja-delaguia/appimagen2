"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jwt = require('jsonwebtoken');
const bcryp = require('bcryptjs');
const secret_key = 'miclavesecreta1234';
class UsuariosController {
    index(req, res) {
        res.json({ 'message': 'Estas en el inicio' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ 'message': 'El usuario ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se declara una constante para guardar los usuarios
            const usuarios = yield database_1.default.query('SELECT * from usuarios', [req.body]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE usuarios set ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
            res.json(usuarios);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // copia de lo que tenemos en el bogdy
            const copiaUsuario = {
                nombre: req.body.nombre,
                imagen: req.body.imagen
            };
            const usuarios = yield database_1.default.query('SELECT * from usuarios WHERE nombre=? AND imagen', [req.body.nombre, req.body.imagen]);
            res.json(usuarios);
            if (usuarios.length == 0) {
                res.json({ message: 'Error al loguearse' });
            }
            else {
                const expiraEn = 24 * 60 * 60;
                // coger un metodo del jwt y definir un objeto. Envia el token al login
                const accesToken = jwt.sign({ id: copiaUsuario.nombre }, secret_key);
                res.json(accesToken);
            }
        });
    }
}
exports.usuariosController = new UsuariosController;
