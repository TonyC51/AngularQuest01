import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	email : Email = {
		email : 'exemple@email.com',
		};

  constructor() { }

  ngOnInit() {
  }

}
