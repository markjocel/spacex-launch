import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLaunchContainerComponent } from './modules/all-launch/pages/all-launch-container/all-launch-container.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/launch/all', 
    pathMatch: 'full' 
  },
  {
    path: 'launch',
    component: AllLaunchContainerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
