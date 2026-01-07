import { Inject, Injectable, OnInit, signal } from '@angular/core';
import { RoomList } from '../roomProperties';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  getRoomList$!: Observable<RoomList[]>;
  // Room service logic will be implemented here
  // What does Service do?
  // Manages data and operations related to rooms within the application
  // Component should not be used for data management instead use Services

  // What is a Service?
  // A service is a class that provides specific functionality or data that can be shared across multiple components in an Angular application.
  // Services are typically used to encapsulate business logic, data retrieval, and other operations that are not directly related to the presentation layer.

  constructor(
    @Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
    private httpClient: HttpClient
  ) {
    this.getRoomList$ = this.httpClient
      .get<RoomList[]>('/api/roomssadas')
      .pipe(shareReplay(1));
    console.log('RoomService initialized with API Endpoint:', this.appConfig.apiEndpoint);
  }
  // @inject() decorator is used to inject dependencies into the constructor of a class
  // Injecting APP_SERVICE_CONFIG to access application configuration settings
  // This allows the service to use configuration values defined in the application, such as API endpoints
  // This promotes flexibility and maintainability by centralizing configuration management
  // This is a example of Value Provider being used in Angular Dependency Injection system

  getRoomList() {
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.httpClient.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.httpClient.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(roomNumber: string) {
    return this.httpClient.delete<RoomList[]>(`/api/rooms/${roomNumber}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
    });
    return this.httpClient.request(request);
  }
}
