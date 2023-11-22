import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pets } from '../pets';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-get-by-id-pet',
  templateUrl: './get-by-id-pet.component.html',
  styleUrl: './get-by-id-pet.component.css'
})
export class GetByIdPetComponent {

  pet:Pets;
  id:any;
  isPet = false;

  constructor(private petService:PetService){}

  ngOnInit():void{

  }

  obtenerMascota(){
    console.log(this.id)
    this.petService.obtenerMascota(this.id).subscribe({
      next:(res)=>{
        this.isPet=true;
        this.pet=res;
        console.log(res);
      },
      error:(error)=>{
        console.log('error' + error);
        this.isPet=false;
      }
    });
  }
}
