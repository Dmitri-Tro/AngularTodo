import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Task} from "app/models/task.model";
import {Router, RouterOutlet} from "@angular/router";
import {DatepickerComponent} from "app/common/components/datepicker/datepicker.component";
import {CustomSelectComponent, SelectOptions} from "app/common/components/custom-select/custom-select.component";
import {EditableSpanComponent} from "app/common/components/editable-span/editable-span.component";

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
  imports: [
    NgIf,
    NgForOf,
    RouterOutlet,
    DatepickerComponent,
    CustomSelectComponent,
    EditableSpanComponent,
  ]
})

export class TaskCardComponent implements OnInit {
  @Input() task: Task | null = null;
  @Input() team: string[] | null = null;
  protected deadline: string | null = null;
  protected taskStatusOptions: SelectOptions<string> = [
    {name: 'Todo', value: 'todo'},
    {name: 'In progress', value: 'inProgress'},
    {name: 'Done', value: 'done'}
  ];

  protected taskPriorityOptions: SelectOptions<string> = [
    {name: 'Low', value: 'low'},
    {name: 'Medium', value: 'medium'},
    {name: 'High', value: 'high'}
  ];
  protected teamOptions: SelectOptions<string> | null = null

  constructor(
    protected router: Router,
  ) {
  }

  ngOnInit() {
    if (this.task && this.task.deadline) {
      this.deadline = this.task.deadline.toLocaleDateString('en-GB');
    }
    if (this.team) {
      this.teamOptions = this.team.map(person => ({name: person, value: person}));
    }
  }

  showTaskPage(taskId: string) {
    this.router.navigate(['/tasks', taskId]);
  }

  updateTaskStatus(status: string[]) {
    // update task deadline in store
    console.log('updated Status: ', status)
  }

  updateTaskTitle(newTitle: string) {
    // update task title in store
    console.log('updated Title: ', newTitle)
  }

  updateTaskPriority(priority: string[]) {
    // update task deadline in store
    console.log('updated Priority: ', priority)
  }

  updateTaskDeadline(date: Date) {
    // update task deadline in store
    console.log('updated deadline: ', date)
  }
  updateTaskAssigners(assigners: string[]) {
    // update task deadline in store
    console.log('updated assigners: ', assigners)
  }

  deleteTask() {
    // delete task in store
    console.log('delete task: ', this.task?.id)
  }
}

