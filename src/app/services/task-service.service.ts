import { Injectable, signal, WritableSignal } from '@angular/core';
import { ToDoTask } from '../models/ToDoTask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  public tasks: WritableSignal<ToDoTask[]> = signal([]);
  count = 0;

  Add(title: string): void{
    this.tasks.update(list => {
      const task = new ToDoTask(title, ++this.count);
      return [...list, task];
    });
  } 

  Remove(id: number): void {
    this.tasks.update(list => {
      return list.filter(item => item.id != id)
    })
  }

  Complete(id: number): void {
    this.tasks().find(item => item.id == id)
  }
}
