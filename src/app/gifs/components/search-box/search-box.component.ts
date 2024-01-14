import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  styleUrls: ['search-box.component.css'],
  template: `

  <h5>Buscar:</h5>
  <div id="main">
  <input type="text"
  id="search"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTaginput>
  </div>`

})

export class SearchboxComponent {

  @ViewChild('txtTaginput')
  tagInput!: ElementRef <HTMLInputElement>

  constructor( private gifsService:GitsService ) { }

  searchTag (  ){
    const newtag=this.tagInput.nativeElement.value
    this.gifsService.searchtag( newtag )
    this.tagInput.nativeElement.value='';


  }
}
