import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  
  constructor(private router: Router, private authService: AuthService, private carrinhoService: CarrinhoService) { }
  
  itensCarrinho = this.carrinhoService.contarItens()
  ngOnInit() {
  }

  logOut(){
    this.carrinhoService.delCookie()
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

}
