import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.createLogin();
  }

  createLogin() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }

  login() {
    this.dataService
      .postRequest('users/login', this.loginForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('tokenKey', res.token);
        this.router.navigate(['/main-dashboard']);
        this.dataService.isUserLoggedIn(true);
      });
  }
}
