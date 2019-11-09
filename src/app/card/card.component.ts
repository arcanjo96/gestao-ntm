import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: {};  

  constructor() { }

  ngOnInit() {
    this.user = {
      "name": "lucas",
      "email": "lucas@teste.com",
      "cpf": "123123123",
      "telefone": "82 999999999"
    };
  }

}
