import { IBooking } from './IBooking';

export class Bookings {
  constructor(
    public data: {
      total: number,
      items: IBooking[]
    }
  ) {
  }
}
