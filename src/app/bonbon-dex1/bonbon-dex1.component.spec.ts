import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbonDEX1Component } from './bonbon-dex1.component';

describe('BonbonDEX1Component', () => {
  let component: BonbonDEX1Component;
  let fixture: ComponentFixture<BonbonDEX1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbonDEX1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbonDEX1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
