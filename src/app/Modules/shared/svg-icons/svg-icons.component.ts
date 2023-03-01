import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-svg-icons',
	templateUrl: './svg-icons.component.html',
	styleUrls: ['./svg-icons.component.css'],
})
export class SvgIconsComponent implements OnInit, OnChanges {
	@Input()
	public name?: string;
	@Input() public fill: string = 'black';

	public svgIcon: any;
	constructor(
		private httpClient: HttpClient,
		private sanitizer: DomSanitizer
	) {}

	ngOnInit(): void {}

	ngOnChanges(): void {
		if (!this.name) {
			this.svgIcon = '';
			return;
		}
		this.httpClient
			.get(`assets/icons/${this.name}.svg`, { responseType: 'text' })
			.subscribe((value) => {
				this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
			});
	}
}
