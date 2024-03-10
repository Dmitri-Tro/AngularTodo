import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Task} from "app/models/task.model";
import {DatepickerComponent} from "app/common/components/datepicker/datepicker.component";
import {CustomSelectComponent} from "app/common/components/custom-select/custom-select.component";

@Component({
  selector: 'app-filtration-section',
  standalone: true,
  imports: [
    FormsModule,
    DatepickerComponent,
    CustomSelectComponent
  ],
  templateUrl: './filtration-section.component.html',
  styleUrl: './filtration-section.component.scss'
})
export class FiltrationSectionComponent {
  @Input() tasks: Task[] | null = null;
  @Output() filterTasks = new EventEmitter<Task[]>();
  filteredTasks: Task[] | null = this.tasks;
  filterStatus: string | null = null;
  filterAssignee: string | null = null;
  filterDeadline: Date | null = null;
filterByStatusOptions = [
  {name: 'All', value: ''},
  {name: 'Todo', value: 'todo'},
  {name: 'In progress', value: 'inProgress'},
  {name: 'Done', value: 'done'}
]
  setDeadlineFilter (date: Date) {
    this.filterDeadline = date
  }
  setStatusFilter(status: string) {
  this.filterStatus = status
  }
  applyFilters() {
    if (this.tasks) {
      this.filteredTasks = this.tasks.filter(task => {
        const statusMatch = !this.filterStatus || task.status === this.filterStatus;
        const assigneeMatch = !this.filterAssignee || task.assignees.includes(this.filterAssignee);
        const deadlineMatch = !this.filterDeadline || (task.deadline && task.deadline.toString()) === this.filterDeadline.toString();
        console.log(task.deadline)
        console.log(this.filterDeadline)
        return statusMatch && assigneeMatch && deadlineMatch;
      })
      this.filterTasks.emit(this.filteredTasks);
    }
  }

  resetFilters() {
    this.filterStatus = null;
    this.filterAssignee = null;
    this.filterDeadline = null;
    this.applyFilters();
  }
}
