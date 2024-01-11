import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TypeUser } from './type-user';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar,
    public dialogo: MatDialog, private router: Router) {
    this.userUrl = "http://localhost:8080/usersAPI/";

  }

  //------------------USERS-------------------

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + "allUsers");
  }

  public addUser(user: User): User {
    this.http.post<User>(this.userUrl + "addUser", user, { responseType: 'text' as 'json' })
      .subscribe((response) => {
        this.openSnackBar(user.id == 0 ? "Created User with successfully" : "Updated User successfully" ,"Close", 5000);
        user = response as User;
      },
        (error) => {
          console.log(error);
          this.openConfirmDialog("ERROR, please check that type use exists", "Close", "", () => { });
          return EMPTY;
        })
    return user;
  }

  public deleteUsers(id: number): void {
    this.http.delete(this.userUrl + "deleteUser/" + id.toString())
      .subscribe(() => {
        this.openSnackBar("User was delted successfully", "Close", 5000);
      },
        error => {
          console.error('Error in user elimination:', error);
          this.openConfirmDialog("ERROR, There was an error deleting the user <br> Please contact the administrator", "Close", "", () => { });
        }
      );
  }

  //------------------TYPE USERS-------------------


  public findAllTypeUsers(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.userUrl + "allTypeUsers");
  }

  public addTypeUser(typeUser: TypeUser): TypeUser {
    this.http.post<TypeUser>(this.userUrl + "addTypeUser", typeUser, { responseType: 'text' as 'json' })
      .subscribe((response) => {
        this.openSnackBar(typeUser.id == 0 ? "Created Type User with name " + typeUser.type_user : "Updated Type User ", "Close", 5000);
        typeUser = response as TypeUser;
      },
        (error) => {
          console.log(error);
          this.openConfirmDialog("ERROR, Please contact the administrator", "Close", "", () => { });
          return EMPTY;
        })
    return typeUser;
  }



  public deleteTypeUsers(id: number): void {
    this.http.delete(this.userUrl + "deleteTypeUser/" + id.toString())
      .subscribe(
        () => {
          console.log('Eliminación exitosa');
        },
        error => {
          console.error('Error al eliminar:', error);
        }
      );
  }

  //------------------EXTRA-------------------

  openConfirmDialog(content: string, option1: string, option2: string, callback: () => void): void {
    this.dialogo
      .open(ConfirmDialogComponent, {
        data: { message: content, option1: option1, option2: option2 },
        hasBackdrop: false
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          callback();
        }
      });
  }

  openSnackBar(message: string, action: string, duration: number) {
    let config = new MatSnackBarConfig();
    config.duration = duration; //In miliseconds 5000 = 5 seconds
    this._snackBar.open(message, action, config);
  }

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    const url = self ? this.router.url : urlToNavigateTo;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/${url}`])
    })
  }
}
