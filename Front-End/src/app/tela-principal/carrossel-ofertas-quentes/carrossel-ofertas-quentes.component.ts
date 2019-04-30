import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel-ofertas-quentes',
  templateUrl: './carrossel-ofertas-quentes.component.html',
  styleUrls: ['./carrossel-ofertas-quentes.component.scss']
})
export class CarrosselOfertasQuentesComponent implements OnInit {
  linhaCarrosselInicial = [{
    src: "../../../assets/img/1.png",
    descricao: "Harry Porco",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/3.png",
    descricao: "A corna",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/1.png",
    descricao: "Harry Porco",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/3.png",
    descricao: "A corna",
    preco: "R$199.99"
  },





]



linhasCarrossel =[
  [{
    src: "../../../assets/img/1.png",
    descricao: "Harry Porco",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/3.png",
    descricao: "A corna",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/1.png",
    descricao: "Harry Porco",
    preco: "R$199.99"
  },
  {
    src: "../../../assets/img/3.png",
    descricao: "A corna",
    preco: "R$199.99"
  },





],
[{
  src: "../../../assets/img/1.png",
  descricao: "Harry Porco",
  preco: "R$199.99"
},
{
  src: "../../../assets/img/3.png",
  descricao: "A corna",
  preco: "R$199.99"
},
{
  src: "../../../assets/img/1.png",
  descricao: "Harry Porco",
  preco: "R$199.99"
},
{
  src: "../../../assets/img/3.png",
  descricao: "A corna",
  preco: "R$199.99"
},





]
]



  constructor() { }

  ngOnInit() {
  }

}
