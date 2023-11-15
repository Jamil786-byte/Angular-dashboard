import { Component, OnDestroy, OnInit } from '@angular/core';
import { Users } from './users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  namelist: any[] = [];
  usersList: Users[] = [
    {
      id: 1,
      name: 'petter',
      isActive: true,
      age: 28,
    },
    {
      id: 2,
      name: 'john',
      isActive: false,
      age: 32,
    },
    {
      id: 3,
      name: 'doe',
      isActive: true,
      age: 20,
    },
    {
      id: 4,
      name: 'Jamil',
      isActive: false,
      age: 34,
    },
  ];

  private socket!: WebSocket;
  private readonly baseUrl = 'ws://localhost:8000';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Getting only name by using forEach method
    // const names = this.usersList.forEach((data) =>
    //   this.namelist.push(data.name)
    // );
    // console.log(names);

    // Getting only name by using forLoop method
    let onlyNames = [];
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].isActive == true) {
        onlyNames.push({
          id: this.usersList[i].id,
          name: this.usersList[i].name,
          isActive: this.usersList[i].isActive,
          age: this.usersList[i].age,
        });
      }

      // console.log(onlyNames);
    }

    let isActiveUser: any[] = [];
    isActiveUser = this.usersList.filter((users) => users.isActive == true);
    // console.log(isActiveUser);

    const ageSort = this.usersList.sort(
      (users1, users2) => users2.age - users1.age
    );
    // console.log(ageSort);

    this.getWebSocketData();
  }

  getWebSocketData() {
    this.socket = new WebSocket(this.baseUrl);

    this.socket.addEventListener('message', (event) => {
      let data = JSON.parse(event.data);
      console.log(data);
    });
  }

  // Close the WebSocket when the component is destroyed
  ngOnDestroy(): void {
    this.socket.close();
    console.log('ngOnDestroy called');
  }

  addressRoute() {
    this.router.navigate(['users/profile/address']);
  }

  companyRoute(){
    this.router.navigate(['users/profile/company']);
  }
}
