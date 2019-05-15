import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TelaPrincipalService {
  linhaCarrosselInicial = [
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    }
  ]

  linhasCarrossel =[
    [
      {
        src: 'http://placehold.it/350x260',
        descricao: 'Some Text',
        preco: '$199.99'
      },
      {
        src: 'http://placehold.it/350x260',
        descricao: 'Some Text',
        preco: '$199.99'
      },
      {
        src: 'http://placehold.it/350x260',
        descricao: 'Some Text',
        preco: '$199.99'
      },
      {
        src: 'http://placehold.it/350x260',
        descricao: 'Some Text',
        preco: '$199.99'
      }
  ],
  [
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
    {
      src: 'http://placehold.it/350x260',
      descricao: 'Some Text',
      preco: '$199.99'
    },
  ]
  ]

  public getLinhaCarrosselInicial(): Array<Object> {
    return this.linhaCarrosselInicial;
  }


  public getLinhasCarrossel(): Array<Array<any>> {
    return this.linhasCarrossel;
  }
  
  constructor() {}
}
