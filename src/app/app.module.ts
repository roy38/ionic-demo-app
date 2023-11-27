import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { favoriteReducer } from './store/reducers/favorite.reducers';
import { horseReducer } from './store/reducers/horse.reducers';
import { jockeyReducer } from './store/reducers/jockey.reducers';
import { trainerReducer } from './store/reducers/trainer.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    StoreModule.forRoot({favorites: favoriteReducer, horses: horseReducer, jockeys: jockeyReducer, trainers: trainerReducer}), StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
