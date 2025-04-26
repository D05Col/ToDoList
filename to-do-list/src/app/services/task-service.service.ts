import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { ToDoTask } from '../models/ToDoTask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  public activeTasks: WritableSignal<ToDoTask[]> = signal(JSON.parse(localStorage.getItem("activeTasks") ?? "[]"));
  public completedTasks: WritableSignal<ToDoTask[]> = signal(JSON.parse(localStorage.getItem("completedTasks") ?? "[]"));
  public date: WritableSignal<Date> = signal(JSON.parse(localStorage.getItem("date") ?? JSON.stringify(new Date())));
  
  count = 0;

  Add(title: string): void{
    this.activeTasks.update(list => {
      const task = new ToDoTask(title, ++this.count, this.date());
      return [...list, task];
    });
    
    localStorage.setItem("activeTasks", JSON.stringify(this.activeTasks()));
  } 

  Remove(id: number): void {
    this.activeTasks.update(list => {
      return list.filter(item => item.id != id);
    });
    this.completedTasks.update(list => {
      return list.filter(item => item.id != id);
    });
    localStorage.setItem("activeTasks", JSON.stringify(this.activeTasks()));
    localStorage.setItem("completedTasks", JSON.stringify(this.completedTasks()));
  }

  Complete(id: number): void {
    let item = this.activeTasks().find(item => item.id == id);
    if (item != null){
      item.completed = true;
      this.completedTasks.update(list => [...list, item]);
      this.activeTasks.update(list => list.filter(item => item.id != id));
    }
    else{
      console.log(`Could not find item with Id ${id} to complete`);
    }
    
    localStorage.setItem("activeTasks", JSON.stringify(this.activeTasks()));
    localStorage.setItem("completedTasks", JSON.stringify(this.completedTasks()));
  }

  constructor(){
    effect(() => {
      localStorage.setItem("date", JSON.stringify(this.date()));
    });
  }
}
