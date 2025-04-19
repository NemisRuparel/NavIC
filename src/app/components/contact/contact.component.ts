import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted:', this.contactForm);
    this.contactForm = { name: '', email: '', message: '' };
  }
  OnSubmit(value : any){
    console.log(value);
  }
}