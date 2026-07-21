import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { User } from '../services/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-http-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './http-client.html',
  styleUrl: './http-client.scss',
})
export class HttpClient implements OnInit {

  private userService = inject(User);
  private cdr = inject(ChangeDetectorRef)

  users: any[] = [];

  editId: number | null = null;

  newUser = {
    id: null,
    name: '',
    username: '',
    email: ''
  };

  ngOnInit(): void {
    this.loadUsers();
  }

  // ================= GET =================

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.log(err)
    });
  }

  // ================= POST =================

  createUser() {

    this.userService.createUser(this.newUser).subscribe({

      next: (data: any) => {

        this.users.push(data);
        this.cdr.detectChanges();

        this.resetForm();

      },

      error: err => console.log(err)

    });

  }

  // ================= PUT =================

  updateUser() {

    if (this.editId === null) return;

    this.userService.updateUser(this.editId, this.newUser).subscribe({

      next: (data: any) => {

        const index = this.users.findIndex(
          (u: any) => u.id === this.editId
        );

        if (index !== -1) {

          this.users[index] = data;

        }
        this.cdr.detectChanges();

        this.resetForm();

      },

      error: err => console.log(err)

    });

  }

  // ================= PATCH =================

  patchUser(id: number) {

    const body = {
      username: this.newUser.username
    };

    this.userService.patchUser(id, body).subscribe({

      next: (data: any) => {

        const index = this.users.findIndex(
          (u: any) => u.id === id
        );

        if (index !== -1) {

          this.users[index] = {
            ...this.users[index],
            ...data
          };

        }
        this.cdr.detectChanges();


      },

      error: err => console.log(err)

    });

  }

  // ================= DELETE =================

  deleteUser(id: number) {

    this.userService.deleteUser(id).subscribe({

      next: () => {

        this.users = this.users.filter(
          (u: any) => u.id !== id
        );
        this.cdr.detectChanges();
      },

      error: err => console.log(err)

    });

  }

  // ================= EDIT =================

  edit(user: any) {

    this.editId = user.id;

    this.newUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email

    };

  }

  // ================= SAVE =================

  onSubmit(form: NgForm) {

    if (this.editId === null) {

      this.createUser();

    } else {

      this.updateUser();

    }

    form.resetForm();

  }

  resetForm() {

    this.editId = null;

    this.newUser = {
      id: null,
      name: '',
      username: '',
      email: ''

    };

  }

}
