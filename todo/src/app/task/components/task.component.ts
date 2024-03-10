import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {TaskService} from "app/task/services/task.service";
import {ReactiveFormsModule} from "@angular/forms";
import {EditableSpanComponent} from "app/common/components/editable-span/editable-span.component";
import {CustomSelectComponent} from "app/common/components/custom-select/custom-select.component";
import {DatepickerComponent} from "app/common/components/datepicker/datepicker.component";
import {TaskCardComponent} from "app/task/components/task-card/task-card.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [
    NgIf,
    NgForOf,
    ReactiveFormsModule,
    EditableSpanComponent,
    CustomSelectComponent,
    DatepickerComponent
  ],
  standalone: true
})
export class TaskComponent extends TaskCardComponent {
  private taskId: string | undefined

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    protected override router: Router
  ) {
    super(router)
  }

  override ngOnInit() {
    super.ngOnInit();

    this.route.params.subscribe(params => {
      this.taskId = params['taskId'];
      if (this.taskId) {
        // this.task = this.taskService.getTaskById(this.taskId)
      }
    });

    if (this.team) {
      this.teamOptions = this.team.map(person => ({name: person, value: person}));
    }
  }

  updateTaskDescription (newDescription: string) {
    // update task title in store
    console.log('updated Description: ', newDescription)
  }
}
