import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './Components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
