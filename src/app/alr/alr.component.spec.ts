import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALRComponent } from './alr.component';

describe('ALRComponent', () => {
  let component: ALRComponent;
  let fixture: ComponentFixture<ALRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
