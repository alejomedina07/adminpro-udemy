import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: true}) textProgress: ElementRef;

  @Input() progreso: number = 70;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  onChanges( newValue: number ) {

    if ( newValue >=100) {
        this.progreso =  100 ;
    }else if (newValue <= 0 ) {
      this.progreso =  0 ;
    } else {
      this.progreso = newValue;
    }
    this.textProgress.nativeElement.value = this.progreso ;
    console.log( this.textProgress.nativeElement.value );
    this.cambioValor.emit( this.progreso );

    this.textProgress.nativeElement.focus();

  }

  cambiarValor( valor: number ) {
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
    this.textProgress.nativeElement.focus();
  }

}
