import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { TypeUser } from '../type-user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent {
  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  id = 0;
  name!: string;
  typeUser = new TypeUser();
  resTypeUser!: TypeUser;
  titleText = "New Type User"; 
  buttonText = "Add new Type User";
  inputPlaceholder = "Type User name"
  update = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      if (params.id != 0) {
        this.id = params.id;
        this.titleText = "Edit Type User"
        this.buttonText = "Edit Type User";
        this.inputPlaceholder = params.name;
      }
    })
  }

  add_updateTypeUser() {

    this.typeUser.id = this.id;
    this.typeUser.type_user = this.name;

    this.userService.openConfirmDialog(this.typeUser.id == 0 ? "Are you sure you want to create the User?" : "Are you sure you want to update the User?", "Yes", "No", () => {
      this.userService.addTypeUser(this.typeUser);
      this.userService.reloadComponent(false, this.router.url);
    });
  }




}
