import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: number;
  usersForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createUsers();
    this.userId = this.routes.snapshot.params['id'];
    if (this.userId) {
      this.getUserById();
    }
  }

  createUsers() {
    this.usersForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      email: [''],
      profile: [''],
      phone: [''],
      gender: [''],
    });
  }

  getUserById() {
    this.dataService
      .getRequestData(`student/${this.userId}`)
      .subscribe((res: any) => {
        if (res.status == 200) {
          const userDetails = res['result'];
          this.userPatchData(userDetails);
        }
      });
  }

  userPatchData(userData: any) {
    this.usersForm.patchValue({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      profile: userData.profile,
      gender: userData.gender,
    });
  }

  submitUser() {    
    if (this.userId) {
      this.updateUser();
    } else {
      this.dataService
        .postRequest('student/add', this.usersForm.value)
        .subscribe({
          next: (res: any) => {
            alert('New User added successfully');
            this.router.navigate(['/users/user-list']);
          },
          error: (err) => {
            alert(err.error.message);
          },
        });
    }
  }

  updateUser() {
  if (confirm('Are you sure want to updates the user')) {
    this.dataService
    .putRequest(`student/update/${this.userId}`, this.usersForm.value)
    .subscribe(
      (res: any) => {
        if (res.status == 200) {
          alert(res.message);
          this.router.navigate(['/users/user-list']);
        }
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
  }
}
