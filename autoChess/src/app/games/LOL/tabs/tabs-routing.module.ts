import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
	{
		path: './information',
		component: TabsComponent,
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				children: [{ path: '', loadChildren: '../recommendation/recommendation.module#RecommendationPageModule' }]
			},
			{
				path: 'heros',
				children: [{ path: '', loadChildren: '../heros/heros.module#HerosPageModule' }]
			}
		]
	},
	{
		path: '',
		redirectTo: './',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }
