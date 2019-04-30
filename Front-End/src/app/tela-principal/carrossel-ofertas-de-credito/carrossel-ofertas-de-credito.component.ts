import {
  Component,
  OnInit,
  Input
} from '@angular/core';




@Component({
  selector: 'app-carrossel-ofertas-de-credito',
  templateUrl: './carrossel-ofertas-de-credito.component.html',
  styleUrls: ['./carrossel-ofertas-de-credito.component.scss']
})
export class CarrosselOfertasDeCreditoComponent implements OnInit {
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



  constructor() {




  }

  ngOnInit() {}

}
