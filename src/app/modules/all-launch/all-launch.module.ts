import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllLaunchRoutingModule } from './all-launch-routing.module';
import { AllLaunchContainerComponent } from './pages/all-launch-container/all-launch-container.component';
import { LaunchComponent } from './pages/launch/launch.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllLaunchContainerComponent,
    LaunchComponent
  ],
  imports: [
    CommonModule,
    AllLaunchRoutingModule,
    SharedModule
  ]
})
export class AllLaunchModule { }
