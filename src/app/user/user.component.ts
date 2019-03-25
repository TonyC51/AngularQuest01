import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user : User = {
   
   firstName : 'John',
   lastName : 'Doe',
   age : 27,
   quote : 'Hello my friend',
   photo : 'https://randomuser.me/api/portraits/lego/2.jpg'

		};

   showAge : boolean = false;

}
