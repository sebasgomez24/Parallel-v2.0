import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalItem } from '../portals/portal';
import { PortalService } from '../portals/portal.service';

@Component({
  selector: 'app-portal-list',
  templateUrl: './portal-list.component.html',
  styleUrls: ['./portal-list.component.sass'],
  providers: [PortalService]
})
export class PortalListComponent implements OnInit, OnDestroy {
	title = 'Dashboard Home';
	private req:any;
	portalList:[PortalItem];

  constructor(private _portal:PortalService) { }

  ngOnInit() {
  	this.req = this._portal.list().subscribe(data=>{
  		this.portalList = data as [PortalItem];
  	})
  }

  ngOnDestroy() {
  	this.req.unsubscribe();
  }

}
