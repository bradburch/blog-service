import NextAuth, { type DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/app/utils/password"

declare module "next-auth" {
    interface Session {
      user: {
        id: string, 
        email: string,
        name: string
      } & DefaultSession["user"]
    }
  }
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        console.log("CREDENTIALS", credentials.email, credentials.password)
 
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
 
        // if (!user) {
        //   // No user found, so this is their first attempt to login
        //   // meaning this is also the place you could do registration
        //   throw new Error("User not found.")
        // }
 
        // return user object with their profile data
        return {id: '123', email: 'brad@duck.com', name: 'Brad'}
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
        },
      }
    }
  },
})