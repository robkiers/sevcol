import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractCameraService } from 'src/app/shared/services/abstract-camera.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-medical-scanner',
  templateUrl: './medical-scanner.component.html',
  styleUrls: ['./medical-scanner.component.scss']
})
export class MedicalScannerComponent implements OnInit {

  // imageString = '';
  // faceApiResponse: Observable<FaceRecognitionResponse>;
  // subscriptionKey: string;
  // mediaStream;

  // @ViewChild('video', { static: true }) private video: any;
  // /** Canvas for Video Snapshots */
  // @ViewChild('canvas', { static: true }) private canvas: any;

  // /** width and height of the active video stream */
  // private activeVideoSettings: MediaTrackSettings = null;

  // public get nativeVideoElement() {
  //   return this.video.nativeElement;
  // }



  @ViewChild('videoElement', { static: true }) videoElement: any;

  video: any;
  isPlaying = false;

  displayControls = true;

  constructor(
    // private faceRecognitionService: FaceRecognitionService,
    private cameraService: AbstractCameraService
  ) { }

  ngOnInit() {
    // this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }

  sound() {
    this.initCamera({ video: true, audio: true });
  }

  initCamera(config: any) {
    const browser = navigator as any;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      // this.video.src = window.URL.createObjectURL(stream);
      this.video.srcObject = stream;
      this.video.play();
    });
  }
  // video.srcObject = stream;
  // video.play();


  // takeImage() {
  //   this.cameraService.getPhoto().subscribe(image => {
  //     console.log('triggre');
  //     this.imageString = image;
  //   });


  //   this.cameraService.getPhoto().pipe(
  //     switchMap(base64Image => this.imageString = base64Image)
  //   );
  // }

  processImage() {
    // if (!this.subscriptionKey) {
    //   return;
    // }

    // this.faceApiResponse = this.cameraService.getPhoto().pipe(
    //   switchMap(base64Image => {
    //     this.imageString = base64Image;
    //     return this.faceRecognitionService.scanImage(
    //       this.subscriptionKey,
    //       base64Image
    //     );
    //   })
    // );
  }


  // private initWebcam(deviceId: string, userVideoTrackConstraints: MediaTrackConstraints) {
  //   const _video = this.nativeVideoElement;
  //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

  //     // merge deviceId -> userVideoTrackConstraints
  //     // const videoTrackConstraints = WebcamComponent.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);

  //     navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints as MediaStreamConstraints})
  //       .then((stream: MediaStream) => {
  //         this.mediaStream = stream;
  //         _video.srcObject = stream;
  //         _video.play();

  //         this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
  //         // const activeDeviceId: string = WebcamComponent.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);

  //         // this.cameraSwitched.next(activeDeviceId);

  //         // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
  //         // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
  //         this.detectAvailableDevices()
  //           .then(() => {
  //             this.activeVideoInputIndex = activeDeviceId ? this.availableVideoInputs
  //               .findIndex((mediaDeviceInfo: MediaDeviceInfo) => mediaDeviceInfo.deviceId === activeDeviceId) : -1;
  //             this.videoInitialized = true;
  //           })
  //           .catch(() => {
  //             this.activeVideoInputIndex = -1;
  //             this.videoInitialized = true;
  //           });
  //       })
  //       .catch((err: MediaStreamError) => {
  //         this.initError.next(<WebcamInitError>{ message: err.message, mediaStreamError: err });
  //       });
  //   } else {
  //     this.initError.next(<WebcamInitError>{ message: 'Cannot read UserMedia from MediaDevices.' });
  //   }
  // }

}
