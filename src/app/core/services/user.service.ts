// user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USER_LIST } from '../../mock-data/user.mock';

@Injectable({ providedIn: 'root' })
export class UserService {

  private storageKey = 'users';

 getUsers() {
  return JSON.parse(localStorage.getItem('users') || JSON.stringify(USER_LIST));
}

  saveUsers(users: User[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  addUser(user: User) {
    const users = this.getUsers();

    user.id = users.length
      ? Math.max(...users.map((u: { id: any; }) => u.id)) + 1
      : 1;

    users.push(user);
    this.saveUsers(users);
  }

  updateUser(updated: User) {
    const users = this.getUsers();

    const index = users.findIndex((u: { id: number; }) => u.id === updated.id);

    if (index !== -1) {
      users[index] = updated;
      this.saveUsers(users);
    }
  }

  deleteUser(id: number) {
    const users = this.getUsers().filter((u: { id: number; }) => u.id !== id);
    this.saveUsers(users);
  }

  getUserById(id: number): User | undefined {
    return this.getUsers().find((u: { id: number; }) => u.id === id);
  }
}