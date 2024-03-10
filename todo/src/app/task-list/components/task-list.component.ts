import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TaskCardComponent} from "app/task/components/task-card/task-card.component";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppState, Task} from "app/models/task.model";
import {CustomSelectComponent} from "app/common/components/custom-select/custom-select.component";
import {FiltrationSectionComponent} from "app/task-list/components/filtration-section/filtration-section.component";
import {MatList, MatListItem} from "@angular/material/list";
import {selectTasks, selectTeam} from "app/app-store/task.selectors";
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as TaskActions from "app/app-store/task.actions"
import {TaskListAreaComponent} from "app/task-list/components/task-list-area/task-list-area.component";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [
    NgForOf,
    TaskCardComponent,
    RouterOutlet,
    FormsModule,
    NgIf,
    CustomSelectComponent,
    FiltrationSectionComponent,
    MatListItem,
    MatList,
    AsyncPipe,
    TaskListAreaComponent
  ],
  standalone: true
})
export class TaskListComponent implements OnInit {
  protected appState$: Observable<AppState> | undefined
  protected tasks$: Observable<Task[]> | undefined;
  protected team$: Observable<string[]> | undefined;
  protected text: string = '';
  constructor(private store: Store<AppState>) {
    this.appState$ = this.store.select(state => state)
    this.tasks$ = this.appState$.pipe(
      map(appState => appState.tasks)
    );
    // this.tasks$ = this.store.select(state => state.tasks);
    this.team$ = this.store.select(selectTeam)
  }

  ngOnInit() {

  }

  addTask(title: string) {
// add task on state
this.store.dispatch(TaskActions.addTask({title}))
  }

}
