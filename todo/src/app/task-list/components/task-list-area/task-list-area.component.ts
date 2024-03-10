import {Component, Input, OnInit} from '@angular/core';
import {FiltrationSectionComponent} from "app/task-list/components/filtration-section/filtration-section.component";
import {NgForOf} from "@angular/common";
import {TaskCardComponent} from "app/task/components/task-card/task-card.component";
import {Task} from "app/models/task.model";

@Component({
  selector: 'app-task-list-area',
  standalone: true,
  imports: [
    FiltrationSectionComponent,
    NgForOf,
    TaskCardComponent
  ],
  templateUrl: './task-list-area.component.html',
  styleUrl: './task-list-area.component.scss'
})
export class TaskListAreaComponent implements OnInit {
  @Input() tasks: Task[] | null = null;
  @Input() team: string[] | null = null;
  protected filteredTasks: Task[] = []

  private currentSortColumn: string = '';
  private isSortAscending: boolean = true;

  ngOnInit() {
    if (this.tasks) {
      this.filteredTasks = this.tasks;
    }
    console.log(this.tasks)
  }

  setFilteredTasks(filterTasks: Task[]) {
    this.filteredTasks = filterTasks
  }

  sortTasks(column: keyof Task) {
    if (this.currentSortColumn === column) {
      this.isSortAscending = !this.isSortAscending;
    } else {
      this.currentSortColumn = column;
      this.isSortAscending = true;
    }

    this.filteredTasks.sort((a, b): number => {
      const valueA = this.getSortableValue(a, column);
      const valueB = this.getSortableValue(b, column);

      if (valueA && valueB) {
        if (valueA < valueB) {
          return this.isSortAscending ? -1 : 1;
        } else if (valueA > valueB) {
          return this.isSortAscending ? 1 : -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });
  }

  private getSortableValue(task: Task, column: keyof Task) {
    switch (column) {
      case 'status':
        return task.status;
      case 'title':
        return task.title;
      case 'assignees':
        return task.assignees.join(', ');
      case 'deadline':
        return task.deadline;
      case 'priority':
        return task.priority;
      default:
        return '';
    }
  }
}
