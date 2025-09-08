import { z } from "zod";

export const usuario_schema = z.object({

    nome: z.string(),
    email: z.string(),
    senha: z.string()
});

export const usuario_update_schema = usuario_schema.partial();