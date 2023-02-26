import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatModule } from '../chat/chat.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgbModule,
		CustomMaterialModule,
		BrowserAnimationsModule,
		FormsModule,
		ChatModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	exports: [
		CustomMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
})
export class SharedModule {}
