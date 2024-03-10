export type Task = {
  id: string;
  title: string;
  description?: string;
  deadline?: Date;
  priority: TaskPriority;
  status: TaskStatus;
  assignees: string[];
}

export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'inProgress' | 'done';

export type TaskCard = Omit<Task, 'description'>


export type AppState = {
  tasks: Task[]; // Upload tasks from server (first endpoint)
  team: string[]; // Upload team from server (second endpoint). It's just list of specialists of company and user can select assigners
  loading: boolean; // for preloaders
  error: string | string[] | null // for errors catching and showing
}
