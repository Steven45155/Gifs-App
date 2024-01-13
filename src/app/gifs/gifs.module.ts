import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchboxComponent } from './components/search-box/search-box.component';
import { CardBosComponent } from './components/card-list/card-list.component';
import { Gifs_CardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardBosComponent,
    Gifs_CardComponent
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
