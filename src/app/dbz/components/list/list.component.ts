import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [];

  //onDelete emite el índice
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    //TODO: Emitir el ID del personaje
    if(!id) return;

    this.onDelete.emit(id);
  }

 }
