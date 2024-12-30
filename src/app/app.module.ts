import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './Services/common.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
