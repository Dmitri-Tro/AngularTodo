import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrationSectionComponent } from './filtration-section.component';

describe('FiltrationSectionComponent', () => {
  let component: FiltrationSectionComponent;
  let fixture: ComponentFixture<FiltrationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltrationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
