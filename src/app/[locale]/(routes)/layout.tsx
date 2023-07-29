import { Navbar } from "@/components";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
