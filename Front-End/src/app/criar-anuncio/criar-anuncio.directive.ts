import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCriarAnuncio]'
})
export class CriarAnuncioDirective {
  @Input()
    validado:boolean;
  
  constructor(er:ElementRef) {
      console.log(er);

   }

}
