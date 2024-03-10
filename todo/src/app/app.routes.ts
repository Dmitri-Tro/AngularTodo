import { Routes } from '@angular/router';
import {TaskComponent} from "app/task/components/task.component";
import {TaskListComponent} from "app/task-list/components/task-list.component";
import {TaskCardComponent} from "app/task/components/task-card/task-card.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: "full"
  },
  {
    path: 'tasks',
    component: TaskListComponent,
    children: [
      {
        path: '',
        component: TaskCardComponent
      },
    ]
  },
  {
    path: `tasks/:taskId`,
    component: TaskComponent
  },
  {
    path: '**',
    redirectTo: '/tasks',
  },
];
