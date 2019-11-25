import { Component, OnInit } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-create-observable",
  templateUrl: "./create-observable.component.html",
  styleUrls: ["./create-observable.component.scss"]
})
export class CreateObservableComponent implements OnInit {
  constructor() {
    const observable$ = this.createObservable();
    const subscription = observable$.subscribe(
      d => console.log(d),
      e => console.log(e),
      c => console.log("completed")
    );

    // setTimeout(() => subscription.unsubscribe(), 5000);
  }

  ngOnInit() {}

  createObservable() {
    return Observable.create((observer: Observer<any>) => {
      let counter = 0;

      const intervalId = setInterval(() => {
        if (counter === 10) {
          observer.complete();
        }

        // Once there is an error, the complete will never be called.
        if (counter === 7) {
          observer.error("some error from within observable");
        }

        observer.next(`vivek-${++counter}`);
      }, 1000);

      // Teardown function
      return () => {
        console.log(`Terminating subscription`);
        clearInterval(intervalId);
      };
    });
  }
}
