import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLaunchContainerComponent } from './pages/all-launch-container/all-launch-container.component';
import { LaunchComponent } from './pages/launch/launch.component';

const routes: Routes = [
  {
    path: "launch",
    component: AllLaunchContainerComponent,
    children: [
      {
        path: 'all',
        component: LaunchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllLaunchRoutingModule { }
