/**
 * Created by Miki Baczo on 3/16/2017.
 */
import { ActionReducer, Action } from '@ngrx/store';
import {SearchComponent} from '../components/search/search.component';

import {SearchActions} from "../store/actions";
import {SearchResult} from "../models/search-result";
//const initState = [];

export type SearchResultState = SearchResult[];
export const initialResultState:SearchResultState = []

/**
 * This is the Reducer of the search result array, actually this is a <SearchResult> type model in the Store
 * @param state
 * @param action
 * @returns {any}
 * @constructor
 */
export const SearchResultReducer: ActionReducer<SearchResult[]> = (state: SearchResult[] = initialResultState, action: Action) => {

    console.log('in SearchResultReducer', action.type);
    switch (action.type) {
        case SearchActions.LOAD_MOVIES_SUCCESS: {
            return action.payload;
        }
        default:
            return state;
    }
};

