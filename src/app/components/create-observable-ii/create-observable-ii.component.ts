import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-create-observable-ii",
  templateUrl: "./create-observable-ii.component.html",
  styleUrls: ["./create-observable-ii.component.scss"]
})
export class CreateObservableIiComponent implements OnInit {
  constructor() {
    const obs$ = this.createObservable();
    obs$.subscribe(
      d => console.log(d),
      e => console.log(e),
      () => console.log("completed")
    );
  }

  ngOnInit() {}

  createObservable() {
    return of({
      name: "vivek kumar",
      address: "Pune, India"
    });
  }
}
