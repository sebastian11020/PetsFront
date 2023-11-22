// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsComponent } from './list-pets/list-pets.component';
import {RegistrarPetComponent} from "./registrar-pet/registrar-pet.component";

const routes: Routes = [
  { path: 'pet', component: ListPetsComponent },
  {path: ' ' ,redirectTo: ' pet ' ,pathMatch : 'full'},
  {path: 'registrar-pet', component:RegistrarPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
