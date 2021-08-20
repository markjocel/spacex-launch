import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { LaunchInfoComponent } from './components/launch-info/launch-info.component';



@NgModule({
  declarations: [
    LaunchCardComponent,
    HeaderComponent,
    LaunchInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaunchCardComponent,
    HeaderComponent,
    LaunchInfoComponent
  ]
})
export class SharedModule { }
