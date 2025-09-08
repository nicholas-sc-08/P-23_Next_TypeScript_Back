import prisma from "../prisma/client";
import { ICreateUsuario, IUpdateUsuario, IUsuario } from "../types/IUsuario.types";

export async function buscar_usuarios(): Promise<IUsuario[] | null> {

    try {

        const usuarios = await prisma.usuario.findMany();
        return usuarios;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao buscar Usuarios`);
    };
};

export async function buscar_usuario_id(id: number): Promise<IUsuario | null> {

    try {

        const usuario = await prisma.usuario.findUnique({ where: id });
        return usuario;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao buscar usuario pelo ID`);
    };
};

export async function cadastrar_usuario(data: ICreateUsuario): Promise<IUsuario | null>{

    try {

        const usuario = await prisma.usuario.create(data);
        return usuario;
        
    } catch (erro: any) {
        
        console.error(erro);
        throw new Error(`Erro ao cadastrar o Usuario`);
    };
};

export async function atualizar_usuario(id: string, data: IUpdateUsuario): Promise<IUsuario | null>{

    try {

        const usuario = await prisma.usuario.update({where: id, data: data});
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error(`Erro ao atualizar o Usuário!`);
    };
};

export async function deletar_usuario(id: number) : Promise<void> {

    try {

        const usuario = await prisma.usuario.delete({where: id});

    } catch (erro: any) {
      
        console.error(erro);
        throw new Error(`Erro ao deletar o Usuário!`);
    };
};