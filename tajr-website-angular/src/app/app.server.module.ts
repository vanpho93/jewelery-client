import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {BrowserTransferStateModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
