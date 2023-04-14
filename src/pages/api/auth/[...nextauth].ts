import GoogleProvider from 'next-auth/providers/google'

GoogleProvider({
  clientId: import.meta.env.GOOGLE_CLIENT_ID,
  clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
  allowDangerousEmailAccountLinking: true,
})
