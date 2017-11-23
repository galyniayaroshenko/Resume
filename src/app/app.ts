import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss', '../styles/main.scss'],
  encapsulation: ViewEncapsulation.None
})

export class App {}
