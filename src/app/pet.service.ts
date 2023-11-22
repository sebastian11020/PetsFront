import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pets } from "./pets";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url: string = "http://localhost:8080/api/v1/pets";

  constructor(private httpClient: HttpClient) { }

  getListOfPets(): Observable<Pets[]> {
    return this.httpClient.get<Pets[]>(this.url);
  }

  registrarMascota(pet: Pets): Observable<object> {
    return this.httpClient.post(this.url, pet);
  }
}
