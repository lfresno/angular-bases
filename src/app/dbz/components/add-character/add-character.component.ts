import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //evento al que se pueden suscribir otros componentes
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character ={  //lo inicializamos vacío
    name:'',
    power:0
  }

  emitCharacter():void {
    //debugger; //hace un breakpoint en ejecución y se puede ver en la consola
    //tmbn se pueden añadir breakpoints manualmente en el inspector de la app

    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    //se puede acortar esto como:
    /*this.character.name = '';
    this.character.power = 0;*/

    this.character= {name:'',power:0};
  }
}
