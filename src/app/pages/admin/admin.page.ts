import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from 'src/app/my-modal/my-modal.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // show modal
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'small-modal'
    });

    await modal.present();
  }

  // edit category
  edit() {

  }

  // remove category
  delete() {

  }
}
