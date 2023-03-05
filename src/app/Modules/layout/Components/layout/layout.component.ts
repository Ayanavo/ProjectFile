import { Overlay } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from 'src/app/Modules/shared/chat-dialog/chat-dialog.component';

@Component({
	selector: 'layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	constructor(public dialog: MatDialog, private overlay: Overlay) {}

	openDialog(): void {
		const scrollStrategy = this.overlay.scrollStrategies.reposition();
		const dialogRef = this.dialog.open(ChatDialogComponent, {
			autoFocus: false,
			width: '350px',
			height: '420px',
			disableClose: true,
			position: {
				bottom: '50px',
				right: '50px',
			},
			backdropClass: 'backdropBackground',
			panelClass: 'dialogContainer',
			scrollStrategy,
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
