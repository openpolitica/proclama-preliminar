import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
  return withIronSession(handler, {
    password:
      process.env.SECRET_COOKIE_PASSWORD || 'T8f7bUqbNG98WDYAoe3MwXgYE4AQjFo7',
    cookieName: 'proclamaciudadana.pe/session',
    ttl: 120,
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  });
}
