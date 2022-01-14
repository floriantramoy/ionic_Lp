import {Component, OnInit} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {Filesystem, Directory} from '@capacitor/filesystem';
import {Storage} from '@capacitor/storage';

@Component({
  selector: 'app-tab5-photo',
  templateUrl: './tab5-photo.page.html',
  styleUrls: ['./tab5-photo.page.scss'],
})
export class Tab5PhotoPage implements OnInit {
  public photos: picture[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  async addNewPhoto() {
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: '',
      webviewPath: capture.webPath
    });
  }

  takePhoto() {
    this.addNewPhoto();
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface picture{
  filepath: string;
  webviewPath: string;
}
