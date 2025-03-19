import { Component } from '@angular/core';
import { TaskServiceService } from './services/task-service.service';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TitleInputComponent } from './title-input/title-input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePickerComponent, TaskListComponent, TitleInputComponent],
  providers: [TaskServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'to-do-list';
}
