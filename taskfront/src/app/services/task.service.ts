import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ITask,
  ITaskTypeOption,
  ITypePercentage,
} from '../interface/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:9090/api/v1/task';

  constructor(private httpClient: HttpClient) {}

  getTaskList(): Observable<Array<ITask>> {
    return this.httpClient
      .get(`${this.apiUrl}`)
      .pipe(map((d: any) => d as Array<ITask>));
  }

  getTaskDone(): Observable<Array<ITask>> {
    return this.httpClient
      .get(`${this.apiUrl}/Done`)
      .pipe(map((d: any) => d as Array<ITask>));
  }

  postTaskList(task: ITask): Observable<ITask> {
    return this.httpClient
      .post<ITask>(`${this.apiUrl}`, task)
      .pipe(map((d: ITask) => d));
  }

  updateTask(task: ITask, id: string): Observable<ITask> {
    return this.httpClient
      .put<ITask>(`${this.apiUrl}/${id}`, task)
      .pipe(map((d: ITask) => d));
  }

  deleteTask(id: string | undefined) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  getTaskById(id: string | undefined): Observable<ITask> {
    return this.httpClient
      .get<ITask>(`${this.apiUrl}/${id}`)
      .pipe(map((d: ITask) => d));
  }


  getTypeOptions(): Array<ITaskTypeOption> {
    return [{ type: 'done' }, { type: 'todo' }, { type: 'pending' }];
  }
}
