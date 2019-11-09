import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./admin/admin.component";
import { CardComponent } from "./card/card.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/validate", component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
