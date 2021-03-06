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

    static LOAD_EMPTY_MOVIES = 'Load Empty Movies';
    loadEmptyMovies(): Action {
        return {
            type: SearchActions.LOAD_EMPTY_MOVIES,
            payload: []
        };
    }

    static LOAD_GEOLOCATION = 'Load Geolocation';
    loadGeolocation(): Action {
        return {
            type: SearchActions.LOAD_GEOLOCATION
        };
    }

//----------------------- SUCCESS ACTIONS----------------------------------------------------------
    static LOAD_GEOLOCATION_SUCCESS = 'Load Geolocation Success';
    loadGeoLocationSuccesss(location): Action {
        return {
            type: SearchComponent.SearchEvents.POSITION,
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