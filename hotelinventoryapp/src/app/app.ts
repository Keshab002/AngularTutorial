import {
  Component,
  signal,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  OnInit,
  Optional,
  Inject,
} from '@angular/core';
import {
  RouterOutlet,
  RouterLinkWithHref,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { Rooms } from './rooms/rooms';
import { CommonModule } from '@angular/common';
import { Container } from './container/container';
import { Employee } from './employee/employee';
import { Logger } from './logger';
import { localstorageToken } from './localstorage.token';
import { Init } from './init';
import { NavigationComponent } from './navigation/navigation.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavigationComponent],
  // Rooms, Container, Employee],
  templateUrl: './app.html',
  // Alternatively, you can use inline template
  // template: `<h1>Hello World</h1>
  // <p>I am Learing Angular</p>
  // <router-outlet></router-outlet>`,
  styleUrl: './app.scss',
  // Alternatively, you can use inline styles
  // styles: [`
  //   h1 {
  //     color: rgba(241, 3, 3, 1);
  //     font-family: Lato, sans-serif;
  //     font-weight: normal;
  //   }
  // `],
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('hotelinventoryapp');
  role: string = 'admin';

  constructor(
    @Optional() private loggerService: Logger,
    @Inject(localstorageToken) private localstorage: Storage,
    private initService: Init,
    private router: Router
  ) {
    console.log(initService.config, 'App component - config from Init service');
  }
  // Using @Optional() to handle the case where Logger service might not be provided
  // This prevents Angular from throwing an error if the service is not found
  // Instead, loggerService will be null if Logger is not provided

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log('Navigation Started');
      });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Navigation Ended');
      });
    this.loggerService?.log('App component initialized');
    this.localstorage?.setItem('role', this.role);
    // Using the injected localstorageToken to access localStorage
    // we can use direct localStorage as well but using InjectionToken makes it more testable and flexible
  }

  // @ViewChild('admin', {read: ViewContainerRef}) adminContainer!: ViewContainerRef;

  ngAfterViewInit(): void {
    // const componentRef = this.adminContainer.createComponent(Rooms);
    // componentRef.instance.hotelName = "Dynamically Loaded Hotel";
  }
}
