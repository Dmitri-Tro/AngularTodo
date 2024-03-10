import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskListComponent} from "app/task-list/components/task-list.component";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, TaskListComponent, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
}
