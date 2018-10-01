import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  

  private API_KEY='10240012-3f9ee1da9e685f448195632cd';
  private API_URL:string = 'https://pixabay.com/api/videos/?key=';
  constructor(private _http:Http) { }

  getVideoData(query:string){
     return this._http.get(this.API_URL+this.API_KEY+"&q="+query).map(res=>res.json());
  }
}
