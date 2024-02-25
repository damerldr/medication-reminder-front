// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) { }

  register(username: string,email : string, password: string, confirmPassword:string): void {
    if(password==confirmPassword){
    this.authService.register(username,email,password);}
  }
}

