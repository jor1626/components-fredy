import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltreService {

  // private url = 'https://reqres.in/api';
  private _jsonURL = 'assets/filters.json';

  constructor(private http: HttpClient) { }

  public getGrupos() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response['grupos'];
      })
    );
  }

  getExistencias() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response['existencias'];
      })
    );
  }

  getBodegas() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response['bodegas'];
      })
    );
  }

  getNiveles() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response['niveles'];
      })
    );
  }

  getValores() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response['valores'];
      })
    );
  }

  getCentros() {
    return this.http.get(this._jsonURL).pipe(
      map((response: any) => {
        return response['centros'];
      })
    );
  }

}
