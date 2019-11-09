import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./admin/admin.component";
import { ListCardsComponent } from './list-cards/list-cards.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/validate", component: ListCardsComponent },
  { path: "admin/register", component: AdminRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
