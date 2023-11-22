import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pets} from "../pets";
import {PetService} from "../pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-pet',
  templateUrl: './registrar-pet.component.html',
  styleUrls: ['./registrar-pet.component.css']
})
export class RegistrarPetComponent implements OnInit{
  pet:Pets = new Pets();
  constructor(private petsService:PetService,private router:Router) {
  }

  savePet(){
    this.petsService.registrarMascota(this.pet).subscribe(dato=>{
      console.log(dato);
      this.goToListPet();
    },error => console.log(error));
  }
  goToListPet(){
    this.router.navigate(['/pet'])
  }
  ngOnInit(): void{

  }
  onSumbit(): void{
    this.savePet();
  }
}
