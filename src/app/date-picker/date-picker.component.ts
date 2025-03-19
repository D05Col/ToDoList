import { Component } from '@angular/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker'
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatHint } from '@angular/material/form-field';
@Component({
  selector: 'app-date-picker',
  imports: [MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule, MatDatepicker, MatHint, FormsModule],
  providers: [MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.sass'
})
export class DatePickerComponent {

}
