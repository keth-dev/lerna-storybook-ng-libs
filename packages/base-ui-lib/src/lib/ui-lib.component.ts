import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-ui-lib',
  template: `
    <p>
      ui-lib works!
    </p>
  `,
  styles: [
  ]
})
export class UiLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
