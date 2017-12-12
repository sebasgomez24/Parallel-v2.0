import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortalItem } from '../portals/portal';
import { PortalService } from '../portals/portal.service';



@Component({
  selector: 'app-portal-detail',
  templateUrl: './portal-detail.component.html',
  styleUrls: ['./portal-detail.component.sass'],
  providers: [PortalService]
})
export class PortalDetailComponent implements OnInit, OnDestroy {
	private req:any;
	private routeSub:any;
	title = 'Video Detail';
	slug:string;
	portal:PortalItem;

  constructor(private route: ActivatedRoute, private _portal:PortalService) { }

  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params => {
  		this.slug = params['slug']
      this.req = this._portal.list().subscribe(data=>{
          data.filter(item=>{
            if(item.slug == this.slug){
              this.portal = item as PortalItem
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