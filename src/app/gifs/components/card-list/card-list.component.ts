
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: "./card-list.component.html"
})

export class CardBosComponent {

  @Input()
  public gifs: Gif[]=[]

}
