import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListTypeUserComponent } from './list-type-user/list-type-user.component';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path:"users/all",
    component: ListUsersComponent
  },
  {
    path:"users/edit/:id",
    component: UserFormComponent
  },
  {
    path:"users/edit/:id/:name/:last_name/:email/:type_user",
    component: UserFormComponent
  },
  {
    path:"typeUsers/all",
    component: ListTypeUserComponent
  },
  {
    path:"typeUsers/edit/:id",
    component: TypeUserFormComponent
  },
  {
    path:"typeUsers/edit/:id/:name",
    component: TypeUserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
