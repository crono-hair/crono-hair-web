import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./../account.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  faChevron = faChevronCircleLeft;

  login = {
    email: '',
    password: '',
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
