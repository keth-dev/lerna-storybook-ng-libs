import {Component} from '@angular/core';

@Component({
  selector: 'advanced-button',
  template: `
    <base-ui-lib-storybook-button type="button" size="small" [primary]="true" backgroundColor="#232342"></base-ui-lib-storybook-button>`,
  styleUrls: ['./button.css'],
})
export class AdvancedButton {
}
