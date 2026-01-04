import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment.development";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint: environment.apiEndpoint
};

// About Value Provider 
// Value provider is used to provide a simple value, object, or constant to the dependency injection system.
// It allows you to define a value that can be injected into components or services throughout your Angular application.
// In this case, we are providing an object of type AppConfig that contains the apiEndpoint property.
// This value can then be injected wherever needed using the APP_SERVICE_CONFIG injection token.

// This service is registered manually in providers array of app.config.ts file.