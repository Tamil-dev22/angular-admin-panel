import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-learning-reactive-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './learning-reactive-forms.html',
  styleUrl: './learning-reactive-forms.scss',
})
export class LearningReactiveForms {
  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;
 
  users: any[] = [];
  editIndex: number | null = null;
 
  countries = ['India', 'USA', 'Canada', 'Australia'];
  skills = ['Angular', 'Node.js', 'MongoDB'];
 
  isSubmitting = true;
 
  userForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      website: ['', Validators.required],
      search: ['', Validators.required],
      dob: [''],
      meeting_time: [''],
      appointment: [''],
      joining_month: [''],
      work_week: [''],
      favourite_color: [''],
      volume: [0],
      is_accepted: [false],
      gender: [''],
      file: [null as File | null],
      age: [null as number | null, [Validators.required, Validators.min(18), Validators.max(60)]],
      countries: [''],
      skills: [[] as string[]]
    });
  }
 
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
 
    const record = { ...this.userForm.value };
 
    if (this.editIndex === null) {
      this.users.push(record);
    } else {
      this.users[this.editIndex] = record;
      this.editIndex = null;
    }
 
    this.resetForm();
  }
 
  private resetForm() {
    this.userForm.reset({
      name: '', password: '', email: '', phone_number: '', website: '',
      search: '', dob: '', meeting_time: '', appointment: '', joining_month: '',
      work_week: '', favourite_color: '', volume: 0, is_accepted: false,
      gender: '', file: null, age: null, countries: '', skills: []
    });
    this.fileInput.nativeElement.value = '';
  }
 
  showMessage() {
    alert('Button Clicked!');
  }
 
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.userForm.patchValue({ file: input.files[0] });
    }
  }
 
  getErrorMessage(controlName: string): string {
    const control = this.userForm.get(controlName);
    if (!control || !control.errors || !(control.touched || control.dirty)) return '';
    const messages = this.validationMessages[controlName];
    for (const error in control.errors) {
      if (messages?.[error]) return messages[error];
    }
    return '';
  }
 
  edit(index: number) {
    this.editIndex = index;
    const record = this.users[index];
    this.userForm.patchValue({
      ...record,
      skills: [...record.skills]
    });
  }
 
validationMessages: any = {
    name: {
      required: 'Name is required'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 6 characters'
    },
    email: {
      required: 'Email is required',
      email: 'Enter a valid email'
    },
    phone_number: {
      required: 'Phone number is required',
      pattern: 'Enter a valid phone number'
    },
    website: {
      required: 'Website is required'
    },
    search: {
      required: 'Search is required'
    },
    age: {
      required: 'Age is required',
      min: 'Minimum age is 18',
      max: 'Maximum age is 60'
    },
    countries: {
      required: 'Please select a country'
    },
    skills: {
      required: 'Please select at least one skill'
    },
    gender: {
      required: 'Please select gender'
    }
  };
}


