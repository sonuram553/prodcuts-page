import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <mat-toolbar color="accent">
      Products
    </mat-toolbar>
  `,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
