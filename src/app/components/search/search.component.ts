/**
 * This is StateLess component, it just dispatch actions
 * Actually if it's need some info then it just subscribe for it on store
 */

import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CurrentSearch} from "../../models/current-search";
import {SearchResult} from "../../models/search-result";
import {SearchActions} from '../../store/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private state:CurrentSearch;
  private currentSearch$: Observable<CurrentSearch>;
  private searchResult$: Observable<SearchResult[]>;
  private disableSearch = false;
  private errorEmptySearch = true;
  private errorLocation = false;
  private errorLocationMessage = '';


  static StoreEvents = {
    text: 'SearchComponent:TEXT_CHANGED',
    position: 'SearchComponent:POSITION',
    radius: 'SearchComponent:RADIUS',
    off: 'SearchComponent:OFF',
    error: 'SearchComponent:ERROR'
  };

  constructor(private store:Store<any>) {
    this.currentSearch$ = this.store.select<CurrentSearch>('currentSearch'); //get the latest info about the latest search subject
    this.searchResult$ = this.store.select<SearchResult[]>('searchResult');
  }

  /**
   * Subscribe to the last status of search object, if the typed text on you make the search
   * Subscribe to the last status of the result as well and show in a list
   */
  ngOnInit() {
    this.currentSearch$.subscribe((state: CurrentSearch) => {
      this.state = state;
      if (state && state.name && state.name.length > 0) {
        this.disableSearch = false;
        this.errorEmptySearch = false;
        this.dispatchAction(SearchActions.LOAD_MOVIES,state);
      } else {
        this.disableSearch = true;
        this.errorEmptySearch = true;
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
    this.dispatchAction(SearchComponent.StoreEvents.radius,payload);
  }

  /**
   * Dispatch the typed text
   * @param text
     */
  getText(text): void {
    let payload = {text: text}
    this.dispatchAction(SearchComponent.StoreEvents.text,payload);
  }

  /**
   * Dispatch the geolocatio
   * @param active
     */
  getLocation(active): void {
     if(active){
       this.dispatchAction(SearchActions.LOAD_GEOLOCATION);
     } else {
       this.dispatchAction(SearchComponent.StoreEvents.off, null );
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
