import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Hola mundo angular desde';//Si pones que sea pirvate el app.component.html da error
  // Se puede especificar los tipos pero no hace falta
  // Explicacion age: number = 34

  user: string[] = ['Pepe', 'María', 'Andrés']; //: string[] no es necesario
}
