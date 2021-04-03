import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDtailsComponent } from './edit-dtails.component';

describe('EditDtailsComponent', () => {
  let component: EditDtailsComponent;
  let fixture: ComponentFixture<EditDtailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDtailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
