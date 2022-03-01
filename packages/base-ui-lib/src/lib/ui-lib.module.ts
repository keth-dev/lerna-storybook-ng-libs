import {NgModule} from '@angular/core';
import {UiLibComponent} from './ui-lib.component';
import {ButtonComponent} from "./button.component";
import {HeaderComponent} from "./header.component";
import {PageComponent} from "./page.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    UiLibComponent,
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiLibComponent,
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ]
})
export class UiLibModule {
}
