import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ValidateRequired } from "../shared/validators/required.validator";
import { UserService } from "../user.service";
import { SkillService } from "../skill.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  skills: any;

  constructor(
    private service: UserService,
    private skillService: SkillService,
    private route: Router
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [ValidateRequired]),
      email: new FormControl(null, [ValidateRequired]),
      cpf: new FormControl(null, [ValidateRequired]),
      phone: new FormControl(null),
      status: new FormControl("Não Validado"),
      skill_id: new FormControl(null, [ValidateRequired])
    });
  }

  ngOnInit() {
    this.skillService.getAllSkills().then(skills => {
      console.log(skills);
      this.skills = skills;
    });
  }

  save() {
    const dados = this.registerForm.getRawValue();
    this.service
      .store(dados)
      .then(result => {
        console.log(result);
        alert(`Usuário: ${result["name"].toUpperCase()}, criado com sucesso!`);
        window.location.href = "/register";
      })
      .catch(result => {
        console.log(result.error.text);
        alert(result.error.text);
      });
  }
}
