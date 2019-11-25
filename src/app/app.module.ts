import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateObservableComponent } from './components/create-observable/create-observable.component';
import { CreateObservableIiComponent } from './components/create-observable-ii/create-observable-ii.component';
import { CreateObservableIiiComponent } from './components/create-observable-iii/create-observable-iii.component';
import { SimpleOperatorDemoComponent } from './components/operators/simple-operator-demo/simple-operator-demo.component';

@NgModule({
  declarations: [AppComponent, CreateObservableComponent, CreateObservableIiComponent, CreateObservableIiiComponent, SimpleOperatorDemoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
