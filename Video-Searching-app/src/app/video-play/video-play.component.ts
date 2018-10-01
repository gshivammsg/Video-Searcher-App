import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent implements OnInit {

  videos:any[];

  constructor(private _videoService:VideoService) { }

  ngOnInit() {
  }

  handleSuccess(data){
    console.log(data);
    this.videos = data.hits;
  }

  handleError(error){
   console.log(error);
  }

  searchVideo(query:string){
    this._videoService.getVideoData(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      ()=>console.log('Request completed')
    )
  }

}
