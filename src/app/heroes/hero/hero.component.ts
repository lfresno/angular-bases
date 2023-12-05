import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Iron Man';
  public age:number = 45;

  //los getters se ven como si fuesen propiedades
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  //métodos
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetHero():void {
    this.name = 'Iron man';
    this.age = 45;
  }

}
