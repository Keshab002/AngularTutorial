import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root',
// }
// Commented out to check Optional Decorator Injection in App.ts
)


export class Logger {
  log(message: string) {
    console.log(`[Logger]: ${message}`);
  }
}
