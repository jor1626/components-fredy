/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiltreReporteComponent } from './filtre-reporte.component';

describe('FiltreReporteComponent', () => {
  let component: FiltreReporteComponent;
  let fixture: ComponentFixture<FiltreReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
