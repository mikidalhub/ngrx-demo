import { ActionReducer, Action } from '@ngrx/store';
import {SearchComponent} from '../components/search/search.component';

import {CurrentSearch} from "../models/current-search";
import {SearchActions} from "../store/actions";

export type CurrentSearchState = CurrentSearch;
export const initialSearchState:CurrentSearchState = {
  name: '',
  location: {
      latitude: 0,
      longitude: 0
  },
  radius: 0,
  error: ''
};

/**
 * This is the Reducer of the type <CurrentSearch>, that is an object, model in the Store that looks like the initState
 * @param state
 * @param action
 * @returns {any}
 * @constructor
 */
export const SearchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch = initialSearchState, action: Action) => {

    switch (action.type) {
        case SearchComponent.SearchEvents.TEXT:
            return Object.assign({}, state, {
                name: action.payload.text
            });
        case  SearchComponent.SearchEvents.POSITION:
            return Object.assign({}, state, {
                location: {
                    latitude: action.payload.position.latitude,
                    longitude: action.payload.position.longitude
                },
                error: null
            });
        case  SearchComponent.SearchEvents.RADIUS:
            return Object.assign({}, state, {
                radius: action.payload.radius
            });
        case  SearchComponent.SearchEvents.OFF:
            return Object.assign({}, state, {
                location: null,
                error: null
            });
        case  SearchComponent.SearchEvents.ERROR:
            return Object.assign({}, state, {
                error: action.payload.message
            });
        default:
            return state;
    }
};
