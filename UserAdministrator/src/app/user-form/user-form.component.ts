import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  [x: string]: any;
  constructor(
    private userService: UserServiceService, 
    private route: ActivatedRoute, 
    private router: Router) {}

  user = new User();
  id = 0;
  name!: string;
  first_name!: string;
  email!: string;
  type_user!: string;

  titleText = "New User";
  buttonText = "Add new User";
  namePlaceholder = "User name";
  lastNamePlaceholder = "Last name";
  emailPlaceholder = "Email";
  typeUserPlaceholder = "Type user";


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      if (params.id != 0) {
        this.id = params.id;
        this.titleText = "Edit Type User"
        this.buttonText = "Edit Type User";
        this.namePlaceholder = params.name;
        this.lastNamePlaceholder = params.last_name;
        this.emailPlaceholder = params.email;
        this.typeUserPlaceholder = params.type_user;
      }
    })
  }

  addUser() {

    this.user.id = this.id;
    this.user.first_name = this.name == null ? this.namePlaceholder : this.name;
    this.user.last_name = this.first_name == null ? this.lastNamePlaceholder : this.first_name;
    this.user.email = this.email == null ? this.emailPlaceholder : this.email;
    this.user.type_user = this.type_user == null ? this.typeUserPlaceholder : this.type_user;

    this.userService.openConfirmDialog("Are you sure you want to create this?", "Yes", "No", () => {
      this.userService.addUser(this.user);
      this.userService.reloadComponent(false, this.router.url);
    });
  }
}
