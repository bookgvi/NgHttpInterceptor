import { IJWT } from './IJWT'

export interface IJWT_User extends IJWT {
  user: {
    avatar: string,
    fullName: string
  }
}
