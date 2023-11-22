import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ActualizarPetComponent} from './actualizar-pet.component';

describe('ActualizarPetComponent', () => {
  let component: ActualizarPetComponent;
  let fixture: ComponentFixture<ActualizarPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
