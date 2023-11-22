import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pets } from "../pets";
import { Router } from '@angular/router';
import {PetService} from "../pet.service";

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent {
  pets: Pets[];

  constructor(private petService:PetService,private router:Router) { }

  ngOnInit(): void {
    this.getPets();
  }
  private getPets(){
    this.petService.getListOfPets().subscribe(dato=>{
      this.pets=dato;
    });
  }
  eliminarMascota(id:number){
    this.petService.eliminarMascota(id).subscribe(dato =>{
      this.getPets();
    });
  }

  actualizarPet(id:number){
    this.router.navigate(['actualizar-pet',id]);
  }



}
