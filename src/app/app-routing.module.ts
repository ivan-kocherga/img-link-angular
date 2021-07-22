import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPhotoComponent} from "./add-photo/add-photo.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'add-photo', component: AddPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
