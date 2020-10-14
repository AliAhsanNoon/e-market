import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerUser: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router : Router, private activatedRoute : ActivatedRoute) { }

  isValid(controlName) {
    return this.registerUser.get(controlName).invalid && this.registerUser.get(controlName).touched;
  }

  register() {
    this.userService.saveUser(this.registerUser.value).subscribe(
      (res) => {
        console.log('user response ', res);
        this.router.navigate(['/login'], {relativeTo: this.activatedRoute});
      }, (err) => {
        console.log('user error ', err)
      }
    );
  }

  setUserLoginForm() {
    this.registerUser = this.fb.group({
      UserName: new FormControl(null, Validators.required),
      UserEmail: new FormControl(null, Validators.email),
      UserPassword: new FormControl(null, Validators.required),
      ConfirmPassword: new FormControl(null, this.passValidator),
    });
    this.registerUser.controls.UserPassword.valueChanges.subscribe((res) => {
      this.registerUser.controls.ConfirmPassword.updateValueAndValidity();
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
