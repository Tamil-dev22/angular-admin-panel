import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      phone: '9999999999',
      status: true
    },
    {
      id: 2,
      name: 'David',
      email: 'david@gmail.com',
      phone: '8888888888',
      status: false
    }
  ];

  getUsers() {
    return this.users;
  }
}