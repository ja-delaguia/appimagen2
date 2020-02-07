"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuariosController {
    index(req, res) {
        res.json({ 'message': 'Estas en el inicio' });
    }
}
exports.usuariosController = new UsuariosController;
