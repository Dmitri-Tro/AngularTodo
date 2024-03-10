import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AppState, Task} from "app/models/task.model";
import {Store} from "@ngrx/store";
import {selectTasks} from "app/app-store/task.selectors";

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  constructor() {
  }

}
