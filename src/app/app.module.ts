import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { Config } from './config';

import { AuthViewModule } from './views/auth/auth.view.module';
import { NotFoundViewModule } from './views/not-found/not-found.view.module';
import { ForbiddenViewModule } from './views/forbidden/forbidden.view.module';
import { UIKitViewModule } from './views/ui-kit/ui-kit.view.module';
import { HomeViewModule } from './views/home/home.view.module';

import { ObjectValidator } from './services/object-validator';
import { ResumeProvider } from './models/resume';
import { EntityProvider } from './models/entity';

import { HttpService } from './services/http';

import { App } from './app';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    routing,
    AuthViewModule,
    NotFoundViewModule,
    ForbiddenViewModule,
    UIKitViewModule,
    HomeViewModule
  ],
  declarations: [
    App
  ],
  providers: [
    ObjectValidator,
    ResumeProvider,
    EntityProvider,

    Config,
    HttpService
  ],
  bootstrap: [ App ]
})

export class AppModule { }
