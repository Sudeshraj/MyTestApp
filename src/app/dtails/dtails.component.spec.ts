import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailsComponent } from './dtails.component';

describe('DtailsComponent', () => {
  let component: DtailsComponent;
  let fixture: ComponentFixture<DtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
