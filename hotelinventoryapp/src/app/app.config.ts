import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request-interceptor';
import { Init } from './init';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    provideAppInitializer(()=>{
      return inject(Init).init();
    }),
    provideHttpClient(withInterceptors([requestInterceptor])),
  ],
};
