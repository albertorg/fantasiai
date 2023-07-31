
import Navbar from "@/components";
import { useTranslations } from "next-intl";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const t = useTranslations()

    const menuMsg = {
        write: t('Navbar.write'),
        library: t('Navbar.library'),
        plans: t('Navbar.plans'),
        blog: t('Navbar.blog'),
        signIn: t('Navbar.signIn'),
        logout: t('Navbar.logout') 
    }

    return (
        <>
            <Navbar menuMsg={menuMsg}/>
            {children}
        </>
    )
}
