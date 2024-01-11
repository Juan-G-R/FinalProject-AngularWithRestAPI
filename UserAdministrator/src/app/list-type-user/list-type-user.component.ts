import { Component, Type, ViewChild } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { TypeUser } from '../type-user';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-type-user',
  templateUrl: './list-type-user.component.html',
  styleUrls: ['./list-type-user.component.css']
})
export class ListTypeUserComponent {

  displayedColumns: string[] = ['id', 'type_user', 'Options'];

  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<TypeUser>(); // Reemplaza 'any' con el tipo de tus datos

  constructor(
    private userService: UserServiceService, private router: Router, private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.userService.findAllTypeUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  navigateTo(id:string, name:string):void {
    this.router.navigate([`/typeUsers/edit/${id}/${name}`]);
  }

  deleteTypeUser(id: number) {
    this.userService.openConfirmDialog("Are you sure you want to delete this? <br> This will delete all the users with this TypeUser","Yes","No" ,() => {
      this.userService.deleteTypeUsers(id);
      this.userService.openSnackBar("Deleted Type User with id " + id, "Close", 5000);
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
