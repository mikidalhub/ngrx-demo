import {CurrentSearch} from "../models/current-search";
import {SearchResult} from "../models/search-result";
/**
 * Created by Admin on 3/22/2017.
 */
export interface UiState{
    currentSearch: CurrentSearch;
    searchResult:SearchResult;
}

export const INITIAL_UI_STATE = {
    currentSearch:undefined,
    searchResult: undefined
};