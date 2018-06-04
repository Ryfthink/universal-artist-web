import {Pipe, PipeTransform} from '@angular/core';
import {Util} from './util';

const supportsWebP = Util.checkSupportWebp();

@Pipe({
  name: 'qiniuImg'
})
export class QiniuImgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'normal') {
      if (supportsWebP) {
        return `${value}?imageView2/1/w/450/h/330/format/webp/q/75|imageslim`;
      } else {
        return `${value}?imageView2/1/w/450/h/330/q/75|imageslim`;
      }
    } else if (args === 'large') {
      if (supportsWebP) {
        return `${value}?imageView2/1/w/450/h/800/format/webp/q/75|imageslim`;
      } else {
        return `${value}?imageView2/1/w/450/h/800/q/75|imageslim`;
      }
    }
    return value;
  }

}
