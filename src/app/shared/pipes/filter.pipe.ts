import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(name: string, gender: string) {
    
    return gender == "male" ? `Mr ${name}` : `Mrs ${name}`;

    // if (usersList.length > 0 && filterText != '') {
    //   return usersList.filter((data: any) => data.gender == filterText.toLowerCase()) ;
    // } else {
    //   return usersList;
    // }
  }
}
