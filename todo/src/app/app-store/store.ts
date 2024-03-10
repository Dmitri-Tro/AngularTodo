import {AppState} from "app/models/task.model";

export const startState: AppState = {
  tasks: [
    {id: '1',
      title: 'Angular',
      description: 'use Angular in test-task',
      deadline: new Date(2024, 2, 7),
      priority: 'medium',
      status: 'todo',
      assignees: ['Dima']},
    {id: '2',
      title: 'NGRX',
      description: 'use NGRX in test-task',
      deadline: new Date(2024, 2, 11),
      priority: 'high',
      status: 'inProgress',
      assignees: ['Dima', 'Anna']},
    {id: '3',
      title: 'Angular material',
      description: 'use Angular material in test-task',
      deadline: new Date(2024, 2, 8),
      priority: 'low',
      status: 'done',
      assignees: ['Dima', 'Anna', 'Max']}
  ],
  team: [
    'Dima',
    'Anna',
    'Max'
  ],
  loading: false,
  error: null
}
