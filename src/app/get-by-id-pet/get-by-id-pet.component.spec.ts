import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdPetComponent } from './get-by-id-pet.component';

describe('GetByIdPetComponent', () => {
  let component: GetByIdPetComponent;
  let fixture: ComponentFixture<GetByIdPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByIdPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetByIdPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
