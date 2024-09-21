import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
=======
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
>>>>>>> eecf7b52b4a2d174365bda98b104d55a042e91a4

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
