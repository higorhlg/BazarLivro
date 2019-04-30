import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-carrossel-ofertas-de-credito',
  templateUrl: './carrossel-ofertas-de-credito.component.html',
  styleUrls: ['./carrossel-ofertas-de-credito.component.scss']
})
export class CarrosselOfertasDeCreditoComponent implements OnInit {

  linhaCarrosselInicial = [{
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },





  ];

  linhasCarrossel = [
    [
      {
        src: "http://placehold.it/350x260",
        descricao: "Some Text",
        preco: "$199.99"
      },
      {
        src: "http://placehold.it/350x260",
        descricao: "Some Text",
        preco: "$199.99"
      },
      {
        src: "http://placehold.it/350x260",
        descricao: "Some Text",
        preco: "$199.99"
      },
      {
        src: "http://placehold.it/350x260",
        descricao: "Some Text",
        preco: "$199.99"
      },
  ],
  [
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
    {
      src: "http://placehold.it/350x260",
      descricao: "Some Text",
      preco: "$199.99"
    },
]
];







  constructor() {




  }

  ngOnInit() {}

}
