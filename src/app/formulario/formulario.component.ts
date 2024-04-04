import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'

  
})
export class FormularioComponent {

  // variable personaCreada y se asigna la importación EventEmitter
  @Output() personaCreada = new EventEmitter<Persona>();

  // Se idica que se crea un objeto de tipo Persona()

  // Se pasan estos valores correspondientes al formulario
  
  nombreInput : string = '';
  apellidoInput : string = "";

  agregarPersona(){
    // Se importa la clase de Persona
    let persona1 = new Persona (this.nombreInput,this.apellidoInput)

    this.personaCreada.emit(persona1);

    // metodo emit, permite propagar (persona1) informaciòn desde el componente hijo al compoente padre
  
}

}
