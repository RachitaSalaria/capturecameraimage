import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactDetails } from './modal';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit {

  ContactForm!: FormGroup;
  contactDetails!: contactDetails;
  submitted = false;
  show= false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ContactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      message: ['']
    })
  }

  get f() {
    return this.ContactForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.ContactForm.valid) {
      return this.show=true
      console.log(this.ContactForm.value)
      // this.ContactForm.reset()
    }
    else {
      return this.show=false;
      console.log('errrr')
    }
  }

}
