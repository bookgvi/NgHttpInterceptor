import { Component, OnInit } from '@angular/core';
import { BookingsRepository } from '../../Services/Bookings/bookings.repository';
import { BookingsDataSource } from '../../Services/Bookings/bookings.dataSource';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
  providers: [BookingsDataSource, BookingsRepository]
})
export class BookingsComponent implements OnInit {

  constructor(private repo: BookingsRepository) {
    repo.getBookingsResponse.subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.warn('(component) Bookings error: ', error);
      }
    );
  }

  ngOnInit() {
  }

}
