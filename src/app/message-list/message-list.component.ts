import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageItem } from '../messages/message';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.sass'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit, OnDestroy {
	title = 'Messages';
	private req:any;
	messageList:[MessageItem]

  constructor(private _message:MessageService) { }

  ngOnInit() {
  	this.req = this._message.list().subscribe(data=>{
  		this.messageList = data as [MessageItem];


  	})
  }
  ngOnDestroy() {
  	this.req.unsubscribe();
  }


}
