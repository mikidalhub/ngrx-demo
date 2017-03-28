import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Store, StoreModule, Action, combineReducers} from "@ngrx/store";
import { RouterModule, Routes } from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchProximityComponent } from './components/search-proximity/search-proximity.component';
import { YoutubeService } from "./services/youtube.service";
import { GeolocationService } from "./services/geolocation.service";
import { SearchReducer } from "./reducers/search.reducer";
import { SearchResultReducer } from "./reducers/search-result.reducer";
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HsliderComponent } from './components/hslider/hslider.component';
import {SearchEffects} from './effects/search.effect';
import {SearchActions} from "./store/actions";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import {INITIAL_APPLICATION_STATE} from "./store/application-state";

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchProximityComponent,
    SearchComponent,
    CarouselComponent,
    HsliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      { path: 'search', component: SearchComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'tabs', component: HsliderComponent },
    ]),
    StoreModule.provideStore(storeFreeze, compose(combineReducers({
                                currentSearch: SearchReducer,
                                searchResult: SearchResultReducer }), INITIAL_APPLICATION_STATE )),
    EffectsModule.run(SearchEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [SearchActions,YoutubeService, GeolocationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
