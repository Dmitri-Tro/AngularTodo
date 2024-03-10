import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-editable-span',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './editable-span.component.html',
  styleUrl: './editable-span.component.scss'
})
export class EditableSpanComponent {
  @Input() text: string = '';
  @Output() updateText = new EventEmitter<string>();
  protected isEditMode: boolean = false;
  protected originalText: string = '';

  setNewText(text: string) {
    this.updateText.emit(text);
    this.setEditMode(false);
  }

  setEditMode(isEdit: boolean) {
    this.isEditMode = isEdit;
    if (isEdit) {
      this.originalText = this.text;
    } else {
      this.text = this.originalText;
    }
  }
}
