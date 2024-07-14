import { Component } from '@angular/core';
import { filterDropDown, userData } from '../../constants/data';
import { CommonModule, NgFor } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,NgFor,AutoCompleteModule,PaginatorModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent {
userdata=userData
minutes=this.userdata.map((user)=>{
  return user.workouts.map((y)=>{
    return y.minutes
  })
})
type=this.userdata.map((user)=>{
  return user.workouts.map((y)=>{
    return y.type
  })
})
filter=filterDropDown
}
