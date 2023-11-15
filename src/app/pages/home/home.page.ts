import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchForm: FormGroup | undefined

  constructor(public formBuilder:FormBuilder) { }

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
  addToFavorite() {

  }

  //delete to favorite
  removeFavorite() {

  }
}
