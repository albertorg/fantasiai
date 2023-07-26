import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
    return (
        <section>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className='flex items-center justify-between max-w-[1450px] mx-auto gap-8'>
                    <div className="max-w-2xl py-32 sm:py-48 lg:py-56 flex-1">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                This website is{' '}
                                <span className="font-semibold text-blue-600">under construction</span>
                                {'.'}
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Create personalized&nbsp;
                                <span className='inline-block bg-gradient-to-t from-orange-200 to-orange-500 bg-clip-text [-webkit-text-fill-color:transparent]'>
                                    bedtime&nbsp;
                                </span>
                                <span className='inline-block bg-gradient-to-t from-sky-600 to-blue-300 bg-clip-text [-webkit-text-fill-color:transparent]'>
                                    stories
                                </span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Create magical memories with AI-powered personalized bedtime stories! Watch your child become the hero of imaginative
                                adventures, where they&apos;ll meet extraordinary beings and uncover mesmerizing worlds.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href="#"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </Link>
                                <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Try now for free <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-[700px] h-[700px] grid place-items-center'>
                        <Image
                            src="/good.png" //cambiar el nombre y arreglar la foto
                            alt={"AQUI PONER ALGO DINAMICO"}
                            width={700}
                            height={700}
                            priority
                        />
                    </div>
                </div>

                <div
                    className="absolute blur-3xl inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-45rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[rgb(0,183,250)_25%] to-[rgb(1,207,234)_100%)] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
