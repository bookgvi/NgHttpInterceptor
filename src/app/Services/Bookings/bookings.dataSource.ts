import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookings } from '../../Model/Bookings/Bookings';
import { Observable } from 'rxjs';
import { BASE_URL, DATA_SOURCE } from '../../Constants/backendURLs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BookingsDataSource {
  private bookingsURL = `${BASE_URL}${DATA_SOURCE}/bookings`;
  private readonly bookingsResponse: Observable<Bookings>;

  constructor(private http: HttpClient) {
    this.bookingsResponse = this.http.get<Bookings>(this.bookingsURL);
  }

  public get getBookingsResponse(): Observable<Bookings> {
    return this.bookingsResponse;
  }
}
