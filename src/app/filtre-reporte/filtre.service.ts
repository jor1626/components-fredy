import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltreService {

  // private url = 'https://reqres.in/api';
  private _jsonURL = 'assets/filters.json';

  constructor(private http: HttpClient) { }

  getFiltros() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response.grupops;
      })
    );
  }

}
