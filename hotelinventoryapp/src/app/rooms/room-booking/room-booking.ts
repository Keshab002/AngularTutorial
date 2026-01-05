import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RoomService } from '../roomService/room-service';

@Component({
  selector: 'app-room-booking',
  imports: [AsyncPipe],
  templateUrl: './room-booking.html',
  styleUrl: './room-booking.scss',
})
export class RoomBooking {
  id$!: Observable<string>;

  constructor(private router: ActivatedRoute) {
    this.id$ = this.router.paramMap.pipe(map((params) => params.get('id') as string));
  }
  
}
