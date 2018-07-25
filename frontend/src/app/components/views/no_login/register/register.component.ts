import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public input = {
    username: '',
      password: '',
      passwordRetry: '',
      city: '',
      country: '',
      agb: false,
      privacy: false
  };

  constructor() {}

  ngOnInit() {
  }

}
