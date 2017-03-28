import {CurrentSearch} from "../models/current-search";
import {SearchResult} from "../models/search-result";
import {CurrentSearchState} from "../reducers/search.reducer";
import {initialSearchState} from "../reducers/search.reducer";
/**
 * Created by Admin on 3/22/2017.
 */

export interface UiState{
  currentSearch: CurrentSearchState;
}

export const INITIAL_UI_STATE:UiState = {
    currentSearch:initialSearchState
};
