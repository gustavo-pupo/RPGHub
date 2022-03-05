import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USMComponent } from './usm.component';

describe('USMComponent', () => {
  let component: USMComponent;
  let fixture: ComponentFixture<USMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
