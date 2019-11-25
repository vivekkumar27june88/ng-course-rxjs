import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateObservableIiComponent } from "./components/create-observable-ii/create-observable-ii.component";
import { CreateObservableIiiComponent } from "./components/create-observable-iii/create-observable-iii.component";
import { CreateObservableComponent } from "./components/create-observable/create-observable.component";

const routes: Routes = [
  {
    path: "create-observable",
    component: CreateObservableComponent
  },
  {
    path: "create-observable-ii",
    component: CreateObservableIiComponent
  },
  {
    path: "create-observable-iii",
    component: CreateObservableIiiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
