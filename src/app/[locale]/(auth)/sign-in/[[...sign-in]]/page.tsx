import { SignIn } from '@clerk/nextjs'
// import { useLocale } from 'next-intl'


export default function Login() {

    const locale = 'it'
    // const signInPath = locale !== 'en' ? `/${locale}/sign-in` : '/sign-in'
    // const signUpPath = locale !== 'en' ? `/${locale}/sign-up` : '/sign-up'


    const signInPath = `/${locale}/sign-in` 
    const signUpPath = `/${locale}/sign-up` 

    return (
        <div className="min-h-screen flex items-center justify-center">
            <SignIn 
                path={signInPath} 
                signUpUrl={signUpPath}
            />
        </div>
    ) 
}