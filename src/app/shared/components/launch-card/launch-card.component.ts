import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LaunchService } from 'src/app/core/services/launch.service';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit {
  @Input() launch?: Launch
  @Output() selectLaunchEvent = new EventEmitter<Launch>()
  selectedLaunch?: Launch
  constructor(private launchService:LaunchService) { }

  ngOnInit(): void {
  }

  viewMore(flightNumber:number | undefined){
    this.launchService.loading = true
    this.launchService.getOneLaunch(flightNumber).subscribe(launch => {
      this.selectedLaunch = launch
      this.selectLaunchEvent.emit(this.selectedLaunch)
      this.launchService.loading = false
    })
  }

}
