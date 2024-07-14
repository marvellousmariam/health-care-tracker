import { Component } from '@angular/core';
import { filterDropDown, userData } from '../../constants/data';
import { CommonModule, NgFor } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,NgFor,AutoCompleteModule,MatPaginatorModule],
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


length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
