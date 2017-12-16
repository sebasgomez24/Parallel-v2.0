import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortalItem } from '../portals/portal';
import { PortalService } from '../portals/portal.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.sass'],
  providers: [PortalService]
})
export class SearchDetailComponent implements OnInit, OnDestroy{
	private routeSub:any;
    private req: any;
    query: string;
    portalList: [PortalItem];
    
  constructor(private route:ActivatedRoute, private _portal:PortalService) { }

  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params=>{
          this.query = params['q']
          this.req = this._portal.search(this.query).subscribe(data=>{
            this.portalList = data as [PortalItem];
          })
      })
  }
  ngOnDestroy() {
  	this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }
}