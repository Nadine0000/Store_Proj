import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]

  
};
