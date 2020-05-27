export interface IBooking {
  id: number,
  reservedFrom: string,
  reservedTo: string,
  price: [string, number],
  discount: [string, number],
  amount: [string, number],
  duration: number
  status: {
    id: number,
    title: string
  },
  customerComment: string
  managerComment: string,
  prepayment: number,
  room: {
    id: number,
    name: string,
    color: string
  },
  technical: boolean,
  seats: number
}
