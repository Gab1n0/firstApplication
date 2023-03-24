import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //foodDetails
  foodDetails = [
    {
      id: 1,
      foodName: "xy",
      foodDetails: "xyzzzz",
      foodPrice: 200,
    }
  ]
}
