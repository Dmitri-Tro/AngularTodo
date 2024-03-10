import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgForOf, FormsModule],
})
export class CustomSelectComponent <T> {

  @Input({required: true}) options: SelectOptions<T>  | null = null;
  @Input({required: true}) selectedValue: T[] | T | null = null;
  @Input() isMultiple: boolean = false;
  @Output() updatedValue = new EventEmitter<T[]>();


  setNewValue() {
    if (this.selectedValue) {
      this.updatedValue.emit(Array.isArray(this.selectedValue) ? this.selectedValue : [this.selectedValue]);
    }
  }
}

export type SelectOptions<V> = { name: string, value: V }[];
