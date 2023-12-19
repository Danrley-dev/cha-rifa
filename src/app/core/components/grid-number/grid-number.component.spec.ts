import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNumberComponent } from './grid-number.component';

describe('GridNumberComponent', () => {
  let component: GridNumberComponent;
  let fixture: ComponentFixture<GridNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
