import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerInputEvent, MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DatepickerComponent implements OnInit {
  @Input({required: true}) inputDate: Date | undefined;
  @Output() updateDate = new EventEmitter<Date>()

  date: Date | null = null;
  ngOnInit() {
    this.inputDate && (this.date = this.inputDate)
  }

  onDateChange(changedDate: MatDatepickerInputEvent<Date>) {
    this.date = changedDate.value
  }
  applyDate () {
if (this.date) {
  this.updateDate.emit(this.date)
}
  }
}
