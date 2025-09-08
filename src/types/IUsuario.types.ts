export interface IUsuario {

    id: number,
    nome: string,
    email: string,
    senha: string
};

export interface ICreateUsuario {

    nome: string,
    email: string,
    senha: string
};

export interface IUpdateUsuario {

    nome?: string,
    email?: string,
    senha?: string
}