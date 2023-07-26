import { SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import Link from "next/link"
import { currentUser } from '@clerk/nextjs'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'


const navigation = [
    { name: 'Write a story', href: '/app' },
    { name: 'Library', href: '/library' },
    { name: 'Plan & Price', href: '#' },
    { name: 'Blog', href: '#' },
]

export default async function Example() {

    // todo: Save in state the user taht have to be check in the first open
    const user = await currentUser()

    return (
        <Sheet>
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
                        <SheetTrigger>
                            <span className="sr-only">Open main menu</span>
                            <Menu strokeWidth={1.60} aria-hidden="true" />
                        </SheetTrigger>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {
                            user ? <UserButton />
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
                        <SheetClose>
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                {
                                    user ? <SignOutButton>
                                            <button className="text-sm font-semibold leading-6 text-gray-900">
                                                Sign out <span aria-hidden="true">&rarr;</span>
                                            </button>
                                        </SignOutButton>
                                        : <SignInButton mode="modal">
                                            <button className="text-sm font-semibold leading-6 text-gray-900">
                                                Sign in <span aria-hidden="true">&rarr;</span>
                                            </button>
                                        </SignInButton>
                                }
                                {/* <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </SheetContent>

            </header>
        </Sheet>
    )
}
