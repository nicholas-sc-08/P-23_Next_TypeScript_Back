import prisma from "../prisma/client";

export async function buscar_usuarios(){

    try {

        const usuarios = await prisma.usuarios.findMany();
        return usuarios;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error(`Erro ao buscar Usuarios`);
    };
};
