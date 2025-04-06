import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { ToDoTask } from '../models/ToDoTask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  public tasks: WritableSignal<ToDoTask[]> = signal(JSON.parse(localStorage.getItem("tasks") ?? "[]"));
  public date: WritableSignal<Date> = signal(JSON.parse(localStorage.getItem("date") ?? JSON.stringify(new Date())));
  
  count = 0;

  Add(title: string): void{
    this.tasks.update(list => {
      const task = new ToDoTask(title, ++this.count, this.date());
      return [...list, task];
    });
    
    localStorage.setItem("tasks", JSON.stringify(this.tasks()));
  } 

  Remove(id: number): void {
    this.tasks.update(list => {
      return list.filter(item => item.id != id);
    })
    localStorage.setItem("tasks", JSON.stringify(this.tasks()));
  }

  Complete(id: number): void {
    let item = this.tasks().find(item => item.id == id);
    if (item != null){
      item.completed = true;
    }
    else{
      console.log(`Could not find item with Id ${id} to complete`);
    }
    
    localStorage.setItem("tasks", JSON.stringify(this.tasks()));
  }

  constructor(){
    effect(() => {
      localStorage.setItem("date", JSON.stringify(this.date()));
    });
  }
}
