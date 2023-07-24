import { SignUp } from "@clerk/nextjs";
import { useLocale } from "next-intl";

export default function Login() {

    const locale = useLocale()
    const signUpPath = locale !== 'en' ? `/${locale}/sign-up` : '/sign-up'
    const signInPath = locale !== 'en' ? `/${locale}/sign-in` : '/sign-in'

    return (
        <div className="min-h-screen flex items-center justify-center">
            <SignUp
                path={signUpPath}
                signInUrl={signInPath}
            />
        </div>
    )
}