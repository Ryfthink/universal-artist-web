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
      if (result.length > 0) {
        return of(this.sortSeedListByDate(result));
      } else {
        return zip(
          this.requestSeedList('brand'),
          this.requestSeedList('illustration'),
          this.requestSeedList('uiux'),
        ).pipe(
          map(v => [...v[0], ...v[1], ...v[2]]),
          map(v => this.sortSeedListByDate(v))
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
            map(v => this.sortSeedListByDate(v)),
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
        catchError(this.handleError('requestSeed', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }

  private sortSeedListByDate(list: Seed[]): Seed[] {
    return list.sort((a: Seed, b: Seed) => {
      return new Date(b.createTime).getTime() - new Date(a.createTime).getTime();
    });
  }

  findNav(id: string): Observable<{ previous: Seed; next: Seed }> {
    return Observable.create(obs => {
      let result = null;
      for (const k in this.seedCache) {
        const list = this.sortSeedListByDate(this.seedCache[k]);
        list.forEach((seed: Seed, index: number) => {
          if (seed.id === id) {
            result = {
              previous: list[index - 1],
              next: list[index + 1]
            };
          }
        });
        if (result) {
          break;
        }
      }
      obs.next(result);
      obs.complete();
    });
  }
}
