import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css', '../../../../assets/css/responsive.css'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit {

	public loadScript(url) {
		let script = document.createElement('script');
		script.src = url;
		document.body.appendChild(script);
	  }
	
	  ngOnInit() {
		
	  }
	
	  ngAfterViewInit(): void {
	  }

}
