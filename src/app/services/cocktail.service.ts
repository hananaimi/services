import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails: Cocktail[] = [{ name: 'loka', price: 4, image: "Users/jamjoum/Downloads/coctail.jpg" }]


  constructor() { }

  public getCocktails(): Cocktail[] {
    return this.cocktails
  }


}





