import { Component, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-create-observable-iii",
  templateUrl: "./create-observable-iii.component.html",
  styleUrls: ["./create-observable-iii.component.scss"]
})
export class CreateObservableIiiComponent implements OnInit {
  @ViewChild("inputRef", { static: true })
  inputRef;

  constructor() {}

  ngOnInit() {
    this.createObservableFromInputElement();
  }

  createObservableFromInputElement() {
    fromEvent(this.inputRef.nativeElement, "keyup").subscribe(
      (event: KeyboardEvent) => {
        console.log(event.target["value"]);
      }
    );
  }
}
