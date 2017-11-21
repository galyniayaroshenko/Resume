import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import 'primeng/resources/primeng.min.css';
import 'primeui-bootstrap/dist/css/bootstrap.min.css';

// import './styles/main.scss';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
