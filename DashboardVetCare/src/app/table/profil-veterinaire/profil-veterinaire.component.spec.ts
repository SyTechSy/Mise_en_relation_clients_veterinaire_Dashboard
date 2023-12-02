import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilVeterinaireComponent } from './profil-veterinaire.component';

describe('ProfilVeterinaireComponent', () => {
  let component: ProfilVeterinaireComponent;
  let fixture: ComponentFixture<ProfilVeterinaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilVeterinaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilVeterinaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
