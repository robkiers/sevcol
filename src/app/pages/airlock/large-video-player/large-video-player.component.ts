import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-large-video-player',
  templateUrl: './large-video-player.component.html',
  styleUrls: ['./large-video-player.component.scss']
})
export class LargeVideoPlayerComponent implements AfterViewInit {

  @ViewChild('videoElement', { static: false }) videoElement: any;
  video: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngAfterViewInit() {
    this.video = this.videoElement.nativeElement;
    this.video.srcObject = this.data;
    this.video.play();

  }

}
