import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

import {GenerationLinkImgService} from "./core/services/generation-link-img.service";

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ///
    ImageCropperModule
  ],
  providers: [
    GenerationLinkImgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
