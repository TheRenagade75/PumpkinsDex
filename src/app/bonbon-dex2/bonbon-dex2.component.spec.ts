import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbonDEX2Component } from './bonbon-dex2.component';

describe('BonbonDEX2Component', () => {
  let component: BonbonDEX2Component;
  let fixture: ComponentFixture<BonbonDEX2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbonDEX2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbonDEX2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
