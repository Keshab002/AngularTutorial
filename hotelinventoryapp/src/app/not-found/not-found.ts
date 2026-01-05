import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLinkWithHref, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  buttonCLicked(event: any){
    console.log('NotFound component button clicked');
  }
}
