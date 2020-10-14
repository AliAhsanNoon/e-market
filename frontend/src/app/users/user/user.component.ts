import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginUser: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  isValid(controlName) {
    return this.loginUser.get(controlName).invalid && this.loginUser.get(controlName).touched;
  }

  login() {
    this.authService.loginUser(this.loginUser.value).subscribe(
      (res) => {
        console.log('user response ', res);
        this.authService.setAuthenticatedUser(res.toString());
        //localStorage.setItem('token', res.toString())
        this.router.navigate(['/login']);
      }, (err) => {
        console.log('user error ', err)
      }
    );
  }

  setUserLoginForm() {
    this.loginUser = this.fb.group({
      UserEmail: new FormControl(null, Validators.email),
      UserPassword: new FormControl(null, Validators.required)
    });

  }

  passValidator(control: AbstractControl) {
    if (control && (control.value != null || control.value == undefined)) {
      const cnfrmPass = control.value;
      const passControl = control.root.get('UserPassword');

      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfrmPass || passValue === '') {
          return { isError: true };
        }
      }
    }
  }

  ngOnInit() {
    this.setUserLoginForm();
  }

}
