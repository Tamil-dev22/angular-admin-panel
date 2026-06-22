import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm implements OnInit {

  id: number | null = null;

form: any;

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private userService: UserService
) {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    gender: [''],
    department: [''],
    skills: [[] as string[]],
    address: [''],
    image: [null],
    status: [true]
  });
}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? Number(paramId) : null;

    if (this.id) {
      const user = this.userService.getUserById(this.id);

      if (user) {
        this.form.patchValue({
          ...user,
          skills: user.skills || []
        });
      }
    }
  }

  toggleSkill(skill: string, event: any) {
    let skills: string[] = this.form.value.skills ?? [];

    if (event.target.checked) {
      if (!skills.includes(skill)) {
        skills = [...skills, skill];
      }
    } else {
      skills = skills.filter(s => s !== skill);
    }

    this.form.patchValue({ skills });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value;

    if (this.id) {
      this.userService.updateUser({
        ...data,
        id: this.id
      } as any);

      alert('User Updated');
    } else {
      this.userService.addUser(data as any);
      alert('User Added');
    }

    this.router.navigate(['/users']);
  }
  cancel() {
  this.router.navigate(['/users']);
}
}
