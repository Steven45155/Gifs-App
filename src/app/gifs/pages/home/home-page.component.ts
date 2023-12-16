import { Component } from '@angular/core';
import { GifsModule } from '../../gifs.module';
import { GitsService } from '../../service/gifs.service';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor ( private GifsService:GitsService ){}

  get gifs():Gif[] {
    return this.GifsService.gifList;
  }
}
