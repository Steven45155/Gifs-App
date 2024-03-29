import { Component, Input, OnInit} from '@angular/core';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: 'gifs-card.component.html',
  styleUrls: ['gifs-card.component.css']
})

export class Gifs_CardComponent implements OnInit {
  constructor() { }

  @Input()
  public gifs!:Gif;

  ngOnInit(): void {
    if (!this.gifs) throw new Error("Gif property is required");

  }
}
