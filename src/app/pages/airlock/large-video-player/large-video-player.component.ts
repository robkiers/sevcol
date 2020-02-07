import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-large-video-player',
  templateUrl: './large-video-player.component.html',
  styleUrls: ['./large-video-player.component.scss']
})
export class LargeVideoPlayerComponent implements OnInit {

  @ViewChild('videoElement', { static: true }) videoElement: any;
  video: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.video.srcObject = this.data;

  }

}
