'use client'

import { SignInButton, SignOutButton, UserButton, useAuth } from '@clerk/nextjs'
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'



const navigation = [
    { name: 'write' as const, href: '/app' },
    { name: 'library' as const, href: '/library' },
    { name: 'plans' as const, href: '#' },
    { name: 'blog' as const, href: '#' },
]

interface Props {
    menuMsg: {
        write: string,
        library: string,
        plans: string,
        blog: string,
        signIn: string,
        logout: string
    }
}

const Navbar = ({ menuMsg }: Props) => {

    const { userId } = useAuth()
    const [open, setOpen] = useState(false)
    
 
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Fantasiai</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="klsjdfk"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <SheetTrigger onClick={() => setOpen(true)} >
                            <span className="sr-only">Open main menu</span>
                            <Menu strokeWidth={1.60} aria-hidden="true" />
                        </SheetTrigger>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {menuMsg[item.name]}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {
                            userId ? <UserButton />
                                : <SignInButton mode="modal">
                                    <button className="text-sm font-semibold leading-6 text-gray-900">
                                        Sign in <span aria-hidden="true">&rarr;</span>
                                    </button>
                                </SignInButton>
                        }
                    </div>
                </nav>

                {/* Mobile Menu */}
                <SheetContent className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Fantasiai</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        <SheetClose onClick={() => setOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <X strokeWidth={1.60} aria-hidden="true" />
                        </SheetClose>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {menuMsg[item.name]}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                {
                                    userId ? <SignOutButton>
                                            <button
                                                onClick={() => setOpen(false)} 
                                                className="text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                {menuMsg.logout} <span aria-hidden="true">&rarr;</span>
                                            </button>
                                        </SignOutButton>
                                        : <SignInButton mode="modal">
                                            <button 
                                                onClick={() => setOpen(false)} 
                                                className="text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                {menuMsg.signIn} <span aria-hidden="true">&rarr;</span>
                                            </button>
                                        </SignInButton>
                                }
                            </div>
                        </div>
                    </div>
                </SheetContent>

            </header>
        </Sheet>
    )
}

export default Navbar