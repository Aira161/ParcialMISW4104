/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantasListComponent } from './plantas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { faker } from '@faker-js/faker';
import { Planta } from '../planta';



describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasListComponent ],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    for (let i = 0; i<3; i++){
      const planta = new Planta(
        faker.number.int(),
        faker.company.name(),
        faker.company.name(),
        faker.string.alphanumeric(),
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha()
      );
      component.plantas.push(planta)
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 4 <tr> rows', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });

  it('should have 12 <td> elements', () => {
    expect(debug.queryAll(By.css('td'))).toHaveSize(12);
  });
});
