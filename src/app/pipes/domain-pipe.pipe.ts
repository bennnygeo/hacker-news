import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainPipe'
})
export class DomainPipePipe implements PipeTransform {

  transform(url: any, args?: any): any {
    if (url) {
      var domain = '(' + url.split('/')[2] + ')';
      return domain ? domain.replace('www.', '') : '';
    }
  }

}
