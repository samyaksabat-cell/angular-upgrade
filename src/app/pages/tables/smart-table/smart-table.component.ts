import { Component } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SimpleTableModule, Column } from '@simple-table/angular';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  age: number;
}

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
  standalone: true,
  imports: [SimpleTableModule],
})
export class SmartTableComponent {

  rows: User[] = [];
  temp: User[] = [];
  columns: Column[] = [
    { id: 'id', header: 'ID', width: 50 },
    { id: 'firstName', header: 'First Name' },
    { id: 'lastName', header: 'Last Name' },
    { id: 'username', header: 'Username' },
    { id: 'email', header: 'E-mail' },
    { id: 'age', header: 'Age', width: 60 },
    { id: 'actions', header: 'Actions', width: 80 },
  ];

  constructor(private service: SmartTableData) {
    this.rows = this.service.getData();
    this.temp = [...this.rows];
  }

  onDeleteConfirm(row: User): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.rows = this.rows.filter(r => r.id !== row.id);
    }
  }

  updateFilter(event: any): void {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || 
             d.lastName.toLowerCase().indexOf(val) !== -1 || 
             d.username.toLowerCase().indexOf(val) !== -1 || 
             d.email.toLowerCase().indexOf(val) !== -1 || 
             !val;
    });
    this.rows = temp;
  }
}