import {StoreData} from "./store-data";
import {UiState} from "./ui-state";
import {INITIAL_UI_STATE} from "./ui-state";
import {INITIAL_STORE_DATA} from "./store-data";

export interface ApplicationState{
  currentSearch: UiState;
  searchResult: StoreData;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  currentSearch: INITIAL_UI_STATE,
  searchResult: INITIAL_STORE_DATA
}
