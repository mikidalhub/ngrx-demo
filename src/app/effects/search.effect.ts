/**
 * Created by Admin on 3/16/2017.
 */
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {SearchActions} from '../store/actions';
import {YoutubeService} from '../services/youtube.service';
import {GeolocationService} from '../services/geolocation.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchEffects {
    constructor(private update$:Actions,
                private searchActions:SearchActions,
                private svc:YoutubeService,
                private geosvc:GeolocationService
        ) {}

    @Effect() loadMovies$ = this.update$
        .ofType(SearchActions.LOAD_MOVIES)
        .map(action => action.payload)
        .switchMap(currentSearch => this.svc.search(currentSearch))
        .map(videos => this.searchActions.loadMoviesSuccess(videos))
        .catch(error => {
            console.error('Error at load movies', error);
            return Observable.empty();
        });

    @Effect() loadGeolocation$ = this.update$
        .ofType(SearchActions.LOAD_GEOLOCATION)
        .switchMap(() => this.geosvc.onLocation())
        .map(position => this.searchActions.loadGeoLocationSuccesss(position));

}
//this.searchActions.loadMoviesSuccess(videos)