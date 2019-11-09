import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() user;

  constructor(private service: UserService, private route: Router) {}

  ngOnInit() {}

  update(user) {
    this.service.update(user).then(result => {
      alert(`Usuário ${user.name} validado!`);
      window.location.href = "/admin/validate";
    });
  }
}
