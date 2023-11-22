import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pets } from "../pets";
import { Router } from '@angular/router';
import {PetService} from "../pet.service";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css'] // Corregir el nombre de la propiedad a styleUrls
})
export class ListPetsComponent {
  pets: Pets[];

  constructor(private petService:PetService,private router:Router) { }

  ngOnInit(): void {
    this.pets = [
      { id: 1, name: "luna", category: "Gato" ,status:"Disponible"},
      { id: 2, name: "Sol", category: "Perro",status:"Disponible" }
    ];
  }

  actualizarPet(id:number){
    this.router.navigate(['actualizar-pet',id]);
  }



}
