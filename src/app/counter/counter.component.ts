import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  //Input es una informacion que provee el padre, el output al revés
  @Input() title!: string;

  ngOnInit(): void {
    //Tambien puede ser sessionStorage & se pone ! porque si no da error por si es nulo
    this.counter = sessionStorage.getItem('counter') != undefined ?
      parseInt(sessionStorage.getItem('counter')!) : 0;
    console.log('creando componente')
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());// Lo concatenamos porque no deja que sea un tipo number
  }
}
