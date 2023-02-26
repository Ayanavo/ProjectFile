import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatModule } from '../chat/chat.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './Components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, LayoutRoutingModule, ChatModule, SharedModule],
})
export class LayoutModule {}
