import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onCharacterDeleted: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id:string): void {
    if (!id) return;
    this.onCharacterDeleted.emit(id);
  }
}
function uuid(): string {
  throw new Error('Function not implemented.');
}

