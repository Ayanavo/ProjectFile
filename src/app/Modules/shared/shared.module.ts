import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatModule } from '../chat/chat.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgbModule,
		CustomMaterialModule,
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
