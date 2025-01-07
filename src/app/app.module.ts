import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './Services/common.service';
import { GetExampleComponent } from './Components/get-example/get-example.component';
import { PostExampleComponent } from './Components/post-example/post-example.component';
import { PutExampleComponent } from './Components/put-example/put-example.component';
import { PatchExampleComponent } from './Components/patch-example/patch-example.component';
import { DeleteExampleComponent } from './Components/delete-example/delete-example.component';
import { HeaderComponent } from './Shared/Components/header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GetExampleComponent, PostExampleComponent, PutExampleComponent, PatchExampleComponent, DeleteExampleComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
