import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicGetSetterComponent } from './magic-get-setter.component';

describe('MagicGetSetterComponent', () => {
  let component: MagicGetSetterComponent;
  let fixture: ComponentFixture<MagicGetSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicGetSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicGetSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
