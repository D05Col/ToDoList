import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TitleInputComponent } from './title-input/title-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from './services/task-service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePickerComponent, TitleInputComponent, TaskListComponent, FormsModule],
  providers: [TaskServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'to-do-list';
}
