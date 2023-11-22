// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsComponent } from './list-pets/list-pets.component';
import {RegistrarPetComponent} from "./registrar-pet/registrar-pet.component";
import { GetByIdPetComponent } from './get-by-id-pet/get-by-id-pet.component';

const routes: Routes = [
  { path: 'pet', component: ListPetsComponent },
  {path: ' ' ,redirectTo: ' pet ' ,pathMatch : 'full'},
  {path: 'registrar-pet', component:RegistrarPetComponent},
  {path : 'get-by-id-pet', component:GetByIdPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
