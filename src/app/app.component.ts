import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-course-rxjs";
  menuItems = [
    /* --------------------------- Observable Creation -------------------------- */
    {
      link: "create-observable",
      label: "Create Observable",
      tooltip: " Create Observable using Rx Create"
    },
    {
      link: "create-observable-ii",
      label: "Create Observable Using Of",
      tooltip: " Create Observable using of()"
    },
    {
      link: "create-observable-iii",
      label: "Observable from HTMl event",
      tooltip: "Observable from HTMl event"
    },
    /* -------------------------------- Operators ------------------------------- */
    {
      link: "operator-simple",
      label: "How to use Operator",
      tooltip: "First example for demonstrating operator syntax"
    }
  ];
}
