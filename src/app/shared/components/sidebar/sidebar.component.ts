import { Component, Input, Injectable } from '@angular/core';
import { GitsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor ( private Inyeccion:GitsService ){}

  get tags (){
    return this.Inyeccion.tagHistorys

  }

  Nombre( Nombre:string){
    this.Inyeccion.searchtag(Nombre)
  }

}
