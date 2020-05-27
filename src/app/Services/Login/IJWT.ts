export interface IJWT {
  token_type?: string;
  access_token?: string;
  expires_at?: string;

  instanceOfIJWT?(obj: Object): obj is IJWT;
}
