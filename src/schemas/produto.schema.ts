import z from "zod";

export const produto_schema = z.object({

    nome: z.string(),
    descricao: z.string(),
    cor: z.string(),
    quantidade: z.number().int()
});

export const produto_update_schema = produto_schema.partial();