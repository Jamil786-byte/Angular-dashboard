import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';


// // Registering Syncfusion license key
// registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhBYVJwWmFZfV1gdV9CZ1ZRTGYuP1ZhSXxQdk1jUH9fdHNVTmBUUkY=');

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
