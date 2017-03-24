/**
 * Created by Admin on 3/16/2017.
 */
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {SearchComponent} from "../components/search/search.component";

@Injectable()
export class SearchActions {

    static LOAD_MOVIES = 'Load Movies';
    loadMovies(query): Action {
        return {
            type: SearchActions.LOAD_MOVIES,
            payload: query
        };
    }

    static LOAD_GEOLOCATION = 'Load Geolocation';
    loadGeolocation(): Action {
        return {
            type: SearchActions.LOAD_GEOLOCATION
        };
    }

    static LOAD_GEOLOCATION_SUCCESS = 'Load Geolocation Success';
    loadGeoLocationSuccesss(location): Action {
        console.log(location)
        return {
            type: SearchComponent.StoreEvents.position,
            payload: {position:location}
        };
    }

    static LOAD_MOVIES_SUCCESS = 'Load Movies Success';
    loadMoviesSuccess(movies): Action {
        return {
            type: SearchActions.LOAD_MOVIES_SUCCESS,
            payload: movies
        };
    }

}