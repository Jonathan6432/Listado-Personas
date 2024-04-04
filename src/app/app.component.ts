import { Component } from '@angular/core';
import { Persona } from './persona-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de personas ( comunicaciòn entre componentes';

  personas:Persona[] =
  [new Persona('Danna','Cordoba'),
  new Persona('Isabella','Ceballos'),
  new Persona('Jonathan','Coroba'),
]
// -----------------------------------------
//   nombreInput : string = '';
//   apellidoInput : string = "";

//   agregarPersona(){
//     let persona1 = new Persona (this.nombreInput,this.apellidoInput)

//     this.personas.push(persona1)

// }

// Se envian estos valores al componente hijo (formulario)
// ------------------------------------------

// En la variable persona recibimos el objeto persona para agregar 
personaAgregada(persona:Persona){
  this.personas.push(persona)

}

}