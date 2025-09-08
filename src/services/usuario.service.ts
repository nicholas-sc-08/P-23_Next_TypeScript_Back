import prisma from "../prisma/client";
import { ICreateUsuario, IUsuario } from "../types/IUsuario.types";

export async function buscar_usuarios(): Promise<IUsuario[] | null> {

    try {

        const usuarios = await prisma.usuarios.findMany();
        return usuarios;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao buscar Usuarios`);
    };
};

export async function buscar_usuario_id(id: number): Promise<IUsuario | null> {

    try {

        const usuario = await prisma.usuarios.findUnique({ where: id });
        return usuario;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao buscar usuario pelo ID`);
    };
};

export async function cadastrar_usuario(data: ICreateUsuario): Promise<IUsuario | null>{

    try {

        const usuario = await prisma.usuarios.create(data);
        return usuario;
        
    } catch (erro: any) {
        
        console.error(erro);
        throw new Error(`Erro ao cadastrar o Usuario`);
    };
};