import { Component } from '@angular/core';
import { workOutType } from '../../constants/data';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.sass'
})
export class UserFormComponent {
workout=workOutType
}
