import  swal  from 'sweetalert2';
import { PetService } from '../pet.service';
import { Pets } from '../pets';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-pets',
  templateUrl: './actualizar-pet.component.html',
  styleUrls: ['./actualizar-pet.component.css']
})
export class ActualizarPetComponent implements OnInit {

  id:number;
  pet: Pets = new Pets();
  constructor(private PetService:PetService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.PetService.obtenerMascotaPorId(this.id).subscribe(dato =>{
      this.pet = <Pets>dato;
    },error => console.log(error));
  }

  irAlaListaDePets(){
    this.router.navigate(['/pets']);

  }

  onSubmit(){
    this.PetService.actualizarMascota(this.id,this.pet).subscribe(dato => {
      this.irAlaListaDePets();
    },error => console.log(error));
  }
}
