import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.sass']
})
export class DashboardSidenavComponent implements OnInit {
	user = "Sebastian";
  constructor() { }

  ngOnInit() {
  }

}
