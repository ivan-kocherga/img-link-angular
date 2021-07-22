import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GenerationLinkImgService} from "./core/services/generation-link-img.service";

@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    GenerationLinkImgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
