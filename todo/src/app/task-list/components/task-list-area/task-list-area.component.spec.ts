import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListAreaComponent } from './task-list-area.component';

describe('TaskListAreaComponent', () => {
  let component: TaskListAreaComponent;
  let fixture: ComponentFixture<TaskListAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
