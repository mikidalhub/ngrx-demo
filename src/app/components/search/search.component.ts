/**
 * This is StateLess component, it just dispatch actions
 * Actually if it's need some info then it just subscribe for it on store
 * created by Miki Baczo
 */

import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CurrentSearch} from "../../models/current-search";
import {SearchResult} from "../../models/search-result";
import {SearchActions} from '../../store/actions';
import {ApplicationState} from "../../store/application-state";
import {UiState} from "../../store/ui-state";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private state:CurrentSearch;
  private currentSearch$: Observable<CurrentSearch>;
  //private uiState$: Observable<UiState>;
  private searchResult$: Observable<SearchResult[]>;
  private disableSearch = false;
  private errorEmptySearch = true;
  private errorLocation = false;
  private errorLocationMessage = '';

  static SearchEvents = {
    TEXT: 'TEXT_CHANGED',
    POSITION: 'POSITION_CHANGED',
    RADIUS: 'RADIUS_CHANGED',
    OFF: 'OFF_LOCATION',
    ERROR: 'ERROR'
  };

  constructor(private store:Store<any>, private storeApp:Store<ApplicationState>) {
    storeApp.subscribe(state => {
      console.log(state)
    })

  //  this.uiState$ = this.storeApp.select<UiState>('uiState'); //get the latest info about the latest search subject
    this.currentSearch$ = this.store.select<CurrentSearch>('currentSearch'); //get the latest info about the latest search subject
    this.searchResult$ = this.store.select<SearchResult[]>('searchResult');
  }


  /**
   * Subscribe to the last status of search object, if the typed text on you make the search
   * Subscribe to the last status of the result as well and show in a list
   */
  ngOnInit() {
    //this.uiState$.subscribe((state: UiState) => {
    //  console.log('UISTATE', state);
    //})
    this.currentSearch$.subscribe((state: CurrentSearch) => {
      this.state = state;
      if (state && state.name && state.name.length > 0) {
        this.disableSearch = false;
        this.errorEmptySearch = false;
        this.dispatchAction(SearchActions.LOAD_MOVIES,state);
      } else {
        this.disableSearch = true;
        this.errorEmptySearch = true;
        //this.dispatchAction(SearchActions.LOAD_EMPTY_MOVIES,[]);
      }
      if (state && state.error) {
        this.errorLocation = true;
        this.errorLocationMessage = state.error;
      } else {
        this.errorLocation = false;
      }
    });
  }

  /**
   * Come from dummy sub component, dispatch towards SearchReducer
   * @param radius
     */
  getRadius(radius):void {
    let payload = {radius: radius};
    this.dispatchAction(SearchComponent.SearchEvents.RADIUS,payload);
  }

  /**
   * Dispatch the typed text
   * @param text
     */
  getText(text): void {
    let payload = {text: text}
    this.dispatchAction(SearchComponent.SearchEvents.TEXT,payload);
  }

  /**
   * Dispatch the geolocatio
   * @param active
     */
  getLocation(active): void {
     if(active){
       this.dispatchAction(SearchActions.LOAD_GEOLOCATION);
     } else {
       this.dispatchAction(SearchComponent.SearchEvents.OFF, null );
     }
  }

  /**
   * The store's dispatch that wait for a type and payload
   * @param type
   * @param payload
     */
  dispatchAction(type:string, payload?:any){
    this.store.dispatch({
      type: type,
      payload:payload
    });
  }
}
