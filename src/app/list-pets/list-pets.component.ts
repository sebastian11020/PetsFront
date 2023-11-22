import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pets } from "../pets";
import {PetService} from "../pet.service";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent {
  pets: Pets[];

  constructor(private petService:PetService) {}

  ngOnInit(): void {
    this.getPets();
  }
  private getPets(){
    this.petService.getListOfPets().subscribe(dato=>{
      this.pets=dato;
    });
  }
}
