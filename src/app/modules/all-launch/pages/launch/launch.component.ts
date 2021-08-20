import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchService } from 'src/app/core/services/launch.service';
import { Launch } from 'src/app/shared/models/launch.model';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  launches: Launch[] | undefined
  limit = 4
  maxLimit?:boolean
  filtered?:boolean
  rocketName:string = ''
  launchDate:string = ''
  selectedLaunch?:Launch
  hiddenInfo:boolean = true
  closed:boolean = true
  constructor(private launchService: LaunchService, private router: Router) { }

  ngOnInit(): void {
    this.getAllLaunch(this.limit)
  }

  getAllLaunch(limit:number){
    if(!this.maxLimit){
      this.launchService.loading = true
      this.launchService.getAllLaunch(0 + limit).subscribe(launches =>{
        this.launches = launches
        this.launchService.loading = false
        if(limit > launches.length){
          this.maxLimit = true
        }
        console.log(launches)
      })
    }
  }

  filterLaunchData(name:string,date:string,limit:number){
    if(!this.maxLimit){
      this.launchService.loading = true
      this.launchService.filterLaunch(name,date,this.limit).subscribe(launches => {
        this.launches = launches
        this.launchService.loading = false
        if(limit > launches.length){
          this.maxLimit = true
        }
      })
    }
  }

  scroll(event:any){
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.filtered ? this.filterLaunchData(this.rocketName, this.launchDate, this.limit +2) : this.getAllLaunch(this.limit + 2)
      this.limit +=2
    }
  }

  filter(event:any){
    this.limit = 4
    this.filtered = true
    this.rocketName = event.name
    this.launchDate = event.date
    this.maxLimit = false
    this.filterLaunchData(event.name,event.date,this.limit)
    console.log(event.name,event.date)
  }

  resetData(event:any){
    console.log("Here")
    this.limit = 4
    this.filtered = false
    this.maxLimit = false
    this.getAllLaunch(this.limit)
  }

  viewMore(launchInfo:Launch){
    console.log(launchInfo)
    this.hiddenInfo = false
    this.closed = false
    this.selectedLaunch = launchInfo
  }

  close(){
    console.log("Here")
    this.closed = true
  }

}
