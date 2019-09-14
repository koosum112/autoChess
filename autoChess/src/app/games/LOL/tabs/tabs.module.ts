import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { RecommendationPageModule } from '../recommendation/recommendation.module';
import { HerosPageModule } from '../heros/heros.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabsRoutingModule,
    RecommendationPageModule,
    HerosPageModule
  ]
})
export class TabsModule { }
