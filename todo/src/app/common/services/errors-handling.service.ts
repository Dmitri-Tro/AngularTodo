import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandlingService {

  constructor() { }
}

function handleServerNetworkError(err: unknown): void {
  let errorMessage = "Some error occurred";

  if (axios.isAxiosError(err)) {
    errorMessage = err.response?.data?.message || err?.message || errorMessage;
  } else if (err instanceof Error) {
    errorMessage = `Native error: ${err.message}`;
  } else {
    errorMessage = JSON.stringify(err);
  }

  // dispatch(appActions.setAppError({ error: errorMessage }));
  // dispatch(appActions.setAppStatus({ status: "failed" }));
}
