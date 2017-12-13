import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.sass']
})
export class MessageDetailComponent implements OnInit {
	username = 'sebas'

	message = {
		from: 'seb',
		contents: 'wassup'
	}

  constructor() { }

  ngOnInit() {
  }

}
