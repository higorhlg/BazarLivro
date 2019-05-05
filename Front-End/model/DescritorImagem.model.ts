 export class DescritorImagem{


    public source:string;
    public textoAssociado:string;
    public porcentagemDesconto:number;




    constructor(source:string,
        textoAssociado:string,
        porcentagemDesconto:number){
        this.source=source
        this.textoAssociado=textoAssociado
        this.porcentagemDesconto=porcentagemDesconto

    }

}