import { Injectable } from '@angular/core';
import {SearchActions} from "../store/actions";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GeolocationService {

    onLocation():Observable<any> {
        console.log('here')
        return Observable.create(function (observer) {
            //// Yield a single value and complete
            navigator.geolocation.getCurrentPosition((position:any) => {
                return observer.next({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });

            // Any cleanup logic might go here
            return function () {
                console.log('disposed')
            }
        });
  }



  //onRadius($event: any) {
  //  const radius = parseInt($event.target.value, 10);
  //  //this.store.dispatch({
  //  //  type: SearchActions.StoreEvents.radius,
  //  //  payload: {
  //  //    radius: radius
  //  //  }
  //  //});
  //}

}
