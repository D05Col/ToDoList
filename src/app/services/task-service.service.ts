import { Injectable, signal, WritableSignal } from '@angular/core';
import { ToDoTask } from '../models/ToDoTask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: WritableSignal<ToDoTask[]> = signal([]);
  count: number = 0;

  Add(title: string): void{
    this.tasks.update(list => {
      let task = new ToDoTask(title, ++this.count);
      return [...list, task];
    });
  } 

  Remove(id: number): void {
    this.tasks.update(list => {
      return list.filter(item => item.id != id)
    })
  }

  GetTasks(): ToDoTask[] {
    return this.tasks(); 
  }

  constructor() {
   }
}
