import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BonbonsService {

  constructor(private http: HttpClient) { }

  getBonbons() {
    return this.http.get<any>('https://fr-en.openfoodfacts.org/category/bonbons.json');
  }
}
