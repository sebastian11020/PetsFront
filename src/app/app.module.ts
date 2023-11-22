// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import {RegistrarPetComponent} from "./registrar-pet/registrar-pet.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { GetByIdPetComponent } from './get-by-id-pet/get-by-id-pet.component';

@NgModule({
    declarations: [
        AppComponent,
        ListPetsComponent,
        RegistrarPetComponent,
        GetByIdPetComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
