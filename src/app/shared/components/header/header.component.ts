import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  filter?:boolean
  name:string = ''
  date:string = ''
  @Output() filterEvent = new EventEmitter<{name: string, date: string}>()
  @Output() resetEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(){
    this.filter = !this.filter
  }

  filterData(name:string, date:string){
    this.filterEvent.emit({name, date})
  }

  resetData(){
    this.name = ''
    this.date = ''
    this.resetEvent.emit("reset")
  }

}
