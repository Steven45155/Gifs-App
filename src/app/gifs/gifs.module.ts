import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchboxComponent } from './components/search-box/search-box.component';
import { CardBosComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardBosComponent
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
