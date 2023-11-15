import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { products } from 'src/app/shared/constants/products';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  usersList: any[] = [];

  data!: Observable<any[]>;
  filterText!: string;
  productList = products;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dataService.getRequestData('students/list').subscribe((res) => {
      this.usersList = res;
    });
  }

  editUser(userId: number) {
    this.router.navigate(['/users/user-add', userId]);
  }

  // delete users
  deleteUser(userId: number) {
    if (confirm('Are you sure want to delete this user')) {
      this.dataService.deleteRequest(`student/delete/${userId}`).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.getUsers();
            alert(res.message);
          }
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
    }
  }
}
