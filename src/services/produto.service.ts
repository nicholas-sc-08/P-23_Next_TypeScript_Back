import prisma from "../prisma/client";
import { ICreateProduto, IProduto } from "../types/IProduto.types";

export async function buscar_produtos(): Promise<IProduto[] | null> {

    try {

        const produtos = await prisma.produto.findMany();
        return produtos;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao buscar os produtos`);
    };
};

export async function buscar_produto(id: number): Promise<IProduto | null> {

    try {

        const produto = await prisma.produto.findUnique({where: {id: id}});
        return produto;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao encontrar produto pelo ID`);
    };
};

export async function criar_produto(info: ICreateProduto): Promise<IProduto |  null> {

    try {

        const produto = await prisma.produto.create({data: info});
        return produto;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao criar produto`);
    };
};