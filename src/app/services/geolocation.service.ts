import { Injectable } from '@angular/core';
import {SearchActions} from "../store/actions";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GeolocationService {

    onLocation():Observable<any> {
        return Observable.create(function (observer) {
            //get the location and give to observer's next
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
