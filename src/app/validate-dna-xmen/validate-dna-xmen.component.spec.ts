import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDnaXmenComponent } from './validate-dna-xmen.component';

describe('ValidateDnaXmenComponent', () => {
  let component: ValidateDnaXmenComponent;
  let fixture: ComponentFixture<ValidateDnaXmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateDnaXmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateDnaXmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
