import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient, Role } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import Resend from 'next-auth/providers/resend'

export const { auth, handlers, signIn, signOut } = NextAuth({
    trustHost: true,
    pages: {
        signIn: '/sign-in',
        error: '/error',
        verifyRequest: '/veify-request'
    },
    events: {
        //event déclancher lors d'une connexion grace à un provider
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: {
                    emailVerified: new Date(),
                }
            })
        }
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider !== "credentials") {
                return true
            }
            return true
        },

        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.role && session.user) {
                session.user.role = token.role as Role
            }

            return session
        },

        async jwt({ token }) {
            if (token.sub) return token

            const user = await db.user.findUnique({
                where: {
                    id: token.sub
                }
            })

            if (!user) return token

            token.role = user.role

            return token
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
    providers: [
        Resend({
            from: 'Acme <onboarding@resend.dev>',
        }),
        ...authConfig.providers,
    ],
})