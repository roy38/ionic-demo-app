import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { addToFavorite, removeFavorite } from 'src/app/store/actions/favorite.actions';
import { Favorite } from '../../models/favorite.model'
import { selectHorse } from 'src/app/store/selectors/horse.selectors';
import { selectJockey } from 'src/app/store/selectors/jockey.selectors';
import { selectTrainer } from 'src/app/store/selectors/trainer.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  horses: any[] = []
  jockeys: any[] = []
  trainers: any[] = []
  searchForm: FormGroup | undefined

  constructor(public formBuilder:FormBuilder, private router: Router, private store: Store, private authService: AuthServiceService) { }

  ngOnInit() {

    this.store.select(selectHorse).subscribe(res => {
      this.horses = res.horses
    })

    this.store.select(selectJockey).subscribe(res => {
      this.jockeys = res.jockeys
    })

    this.store.select(selectTrainer).subscribe(res => {
      this.trainers = res.trainers
    })

    this.searchForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
  }

  get errorControl () {
    return this.searchForm?.controls
  }

  //search base on category
  search() {
    if(this.searchForm?.valid) {
      
    }
  }

  // insert to favorite
  addToFavorite(name?: string) {
    this.store.dispatch(addToFavorite({ name: name }))
  }

  //delete to favorite
  removeFavorite(favorite?: Favorite) {
    this.store.dispatch(removeFavorite({ id: favorite.id }))
  }

  async logoutUser() {
    const user = await this.authService.logoutUser();
    if (user) {
      this.router.navigate(['login'])
    }
  }
}
