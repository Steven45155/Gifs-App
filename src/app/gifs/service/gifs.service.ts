
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interface/gif.interface';

@Injectable({providedIn: 'root'})
export class GitsService {

  public gifList: Gif []=[]

  private _tagshistory: string[]=[];
  private apiKay:string='dGBGcw06681fIm4PoydqCVilPW26U9Hd'
  private serviceUrl:string='https://api.giphy.com/v1/gifs'

  constructor( private hhtp:HttpClient ) {
    this.loadLocalStore();
    console.log("Gifs Service Rady");
    if (this._tagshistory.length===0) {
      this.searchtag("Bienvenido")
    } else {
      const Ultimo = this._tagshistory[0]
      this.searchtag(Ultimo)
    }
  }

  get tagHistorys(){
    return [...this._tagshistory]
  }

  private organizeHistory ( tag:string ){
    this._tagshistory=this._tagshistory.filter((array) => array !="bienvenido")
    tag=tag.toLowerCase();


    if( this._tagshistory.includes(tag)){
      this._tagshistory=this._tagshistory.filter( (oldTag) => oldTag !=tag)
    }

    this._tagshistory.unshift(tag);
    this._tagshistory= this.tagHistorys.splice(0.01)
    this.saveLocalStorage()
  }

  public saveLocalStorage():void{
    localStorage.setItem( 'History', JSON.stringify( this._tagshistory ) )
  }

  private loadLocalStore(){
    if( !localStorage.getItem('History')) return;

    this._tagshistory = JSON.parse(localStorage.getItem( 'History' ) ! )

  }

  LimitHis(){
    if (this._tagshistory.length=11) {
      this._tagshistory=this._tagshistory.filter((array)=>array!=this._tagshistory[10])
    } else {

    }
  }

  searchtag( tag:string ){
    this.LimitHis()

    if (tag=="" ) return;
      this.organizeHistory(tag)

      const params=new HttpParams()
      .set('api_key', this.apiKay)
      .set('limit', 10)
      .set('q', tag)

      this.hhtp.get<SearchResponse>(`${ this.serviceUrl }/search`, { params }).subscribe( resp=>{
        this.gifList= resp.data
        // console.log( {imagen:this.gifList} );

      })
  }
}
