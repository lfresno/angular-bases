import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { //es una clase normal de TypeScript
  public title:string = 'Fernando os saluda';
  //se puede hacer referencia a estas propiedades desde el html por ejemplo

  //se ha movido la funcionalidad del counter a counter.component
}
