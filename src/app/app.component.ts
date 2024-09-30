import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Se importa el nuevo componente, abajo en imports también
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent], //El commmonModule lo he puesto para que funcione el ngFor
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Hola mundo angular desde VSC';//Si pones que sea pirvate el app.component.html da error
  // Se puede especificar los tipos pero no hace falta
  // Explicacion age: number = 34

  subtitle = 'Contador con estado de session'

  users: string[] = ['Pepe', 'María', 'Manuel'];  //: string[] no es necesario para especificar que es un array
  //users: string[] = []; para comprobar si funci0one el *ngIf de la tabla al estar el array vacío 
  /**
   * ESTO INICIALIZA LA VARIABLE COMO SI NO TUVIERA ALGO O COMO SI DIERA IGUAL
   *  users!: string[];
   * users?: string[];
   */

  visible: boolean = false;

  counter: number = 0;

  //Con esto se inicializa el contador de primeras
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!);
  }

  setVisible(): void {
    //Si visible es true se hace false y sino al revés
    this.visible = this.visible ? false : true;
    console.log('Hemos hecho click en setVisible');
  }

  setCounter(event: number): void {
    this.counter = event;
  }

}
