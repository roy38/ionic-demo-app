import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from 'src/app/my-modal/my-modal.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  categoryForm: FormGroup | undefined

  constructor(private modalCtrl: ModalController, public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      horseName: ['', [Validators.required]],
      jockey: ['', [Validators.required]],
      trainer: ['', [Validators.required]]
    })
  }

  get errorControl () {
    return this.categoryForm?.controls
  }

  // show modal
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'small-modal'
    });

    await modal.present();
  }

  // add category
  add() {
    if(this.categoryForm?.valid) {
      
    }
  }

  // edit category
  edit() {

  }

  // remove category
  delete() {

  }
}
