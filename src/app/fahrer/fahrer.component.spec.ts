import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrerComponent } from './fahrer.component';

describe('FahrerComponent', () => {
  let component: FahrerComponent;
  let fixture: ComponentFixture<FahrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahrerComponent]
    });
    fixture = TestBed.createComponent(FahrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
