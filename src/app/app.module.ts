import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { Config } from './config';

import { DeclarationsModule } from './declarations';

import { AuthViewModule } from './views/auth/auth.view.module';
import { ForbiddenViewModule } from './views/forbidden/forbidden.view.module';
import { HomeViewModule } from './views/home/home.view.module';
import { NotFoundViewModule } from './views/not-found/not-found.view.module';
import { UIKitViewModule } from './views/ui-kit/ui-kit.view.module';

import { ObjectValidator } from './services/object-validator';

import { AuthService } from './services/auth';
import { PermissionsService } from './services/permissions';
import { HttpService } from './services/http';

import { AuthGuard } from './guards/auth';
import { PermissionsGuard } from './guards/permissions';

import { App } from './app';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    routing,
    AuthViewModule,
    DeclarationsModule,
    ForbiddenViewModule,
    HomeViewModule,
    NotFoundViewModule,
    UIKitViewModule
  ],
  declarations: [
    App
  ],
  providers: [
    ObjectValidator,

    AuthGuard,
    PermissionsGuard,

    Config,
    AuthService,
    HttpService,
    PermissionsService
  ],
  bootstrap: [ App ]
})

export class AppModule { }
