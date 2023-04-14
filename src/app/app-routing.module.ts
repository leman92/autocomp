import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutocompComponent} from "./autocomp/autocomp.component";

const routes: Routes = [
  {
    path:'',
    component: AutocompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
