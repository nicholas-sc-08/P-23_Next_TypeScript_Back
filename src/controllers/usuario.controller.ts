import * as userService from "../services/usuario.service";
import { usuario_schema } from "../services/usuario.validation";
import { usuario_update_schema } from "../services/usuario.validation";
import { IUsuario } from "../types/IUsuario.types";
import { Request } from "express";
import { Response } from "express";

export async function get_usuarios(req: Request, res: Response) {

    try {

        const usuarios = await userService.buscar_usuarios();

        if (!usuarios) {

            res.status(404).json({ message: `Usuarios não encontrados!` });
        } else {

            res.status(200).json(usuarios);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function get_usuario_id(req: Request, res: Response) {

    try {

        const { id } = req.params;

        const usuario = await userService.buscar_usuario_id(Number(id));

        if (!usuario) {

            res.status(404).json({ message: `Usuario não encontrado!` });
        } else {

            res.status(200).json(usuario);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function post_usuario(req: Request, res: Response) {

    try {

        const data = req.body;
        const usuario_validado = usuario_schema.parse(data);

        if(usuario_validado) {

            const resposta = await userService.cadastrar_usuario(usuario_validado);
            res.status(201).json(resposta);
        
        } else {

            res.status(400).json({message: `Usuário inválido!`});
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};