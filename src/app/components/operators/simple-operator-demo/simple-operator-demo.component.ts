import { Component, OnInit } from "@angular/core";
import { observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

@Component({
  selector: "app-simple-operator-demo",
  templateUrl: "./simple-operator-demo.component.html",
  styleUrls: ["./simple-operator-demo.component.scss"]
})
export class SimpleOperatorDemoComponent implements OnInit {
  constructor() {
    /* ------------------------ Create observable stream ------------------------ */
    const obs$ = of(1, 2, 3, 4, 5, 6, 7, 8);

    /* ------------------- Use operator for processing stream ------------------- */
    const obs2$ = obs$.pipe(
      tap(d => console.log("Original data stream >>> ", d)),
      filter(item => item > 3),
      map(item => item * 2)
    );

    /* ------------------------- Subscribe to observable ------------------------ */
    const subscription = obs2$.subscribe(
      d => console.log("Subscribed data stream >>> ", d),
      e => console.error(e),
      () => console.log("data stream is over")
    );
  }

  ngOnInit() {}
}
