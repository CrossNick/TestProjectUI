import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  constructor() { }

  @Output() emailList = new EventEmitter<string[]>();
  
  @Input() emails: string[];
  currentemail: string = '';

  ngOnInit() {
    this.emails = [];
  }

  onSubmit(emailForm: NgForm){
    if(emailForm.value.currentemail!='')
      this.emails.push(emailForm.value.currentemail);
    
    this.emitEmailListEvent();
  }

  deleteEmail(email: string){
    const index = this.emails.indexOf(email, 0);
    if (index > -1) {
      this.emails.splice(index, 1);
    }

    this.emitEmailListEvent();
  }

  emitEmailListEvent(){
    this.emailList.emit(this.emails);
  }

}
