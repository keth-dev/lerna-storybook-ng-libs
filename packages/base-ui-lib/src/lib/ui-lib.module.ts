import { NgModule } from '@angular/core';
import { UiLibComponent } from './ui-lib.component';
import ButtonComponent from "./button.component";
import HeaderComponent from "./header.component";
import PageComponent from "./page.component";



@NgModule({
  declarations: [
    UiLibComponent,
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ],
  imports: [
  ],
  exports: [
    UiLibComponent,
    ButtonComponent,
    HeaderComponent,
    PageComponent
  ]
})
export class UiLibModule { }
