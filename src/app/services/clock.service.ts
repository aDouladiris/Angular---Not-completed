import { Injectable } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';


@Injectable()
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(map(() => new Date()));
   }

  getClock() {
    return this.clock;
  }
}
