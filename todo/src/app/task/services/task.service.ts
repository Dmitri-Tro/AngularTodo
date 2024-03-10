import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppState, Task} from "app/models/task.model";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private store: Store<AppState>) {

  }
  // getTaskById (taskId: string) {
  //   const index = store.findIndex(task => task.id === taskId);
  //     return store[index]
  // }
}
