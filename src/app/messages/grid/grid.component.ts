import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../messages.service';

import {Router} from '@angular/router';

import {Message} from '../../message';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor( private router: Router,
    private messagesService: MessagesService) { }


  messages: Message[];

  ngOnInit() {
    this.messages = [];
    this.loadMessages();
  }

  loadMessages (){
    this.messagesService.getMessages()
      .subscribe(messages => { this.messages = messages; });
  }

  onDeleteClick(id: number){
    this.messagesService.deleteMessage(id)
      .subscribe(()=>{
        var message = this.messages.find(x=>x.Id==id);
        const index = this.messages.indexOf(message, 0);
        if (index > -1) {
          this.messages.splice(index, 1);
        }
      });
  }

  onSendClick(id: number){
    var message = this.messages.find(x=>x.Id==id);
    this.messagesService.changeStatus(message)
      .subscribe(()=>{
        var message = this.messages.find(x=>x.Id==id);
        message.StatusId = 1;
        message.StatusName = 'New';
      });
  }

}
