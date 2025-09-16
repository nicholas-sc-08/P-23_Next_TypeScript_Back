import { Request, Response } from "express";
import { produto_schema, produto_update_schema } from "../schemas/produto.schema";
import * as ServiceProduto from "../services/produto.service";

export async function get_produtos(req: Request, res: Response) {

    try {

        const produtos = await ServiceProduto.buscar_produtos();
        
        if(!produtos) {

            res.status(404).json({message: `Produtos não encontrados!`});
        } else {

            res.status(200).json(produtos);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function get_produto(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const produto = await ServiceProduto.buscar_produto(Number(id));
        
        if(!produto) {

            res.status(404).json({message: `Produto não encontrado!`});
        } else {

            res.status(200).json(produto);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function post_produto(req: Request, res: Response) {

    try {

        const data = req.body;
        const produto_valido = produto_schema.parse(data);

        if(!produto_valido) {

            res.status(401).json({message: `Dados inválidos para cadastro!`});
        } else {

            const produto = await ServiceProduto.criar_produto(produto_valido);
            res.status(201).json(produto);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message})
    };
};