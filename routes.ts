//Pour définir les routes annonyme ou connecté

export const publicRoutes = [
    "/",
    // "/dashboard"
]

export const authRoutes = [
    '/sign-in',
    '/error',
    '/verify-request',
]

//Dire que c'est toutes les pages de connexion
export const apiRoutes = '/api/auth'

//Dès que l'user est connecté il sera redirigé vers cette page
export const DEFAULT_REDIRECT = '/dashboard'
