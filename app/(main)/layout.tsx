import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

type Props = {
    children: React.ReactNode
}
//J'ai créer ce fichier pour dire que toute les routes dans le dossier main ont besoin d'etre auth
const layout = async({ children } : Props) => {

    const session = await auth()


    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default layout
