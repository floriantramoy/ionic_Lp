import {Component, OnInit} from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';

@Component({
  selector: 'app-tab4-profile',
  templateUrl: './tab4-profile.page.html',
  styleUrls: ['./tab4-profile.page.scss'],
})
export class Tab4ProfilePage implements OnInit {

  userId: string;
  name: string;
  firstName: string;
  email: string;
  phone: string;
  ville: string;
  contrat: string;
  emploi: string;
  localisation: string;
  dispo: string;
  image: string;
  public photos: picture[] = [];


  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.name = user.userName;
      this.firstName = user.userFirstName;
      this.email = user.userEmail;
      this.phone = user.userPhone;
      this.ville = user.userVille;
      this.contrat = user.userVille;
      this.emploi = user.userEmploi;
      this.localisation = user.userLocalisation;
      this.dispo = user.userDispo;
      this.image = user.userPhoto;
    });
  }

  async updateProfile() {
    const loading = await this.loadingCtrl.create({
      message: 'Updating..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afs.collection('user').doc(this.userId).set({
      userName: this.name,
      userFirstName: this.firstName,
      userEmail: this.email,
      userPhone: this.phone,
      userVille: this.ville,
      userContrat: this.contrat,
      userEmploi: this.emploi,
      userLocalisation: this.localisation,
      userDispo: this.dispo,
      editAt: Date.now()
    }, {merge: true})
      .then(() => {
        loading.dismiss();
        this.toast('Update Success!', 'success');
        this.router.navigate(['/profile']);
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  public goToLogOut() {
    this.router.navigate(['logout']);
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
