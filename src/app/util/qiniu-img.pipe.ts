import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'qiniuImg'
})
export class QiniuImgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'normal') {
      return `${value}?imageView2/1/w/450/h/330/format/webp/q/75|imageslim`;
    } else if (args === 'large') {
      return `${value}?imageView2/1/w/450/h/800/format/webp/q/75|imageslim`;
    }
    return value;
  }

}
