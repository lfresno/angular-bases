import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //inyeccion de dependencias
  //habilita todo lo que haya en el servicio en la main page
  constructor(private dbzService: DbzService){ };


  //metodos para poder usar cada una de las funciones necesarias en el servicio
  //el servicio se ocupa de gestionar intternamente
  get characters(): Character[] {
    //aquí sí se puede usar dbzService porque estamos dentro de la clase
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string ):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void {
    this.dbzService.addCharacter(character);
  }

}
