import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaPlantilla } from './matricula-plantilla';

describe('MatriculaPlantilla', () => {
  let component: MatriculaPlantilla;
  let fixture: ComponentFixture<MatriculaPlantilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaPlantilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaPlantilla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
