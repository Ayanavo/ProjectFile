import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		pathMatch: 'full',
	},
	{ path: '**', redirectTo: 'chatbot' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
