import { Component } from '@angular/core';
import { userData } from '../../constants/data';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent {
userdata=userData
}
