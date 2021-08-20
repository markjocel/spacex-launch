import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-launch-info',
  templateUrl: './launch-info.component.html',
  styleUrls: ['./launch-info.component.scss']
})
export class LaunchInfoComponent implements OnInit {
  // hidden:boolean = false
  @Input() hidden?: boolean
  @Input() launchInfo?: Launch
  @Output() closeInfo = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeInfo.emit("close")
  }

}
