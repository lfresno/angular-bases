import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Steven Universe'];

  public deletedHero?:string;

  //método
  removeLastHero():void {
    this.deletedHero = this.heroNames.pop(); //borra el último elemento y lo devuelve
  }
}
