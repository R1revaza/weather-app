import { Component, Input,  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {


  constructor(private service: UserService, private router: Router){
  }

  logOut(){
    this.service.logout().then(() =>{
      this.router.navigate(['/login']);
    })
  }

}
