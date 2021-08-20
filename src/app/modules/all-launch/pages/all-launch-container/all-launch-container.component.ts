import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchService } from 'src/app/core/services/launch.service';

@Component({
  selector: 'app-all-launch-container',
  templateUrl: './all-launch-container.component.html',
  styleUrls: ['./all-launch-container.component.scss']
})
export class AllLaunchContainerComponent implements OnInit {

  constructor(private launchService: LaunchService, private router: Router) { }

  ngOnInit(): void {
  }
}
