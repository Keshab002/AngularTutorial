import {
  ApplicationConfig,
  ErrorHandler,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request-interceptor';
import { Init } from './init';
import { GlobalErrorHandler } from './errorhandler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter([...routes]),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideAppInitializer(() => {
      return inject(Init).init();
    }),
    provideHttpClient(withInterceptors([requestInterceptor])),
  ],
};
