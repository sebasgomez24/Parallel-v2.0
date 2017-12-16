import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageItem } from '../messages/message';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.sass'],
  providers: [MessageService]
})
export class MessageDetailComponent implements OnInit, OnDestroy {
  title = 'Message Detail';
  private routeSub:any;
  private req:any;

  id:number;
  message:MessageItem;

  constructor(private route:ActivatedRoute, private _message:MessageService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      this.id = params['id']
      this.req = this._message.list().subscribe(data=>{
        data.filter(item=>{
          if(item.id == this.id){
            this.message = item as MessageItem
          }
        })
      })
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}