import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css', '../../../../assets/css/responsive.css'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit {
	constructor() { }

	ngOnInit() {

	}

	ngAfterViewInit(): void {
	}

}
