import {NgModule} from '@angular/core';
import {UiLibModule} from '@keth/base-ui-lib';
import {AdvancedUiLibComponent} from './advanced-ui-lib.component';
import {AdvancedButton} from "./AdvancedButton";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AdvancedUiLibComponent,
    AdvancedButton
  ],
  imports: [
    CommonModule,
    UiLibModule
  ],
  exports: [
    AdvancedUiLibComponent,
    AdvancedButton
  ]
})
export class AdvancedUiLibModule {
}
