import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  readonly url = 'https://restcountries.com/v3.1/all';
  readonly urlName = 'https://restcountries.com/v3.1/name/';
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  getByName(name: string): Observable<Country> {
    return this.http.get<Country>(this.urlName + name);
  }
}
