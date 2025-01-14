import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PhoneMaskDirective } from "./shared/directives/phone-mask.directive";
import { CpfMaskDirective } from "./shared/directives/cpf-mask.directive";
import { HttpClientModule } from "@angular/common/http";
import { CustomMaterialModule } from "./shared/custom-material.module";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { CardComponent } from "./card/card.component";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./admin/admin.component";
import { ListCardsComponent } from "./list-cards/list-cards.component";
import { AdminRegisterComponent } from "./admin-register/admin-register.component";

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    CpfMaskDirective,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    RegisterComponent,
    AdminComponent,
    ListCardsComponent,
    AdminRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
