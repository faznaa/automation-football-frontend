import NextAuth from "next-auth"
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const allowedEmails = [
    'fasnahareesfasna@gmail.com',
    'shabeeb248@gmail.com',
    'thesafootballer@adam.com.au'
]
export const authOptions = {
  providers: [
    GoogleProvider<GoogleProfile>({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }:any) {
        if(!allowedEmails.includes(user?.email?.toLowerCase())) return false
      return true
    },
}
}

export default NextAuth(authOptions)