import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
@Input()
  itemsIniciais 

@Input()
  itemsFinais 

@Input()
  id:string



  constructor() {}

  ngOnInit() {}

}
