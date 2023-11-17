import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { MyModalPage } from 'src/app/my-modal/my-modal.page';
import { addHorse, removeHorse } from 'src/app/store/actions/horse.actions';
import { addJockey, removeJockey } from 'src/app/store/actions/jockey.actions';
import { addTrainer, removeTrainer } from 'src/app/store/actions/trainer.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  categoryForm: FormGroup | undefined

  constructor(private modalCtrl: ModalController, public formBuilder:FormBuilder, private store: Store) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      horse: ['', [Validators.required]],
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
      this.store.dispatch(addHorse({ name: this.categoryForm.value.horse }))
      this.store.dispatch(addJockey({ name: this.categoryForm.value.jockey }))
      this.store.dispatch(addTrainer({ name: this.categoryForm.value.trainer }))
    }
  }

  // edit category
  async edit(category?: []) {
    // open modal
    // const modal = await this.modalCtrl.create({
    //   component: MyModalPage,
    //   cssClass: 'small-modal'
    // });

    // await modal.present();
  }

  // update category
  update(item?: string) {
    // if (item.category == 'horse') {
    //   this.store.dispatch(updateHorse({ item }))
    // }

    // if (item.category == 'jockey') {
    //   this.store.dispatch(updateJockey({ item }))
    // }

    // if (item.category == 'trainer') {
    //   this.store.dispatch(updateTrainer({ item }))
    // }
  }

  // remove category
  delete(id?: string, category?: string) {
    if (category == 'horse') {
      this.store.dispatch(removeHorse({ id: id }))
    }

    if (category == 'jockey') {
      this.store.dispatch(removeJockey({ id: id }))
    }

    if (category == 'trainer') {
      this.store.dispatch(removeTrainer({ id: id }))
    }
  }
}
