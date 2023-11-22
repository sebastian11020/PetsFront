import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPetComponent } from './registrar-pet.component';

describe('RegistrarPetComponent', () => {
  let component: RegistrarPetComponent;
  let fixture: ComponentFixture<RegistrarPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
