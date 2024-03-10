import {createAction, props} from "@ngrx/store";

export const addTask = createAction('[Task] Add task', props<{ title: string }>())
