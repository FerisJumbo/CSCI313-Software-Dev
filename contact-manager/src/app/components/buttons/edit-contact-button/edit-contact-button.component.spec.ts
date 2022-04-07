import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactButtonComponent } from './edit-contact-button.component';

describe('EditContactButtonComponent', () => {
  let component: EditContactButtonComponent;
  let fixture: ComponentFixture<EditContactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContactButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
