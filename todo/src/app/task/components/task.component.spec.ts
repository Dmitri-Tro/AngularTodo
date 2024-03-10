import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from 'src/app/task/components/task.component';

describe('TaskDetailsComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent]
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
