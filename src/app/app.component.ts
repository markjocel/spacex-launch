import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchService } from './core/services/launch.service';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacex-launch';
  loading$ = this.launchService.loading$;
  constructor(private router: Router, private launchService: LaunchService){
    particlesJS.load('particles-js', 'assets/particles.json', null);
   }
}
