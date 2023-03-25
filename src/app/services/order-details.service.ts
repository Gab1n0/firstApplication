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
      foodPrice: 14.90,
      foodImg: "https://unsplash.com/de/fotos/jh5XyK4Rr3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      foodAlt: "cheeseburger"
    },
    {
      id: 2,
      foodName: "Pizza Napoli",
      foodDetails: "Pizza mit sards, olives and kapers",
      foodPrice: 10.90,
      foodImg: "https://unsplash.com/de/fotos/jh5XyK4Rr3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      foodAlt: "Pizza"
    },
    {
      id: 3,
      foodName: "Rigatoni",
      foodDetails: "Big Pasta pieces filled with tomato souce",
      foodPrice: 13.90,
      foodImg: "https://unsplash.com/de/fotos/jh5XyK4Rr3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      foodAlt: "rigatoni"
    },
    {
      id: 4,
      foodName: "Ice cream",
      foodDetails: "Ice cream, different flavours: Oreo, Strawberry, chockolate",
      foodPrice: 4.90,
      foodImg: "https://unsplash.com/de/fotos/jh5XyK4Rr3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      foodAlt: "icecream"
    }
  ]
}
