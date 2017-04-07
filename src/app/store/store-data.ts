/**
 * Created by Admin on 3/22/2017.
 */

import {CurrentSearch} from "../models/current-search";
import {SearchResult} from "../models/search-result";
import {SearchResultState} from "../reducers/search-result.reducer";
import {CurrentSearchState} from "../reducers/search.reducer";
import {initialResultState} from "../reducers/search-result.reducer";
import {initialSearchState} from "../reducers/search.reducer";

/**
 * The store data is a small in Memory database in the client side
 * The sore is a centralized service that contains the app state and can be injected anywhere
 * The store is an observable of the application state
 */

export interface StoreData{
  searchResult: SearchResultState;
};

export const INITIAL_STORE_DATA: StoreData = {
  searchResult: initialResultState
};
