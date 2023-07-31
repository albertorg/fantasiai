import createMiddleware from 'next-intl/middleware'
import { authMiddleware } from "@clerk/nextjs"


const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'es', 'it', 'pl'],
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'en'
})

export default authMiddleware({
    beforeAuth: (req) => {
        return intlMiddleware(req);
    },

    publicRoutes: [
        "/",
        "/es", "/it", "/pl", "/en", 
        "/:locale/sign-in",
        "/:locale/sign-up",
        
    ],

    ignoredRoutes: [
        "/:locale/sign-up/verify-email-address",
        "/:locale/sign-in/sso-callback"
    ]
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
    // matcher: ['/((?!api|_next|.*\\..*).*)']
}