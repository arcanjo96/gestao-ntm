import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "../admin.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ValidateRequired } from "../shared/validators/required.validator";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  public adminForm: FormGroup;

  constructor(private route: Router, private service: AdminService) {
    this.adminForm = new FormGroup({
      login: new FormControl(null, [ValidateRequired]),
      password: new FormControl(null, [ValidateRequired])
    });
  }

  ngOnInit() {
    if (localStorage.getItem("user").length > 0) {
      this.route.navigateByUrl("/admin/validate");
    }
  }

  login() {
    const dados = this.adminForm.getRawValue();

    try {
      this.service
        .auth(dados)
        .then(result => {
          console.log(result);
          localStorage.setItem("user", result[0].id);
          this.route.navigateByUrl("/admin/validate");
        })
        .catch(result => {
          console.log(result);
          window.alert("Login ou senha inválida.");
        });
    } catch (error) {
      window.alert("Não foi possível fazer o login.");
    }
  }

  goTo() {
    this.route.navigateByUrl("/admin/register");
  }
}
