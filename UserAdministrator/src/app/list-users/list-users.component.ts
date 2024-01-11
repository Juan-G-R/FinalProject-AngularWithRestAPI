import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user'
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router,private _liveAnnouncer: LiveAnnouncer) { }


  displayedColumns: string[] = ['type_user', 'first_name', 'last_name', 'email', 'Options'];
  users!: User[];

  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<User>(); // Reemplaza 'any' con el tipo de tus datos


  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  navigateTo(id: string, name: string, last_name: string, email: string, type_user: string): void { //Change to another web
    this.router.navigate([`/users/edit/${id}/${name}/${last_name}/${email}/${type_user}`]);
  }

  deleteTypeUser(id: number) {
    this.userService.openConfirmDialog("Are you sure you want to delete this user?", "Yes", "No", () => {
      this.userService.deleteUsers(id);
      this.userService.reloadComponent(false, this.router.url);
    });
  }

  announceChange(sortState:Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      this.dataSource.sort = this.sort;
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
      this.dataSource.sort = null;
    }
  }

}
