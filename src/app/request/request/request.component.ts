import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../request.service'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Request} from '../../request'
import {Router} from '@angular/router'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
                private requestService: RequestService,
                private router: Router) 
  { 
    
  }

  request: Request;

  ngOnInit() {
    this.request = new Request();

    this.getRequest();
  }


  getRequest(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(id!=0)
      this.requestService.getRequest(id)
      .subscribe(request => { this.request = request; });
  }

  onEmailsChanged(emails: string[]){
    this.request.EmailList = emails;
  }

  onTimesChanged(times: string[]){
    this.request.TimeList = times;
  }
  
  onSave(){
    debugger;
    this.requestService.saveRequest(this.request);
    this.router.navigateByUrl('messages');
  }

}
