import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rusMonth'
})
export class RusMonthPipe implements PipeTransform {

  month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь'
  ];
  
  transform(value: any, args?: any): any {
    return this.month[value-1];

  }

}
