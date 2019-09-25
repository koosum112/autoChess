import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	games = [];
	
	constructor() { }

	ngOnInit() {
		this.games = [
			{ url: './LOL', title: 'LOL', logo: '/assets/img/LOL/logo.png'},
			{ url: './DOTA', title: 'DOTA', logo: '/assets/img/DOTA/logo.jpg' }
		];
	}
}
