import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDialogComponent } from './Components/chat-dialog/chat-dialog.component';

const routes: Routes = [
	{ path: '', redirectTo: 'chatbot', pathMatch: 'full' },
	{
		path: 'chatbot',
		component: ChatDialogComponent,
		pathMatch: 'full',
	},
	{ path: '**', redirectTo: 'chatbot' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChatRoutingModule {}
