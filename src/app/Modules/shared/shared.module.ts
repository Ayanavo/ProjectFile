import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

@NgModule({
	declarations: [SvgIconsComponent, ChatDialogComponent],
	imports: [
		CommonModule,
		NgbModule,
		CustomMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	exports: [
		CustomMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SvgIconsComponent,
		ChatDialogComponent,
	],
})
export class SharedModule {}
