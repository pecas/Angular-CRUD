/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LstClientesComponent } from './lst-clientes.component';

describe('LstClientesComponent', () => {
  let component: LstClientesComponent;
  let fixture: ComponentFixture<LstClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
