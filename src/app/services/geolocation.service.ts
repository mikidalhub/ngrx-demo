import { Injectable } from '@angular/core';
import {SearchActions} from "../store/actions";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GeolocationService {

    onLocation():Observable<any> {
        return Observable.create((observer) => {
            //get the location and give to observer's next
            navigator.geolocation.getCurrentPosition((position:any) => {
                return observer.next({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });

            // Any cleanup logic might go here
            return () => {
                console.log('disposed')
            }
        });
  }

}
