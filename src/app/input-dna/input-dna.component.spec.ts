import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDnaComponent } from './input-dna.component';

describe('InputDnaComponent', () => {
  let component: InputDnaComponent;
  let fixture: ComponentFixture<InputDnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
