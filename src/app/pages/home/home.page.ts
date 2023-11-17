import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { addToFavorite, removeFavorite } from 'src/app/store/actions/favorite.actions';
import { Favorite } from '../../models/favorite.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchForm: FormGroup | undefined

  constructor(public formBuilder:FormBuilder, private router: Router, private store: Store, private authService: AuthServiceService) { }

  ngOnInit() {
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
