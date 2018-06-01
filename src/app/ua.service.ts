import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Seed} from './home/model/seed';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UaService {

  constructor(private http: HttpClient) {
  }

  requestSeedList(category: string): Observable<any> {
    const params = new HttpParams().set('timestamp', Date.now().toString());
    return this.http.get(`${environment.domain}/config/${category}`, {params});
      // .do(console.log)
    //
    // this.http.get('http://az-asset.septenary.cn/config/brand').subscribe(result => {
    //   console.log('AAA', result);
    // });
    // return of([
    //   {
    //     category: category,
    //     img: 'http://az-asset.septenary.cn/img/mpepj14qazd6l7uhpzrmh',
    //     createTime: '201239123',
    //     id: 'dx0123jliadf1019a09dfds9v',
    //     title: 'God said',
    //     subTitle: '华夏信仰中，上帝是天子、帝王、君主中的至上神',
    //     size: 'normal',
    //   } as Seed,
    //   {
    //     category: category,
    //     img: 'http://az-asset.septenary.cn/img/m6qsyz6h2tbqw41cf5u848',
    //     createTime: '201239123',
    //     id: 'dx0123jliadf1019a09dfds9v',
    //     title: 'UA艺术家',
    //     subTitle: '为了造福当地社区民众，自己位于洛杉矶的由商用洗衣房改造的工作室转变成项目空间、艺术家驻地',
    //     size: 'normal',
    //   } as Seed,
    // ]);
  }
}
