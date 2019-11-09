import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  users: any = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAllUsers().then((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

}
