import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyComponent } from './beauty.component';

describe('BeautyComponent', () => {
  let component: BeautyComponent;
  let fixture: ComponentFixture<BeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
