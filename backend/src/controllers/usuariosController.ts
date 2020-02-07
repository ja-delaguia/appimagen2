import { Request, Response } from 'express'
import pool from '../database';
const jwt = require ('jsonwebtoken');
const bcryp = require('bcryptjs');
const secret_key = 'miclavesecreta1234';

class UsuariosController {
    index(req: Request, res: Response) {
        res.json({ 'message': 'Estas en el inicio' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({'message': 'El usuario ha sido creado'});

    }
    public async read(req: Request, res: Response) {
        //se declara una constante para guardar los usuarios
        const usuarios = await pool.query('SELECT * from usuarios', [req.body]);
        res.json(usuarios);
    }

    public async update(req: Request, res: Response) {
        await pool.query('UPDATE usuarios set ? WHERE id=?', [req.params.id]);
    }

    public async delete(req: Request, res: Response) {
        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
    }

    public async readone(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }

    public async login(req: Request, res:Response){

        // copia de lo que tenemos en el bogdy
        const copiaUsuario = {
            nombre: req.body.nombre,
            imagen: req.body.imagen
        }

        const usuarios = await pool.query('SELECT * from usuarios WHERE nombre=? AND imagen', [req.body.nombre, req.body.imagen]);
        res.json(usuarios);
        if(usuarios.length == 0){
            res.json({message:'Error al loguearse'});
        }else{
            const expiraEn = 24*60*60;
            // coger un metodo del jwt y definir un objeto. Envia el token al login
            const accesToken = jwt.sign({id: copiaUsuario.nombre},
                                        secret_key,);
            res.json(accesToken);
        }
    }
}
export const usuariosController = new UsuariosController;