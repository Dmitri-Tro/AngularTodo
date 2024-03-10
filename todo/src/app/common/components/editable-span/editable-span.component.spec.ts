import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableSpanComponent } from 'app/common/components/editable-span/editable-span.component';

describe('EditableSpanComponent', () => {
  let component: EditableSpanComponent;
  let fixture: ComponentFixture<EditableSpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableSpanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
