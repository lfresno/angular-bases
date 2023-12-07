import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
//v4 es una función que genera ids únicos
//se le cambia el nombre a uuid

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'  //el servicio hace un singleton en toda la app
})
export class DbzService {
  //en cualquier parte que tenga inyección a este servicio, tendrá la información actualizada que
  //se encuentra en el mismo.
  //la informción estaría centralizada aquí

  public characters:Character[] = [{
    id:uuid(),  //genera el id aleatorio
    name: 'Krilin',
    power:1000,
  },
  {
    id:uuid(),
    name:'Goku',
    power:9500
  },
  {
    id:uuid(),
    name:'Vegetta',
    power:2000
  }];

  addCharacter(character:Character ):void {

    const newCharacter : Character = {id:uuid(),...character}
    //...character = operador spread: recoge todas las propiedades de character

    this.characters.push(newCharacter);  //para insertar al final de la lista
    //this.characters.unshift(); //para añadir algo al principio
  }

  //escuchar y reccionar al evento onDelete
  //characters.splice
  /*onDeleteCharacter(index:number ):void {
    //borra un elemento en la posición Index
    this.characters.splice(index, 1);
  }*/

  deleteCharacterById(id:string ):void {
    this.characters = this.characters.filter(character => character.id != id);
  }

}
