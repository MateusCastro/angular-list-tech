import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  techs: Array<string> = [];
  techForm;

  constructor(private formBuilder: FormBuilder) {
    this.techForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    this.techs.push(customerData.name);
    this.techForm.reset();
  }

}
