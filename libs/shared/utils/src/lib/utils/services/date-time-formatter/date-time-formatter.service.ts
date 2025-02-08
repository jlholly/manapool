import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeFormatterService {

  convertStringToDate(date: string): Date {
    return new Date(date);
  }

  formatDate(date: string | Date): string {
    let dateObj: Date;
    if(typeof date === 'string') {
      dateObj = this.convertStringToDate(date);
      if(isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
      }
    } else {
      dateObj = date;
    }

    const dateFormatting: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };

    return new Intl.DateTimeFormat('en-GB', dateFormatting).format(dateObj).replace(',', '');
  }
}
