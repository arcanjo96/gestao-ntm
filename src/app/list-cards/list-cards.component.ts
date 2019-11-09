import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-cards",
  templateUrl: "./list-cards.component.html",
  styleUrls: ["./list-cards.component.css"]
})
export class ListCardsComponent implements OnInit {
  users: any = [];
  searchText;

  constructor(private service: UserService, private route: Router) {}

  ngOnInit() {
    if (localStorage.getItem("user")) {
    } else {
      this.route.navigateByUrl("/admin");
    }

    this.service.getAllUsers().then(users => {
      this.users = users;
      console.log(this.users);
    });
  }
}
