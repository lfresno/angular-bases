import { Component } from '@angular/core';

//creamos un componente para el contador
//se le añade el decorador para que sea un componente y no una clase normal
@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`,
  //también se puede usar templateUrl. Template está bien para templates cortos (4 líneas)
})
export class CounterComponent{

  public counter:number = 10;

  //funcionalidades de los botones
  //por defecto los métodos son públicos, no hace falta especificarlo
  increaseBy(value:number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
