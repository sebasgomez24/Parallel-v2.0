import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PortalItem } from '../portals/portal';


@Component({
  selector: 'app-dashboard-topnav',
  templateUrl: './dashboard-topnav.component.html',
  styleUrls: ['./dashboard-topnav.component.sass']
})
export class DashboardTopnavComponent implements OnInit {
	username = "seb";
	query:string;

	@Input()
	name:string;
	description:string;

	addName:string;
	addDescription:string;

	portal: PortalItem = {
		slug: 'slugify',
		name: name,
	}

  constructor(private router:Router) { }

  ngOnInit() {
  	if (this.name, this.description){
  		this.name = this.addName
  		this.description = this.addDescription
    }
  }

  newPortal(event, formData){
  	console.log(event)
    console.log(formData.value)
    let newName = formData.value['name']

  }

}
