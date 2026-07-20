import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-learning-template-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './learning-template-forms copy.html',
  styleUrl: './learning-template-forms.scss',
})
export class LearningTemplateForms {
  @ViewChild('fileInput')
  fileInput!:ElementRef<HTMLInputElement>
  users: any[] = [];
  user = {
    name: "",
    password: "",
    email: "",
    phone_number: "",
    website: '',
    search: '',
    dob: '',
    meeting_time: '',
    appointment: '',
    joining_month: '',
    work_week: '',
    favourite_color: '',
    volume: 0,
    is_accepted: false,
    gender: '',
    file: null as File | null,
    age: null as number | null,
    countries: '',
    skills: [] as string[]
  };
  editIndex: number | null = null;

  countries = [
    'India',
    'USA',
    'Canada',
    'Australia'
  ];
  skills = [
    "Angular",
    "Node.js",
    "MongoDB"
  ]
  isSubmitting = true;

  onSubmit(form: NgForm) {
    // if(form.invalid){
    //   return;
    // }
    // if(this.isSubmitting){
    // return;
    // }
    // this.isSubmitting =  true

    // console.log(this.user)
    if (this.editIndex === null) {
      this.users.push(
        {
          ...this.user,
          skills: [...this.user.skills]
        }

      )
    } else {
      this.users[this.editIndex] = {
        ...this.user,
        skills: [...this.user.skills]
      }
      this.editIndex = null;

    }

    form.resetForm();

    this.user = {
      name: "",
      password: "",
      email: "",
      phone_number: "",
      website: '',
      search: '',
      dob: '',
      meeting_time: '',
      appointment: '',
      joining_month: '',
      work_week: '',
      favourite_color: '',
      volume: 0,
      is_accepted: false,
      gender: '',
      file: null as File | null,
      age: null as number | null,
      countries: '',
      skills: [] as string[]
    };
    this.fileInput.nativeElement.value = ''

  }
  showMessage() {
    alert('Button Clicked!');
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.user.file = input.files[0];

      // console.log(this.user.file);
      // console.log(this.user.file?.name);
      // console.log(this.user.file?.size);
      // console.log(this.user.file?.type);
    }
  }

  getErrorMessage(control: any, field: string): any {
    if (!control.errors) return '';
    const messages = this.validationMessages[field];
    for (const error in control.errors) {
      if (messages?.[error]) {
        console.log(messages?.[error])
        return messages?.[error];
      }

    }
    return '';
  }
  edit(index: number) {
    this.editIndex = index;
    this.user = {
      ...this.users[index],
      skills:[...this.users[index].skills],
      file:this.users[index].file
    }
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
