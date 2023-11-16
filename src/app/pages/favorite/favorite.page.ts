import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectFavorite } from 'src/app/store/selectors/favorite.selectors';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  favorites: any[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectFavorite).subscribe(res => {
      this.favorites = res.favorites
    })
  }

}
