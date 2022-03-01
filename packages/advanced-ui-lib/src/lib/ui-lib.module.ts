import { NgModule } from '@angular/core';
import { AdvancedUiLibComponent } from './advanced-ui-lib.component';
import ButtonComponent from "./button.component";



@NgModule({
  declarations: [
    AdvancedUiLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    AdvancedUiLibComponent,
    ButtonComponent
  ]
})
export class UiLibModule { }
