import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState, Task} from "app/models/task.model";

const appState = (state: AppState) => state
export const selectTasks = createSelector(appState, state => state.tasks);

export const selectTeam = createSelector(appState, state => state.team);
