import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from 'src/app/Modules/shared/chat-dialog/chat-dialog.component';

@Component({
	selector: 'layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
	constructor(public dialog: MatDialog) {}

	openDialog(): void {
		const dialogRef = this.dialog.open(ChatDialogComponent, {
			width: '250px',
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
