import { Component, signal, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from "./rooms/rooms";
import { CommonModule } from '@angular/common';
import { Container } from "./container/container";
import { Employee } from "./employee/employee";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Rooms, Container, Employee],
  templateUrl: './app.html',
  // Alternatively, you can use inline template
  // template: `<h1>Hello World</h1>
  // <p>I am Learing Angular</p> 
  // <router-outlet></router-outlet>`,
  styleUrl: './app.scss'
  // Alternatively, you can use inline styles
  // styles: [`
  //   h1 {
  //     color: rgba(241, 3, 3, 1);
  //     font-family: Lato, sans-serif;
  //     font-weight: normal;
  //   }
  // `],
})
export class App implements AfterViewInit {
  protected readonly title = signal('hotelinventoryapp');
  role : string = 'admin';

  // @ViewChild('admin', {read: ViewContainerRef}) adminContainer!: ViewContainerRef;

  ngAfterViewInit(): void {
    // const componentRef = this.adminContainer.createComponent(Rooms);
    // componentRef.instance.hotelName = "Dynamically Loaded Hotel";
  }
}
