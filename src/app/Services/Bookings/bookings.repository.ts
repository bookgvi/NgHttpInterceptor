import { Injectable } from '@angular/core';
import { BookingsDataSource } from './bookings.dataSource';
import { Observable, of } from 'rxjs';
import { Bookings } from '../../Model/Bookings/Bookings';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class BookingsRepository {
  private readonly bookingsResponse: Observable<Bookings>;

  constructor(private dataSource: BookingsDataSource) {
    this.bookingsResponse = dataSource.getBookingsResponse;
  }

  public get getBookingsResponse(): Observable<Bookings> {
    return this.bookingsResponse;
  }
}
