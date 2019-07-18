import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {

  @Output() timeList = new EventEmitter<string[]>();

  timeForm = new FormGroup({
    currentTime: new FormControl('', Validators.required)
  });

  @Input() times: string[];

  constructor() { }

  ngOnInit() {
    this.times = []
  }

  onSubmit(){
    this.times.push(this.timeForm.value.currentTime);
  }

  deleteTime(time: string){
    const index = this.times.indexOf(time, 0);
    if (index > -1) {
      this.times.splice(index, 1);
    }

    this.emitTimelListEvent();
  }

  emitTimelListEvent(){
    this.timeList.emit(this.times);
  }

}
