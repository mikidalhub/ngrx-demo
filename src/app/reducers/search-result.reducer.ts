/**
 * Created by Admin on 3/16/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';
import {SearchComponent} from '../components/search/search.component';

import {SearchActions} from "../store/actions";
import {SearchResult} from "../models/search-result";

export const SearchResultReducer: ActionReducer<SearchResult[]> = (state: SearchResult[], action: Action) => {

    switch (action.type) {
        case SearchActions.LOAD_MOVIES_SUCCESS: {
            //TODO: use assign operator
            //return Object.assign({}, state, .action.payload);
            return action.payload;
        }
        default:
            return state;
    }

};