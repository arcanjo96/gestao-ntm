import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(private route: Router) {}

  ngOnInit() {
    localStorage.getItem("user").length > 0
      ? (this.isAuthenticated = true)
      : (this.isAuthenticated = false);
  }

  logout() {
    localStorage.removeItem("user");
    this.isAuthenticated = false;
    this.route.navigateByUrl("/admin");
  }
}
