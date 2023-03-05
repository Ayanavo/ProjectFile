import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'chat-dialog',
	templateUrl: './chat-dialog.component.html',
	styleUrls: ['./chat-dialog.component.scss'],
})
export class ChatDialogComponent implements OnInit {
	public chat = new FormControl('');
	public globaltime: string = new Date().toLocaleTimeString('en-gb', {
		hour12: false,
	});
	public globaldate: string = new Date().toLocaleDateString('en-gb');
	public Master: any[] = [{ date: this.globaldate, msg: [] }];
	i = 0;
	public activetext: any = '';

	ngOnInit(): void {
		this.Master = JSON.parse(
			localStorage.getItem('chat_log') ||
				JSON.stringify([{ date: this.globaldate, msg: [] }])
		);
		this.chat.valueChanges.subscribe((x) => {
			this.activetext = x;
		});
	}

	getTextAll() {
		if (this.Master[0]['msg'].length === 0) {
			this.Master[0]['msg'].push({
				text: this.chat.value,
				time: this.globaltime,
			});
		} else {
			////now the fun begins
			if (this.globaldate == this.Master[this.i]['date']) {
				this.Master[this.i]['msg'].push({
					text: this.chat.value,
					time: this.globaltime,
				});
			} else {
				this.Master.push({ date: this.globaldate, msg: [] });

				this.Master[this.i + 1]['msg'].push({
					text: this.chat.value,
					time: this.globaltime,
				});
				this.i += 1;
			}
		}

		this.chat.reset();
		localStorage.setItem('chat_log', JSON.stringify(this.Master));
	}
}
