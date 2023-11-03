import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userName! : string;
  userEmail! : string;
  userProfession! : string;
  onSubmitForm(form: NgForm){
    console.log(form.value);
  }
}

