import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPlantaComponent } from './nueva-planta.component';

describe('NuevaPlantaComponent', () => {
  let component: NuevaPlantaComponent;
  let fixture: ComponentFixture<NuevaPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPlantaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
