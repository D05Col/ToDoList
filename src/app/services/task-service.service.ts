import { Injectable, signal, WritableSignal } from '@angular/core';
import { ToDoTask } from '../models/ToDoTask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  public tasks: WritableSignal<ToDoTask[]>;
  private count: number;

  Add(title: string): void{
    this.tasks.update(list => {
      const task = new ToDoTask(title, ++this.count);
      return [...list, task];
    });
    localStorage.setItem("taskList", JSON.stringify(this.tasks));
    localStorage.setItem("count", JSON.stringify(this.count));
  } 

  Remove(id: number): void {
    this.tasks.update(list => {
      return list.filter(item => item.id != id);
    });
    localStorage.setItem("taskList", JSON.stringify(this.tasks));
    localStorage.setItem("count", JSON.stringify(this.count));
  }

  Complete(id: number): void {;
    this.tasks().find(item => item.id == id)
    localStorage.setItem("taskList", JSON.stringify(this.tasks));
    localStorage.setItem("count", JSON.stringify(this.count));
  }
  constructor(){
    this.tasks = signal(JSON.parse(localStorage.getItem("taskList") ?? "[]"));
    this.count = JSON.parse(localStorage.getItem("count") ?? "0");
  }
}
