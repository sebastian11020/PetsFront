import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pets } from "../pets";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css'] // Corregir el nombre de la propiedad a styleUrls
})
export class ListPetsComponent {
  pets: Pets[];

  constructor() {}

  ngOnInit(): void {
    this.pets = [
      { id: 1, name: "luna", category: "Gato" ,status:"Disponible"},
      { id: 2, name: "Sol", category: "Perro",status:"Disponible" }
    ];
  }
}
