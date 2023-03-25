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
      foodName: "Cheeseburger",
      foodDetails: "Cheeseburger, beef patty 180g",
      foodPrice: 200,
      foodImg: "https://unsplash.com/de/fotos/jh5XyK4Rr3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    }
  ]
}
