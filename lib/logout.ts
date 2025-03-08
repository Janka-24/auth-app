"use server"

import { signOut } from "@/auth"

export const logOut = async () => {
    //Possibilité de faire un redirection
    //    await signOut({
    //      redirectTo: '/sign-in'
    //})
    await signOut({
        redirectTo: '/sign-in'
    })
}