import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

import {Category, Seed} from './seed/seed';

import {Observable, of, zip} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UaService {

  private seedCache = {
    'brand': [],
    'illustration': [],
    'uiux': []
  };

  constructor(private http: HttpClient) {
  }

  requestSeedList(category: Category): Observable<any> {
    if (category === '') {
      const result = [
        ...this.seedCache.brand,
        ...this.seedCache.illustration,
        ...this.seedCache.uiux
      ];
      if (length > 0) {
        return of(result);
      } else {
        return zip(
          this.requestSeedList('brand'),
          this.requestSeedList('illustration'),
          this.requestSeedList('uiux'),
        ).pipe(
          map(v => [...v[0], ...v[1], ...v[2]]),
          map(v => {
            return v.shuffle().sort((a: Seed, b: Seed) => {
              return new Date(b.createTime).getTime() - new Date(a.createTime).getTime();
            });
          })
        );
      }
    } else {
      const cache = this.seedCache ? this.seedCache[category] : null;
      if (cache && cache.length > 0) {
        return of(cache);
      } else {
        const params = new HttpParams().set('timestamp', Date.now().toString());
        return this.http.get(`${environment.domain}/config/${category}`, {params})
          .pipe(
            tap((result: any[]) => {
              console.log(`result ${category} list: `, result);
              if (result) {
                this.seedCache[category] = result;
              }
            }),
            catchError(this.handleError('requestSeed', []))
          );
      }
    }
  }

  requestSeedContent(id: string): Observable<any> {
    const params = new HttpParams().set('timestamp', Date.now().toString());
    return this.http.get(`${environment.domain}/md/${id}`, {responseType: 'text', params: params})
      .pipe(
        tap(console.log),
        catchError(this.handleError('requestSeed', {}))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
