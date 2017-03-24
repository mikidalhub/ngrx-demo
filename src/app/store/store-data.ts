/**
 * Created by Admin on 3/22/2017.
 */

import {CurrentSearch} from "../models/current-search";
import {SearchResult} from "../models/search-result";
import {INITIAL_UI_STATE} from "./ui-state";
/**
 * The store data is a small in Memory database in the client side
 * The sore is a centralized service that contains the app state and can be injected anywhere
 * The store is an observable of the application state
 */
export interface StoreData{
    search:{[key:string]: CurrentSearch}; //key is the name
    result:{[key:string]: SearchResult}; //key is the id
}

export const INITIAL_STORE_DATA: StoreData = {
    search: {}, //key is the name
    result: {} //key is the id
}