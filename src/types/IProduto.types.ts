export interface IProduto {

    id: number,
    nome: string,  
    descricao: string,
    cor: string,
    quantidade: number
};

export interface ICreateProduto {

    nome: string,  
    descricao: string,
    cor: string,
    quantidade: number
};

export interface IUpdateProduto {

    nome?: string,  
    descricao?: string,
    cor?: string,
    quantidade?: number
};