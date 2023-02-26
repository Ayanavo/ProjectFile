import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './Components/chat-dialog/chat-dialog.component';

@NgModule({
	declarations: [ChatDialogComponent],
	imports: [CommonModule, ChatRoutingModule, FormsModule],
	exports: [ChatDialogComponent],
	providers: [ChatService],
})
export class ChatModule {}
