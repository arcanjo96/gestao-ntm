import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ValidateRequired } from "../shared/validators/required.validator";
import { AdminService } from "../admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-register",
  templateUrl: "./admin-register.component.html",
  styleUrls: ["./admin-register.component.css"]
})
export class AdminRegisterComponent implements OnInit {
  public adminForm: FormGroup;

  constructor(private service: AdminService, private route: Router) {
    this.adminForm = new FormGroup({
      login: new FormControl(null, [ValidateRequired]),
      password: new FormControl(null, [ValidateRequired])
    });
  }

  ngOnInit() {}

  save() {
    const dados = this.adminForm.getRawValue();
    this.service.store(dados).then(result => {
      console.log(result);
      alert(`Admin criado com sucesso!`);
      this.route.navigateByUrl("/admin");
    });
  }

  goBack() {
    this.route.navigateByUrl("/admin");
  }
}
