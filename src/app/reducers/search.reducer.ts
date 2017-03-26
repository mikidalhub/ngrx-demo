import { ActionReducer, Action } from '@ngrx/store';
import {SearchComponent} from '../components/search/search.component';

import {CurrentSearch} from "../models/current-search";
import {SearchActions} from "../store/actions";

export type CurrentSearchState = CurrentSearch;
const initState = {
  name: '',
  location: {
    latitude: 0,
    longitude: 0
  },
  radius: 0,
  error: ''
}

export const SearchReducer: ActionReducer<CurrentSearch> = (state: CurrentSearch = initState, action: Action) => {

    switch (action.type) {
        case SearchComponent.StoreEvents.text:
            return Object.assign({}, state, {
                name: action.payload.text
            });
        case  SearchComponent.StoreEvents.position:
            return Object.assign({}, state, {
                location: {
                    latitude: action.payload.position.latitude,
                    longitude: action.payload.position.longitude
                },
                error: null
            });
        case  SearchComponent.StoreEvents.radius:
            return Object.assign({}, state, {
                radius: action.payload.radius
            });
        case  SearchComponent.StoreEvents.off:
            return Object.assign({}, state, {
                location: null,
                error: null
            });
        case  SearchComponent.StoreEvents.error:
            return Object.assign({}, state, {
                error: action.payload.message
            });
        default:
            return state;
    }
};
