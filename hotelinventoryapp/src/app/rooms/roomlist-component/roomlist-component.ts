import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../roomProperties';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-roomlist-component',
  imports: [NgClass, CommonModule],
  templateUrl: './roomlist-component.html',
  styleUrl: './roomlist-component.scss',
  // this is to optimize performance by reducing unnecessary change detection cycles
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// NgOnChanges lifecycle hook can be implemented to detect changes in @Input properties
export class RoomlistComponent implements OnChanges, OnDestroy {
  @Input() roomlist: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();
  @Input() title: string = '';

  onChildSelectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['title'].firstChange === false) {
    //   this.title = changes['title'].currentValue.toUpperCase();
    // }
  }

  ngOnDestroy(): void {
    // Cleanup logic here
    // E.g., unsubscribing from observables or detaching event listeners
    console.log('RoomlistComponent is destroyed');
  }
}
