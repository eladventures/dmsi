'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vision', href: '/vision' },
    { name: 'First News', href: '/first-news' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Forms', href: '/forms' },
    { name: 'Privacy Policy', href: '/privacy' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 rounded-2xl border backdrop-blur-lg xl:max-w-5xl lg:px-8')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 xl:flex-nowrap xl:gap-4 lg:py-4">
                        <div className="flex w-full shrink-0 justify-between xl:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 xl:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="hidden min-w-0 flex-1 justify-center xl:flex">
                            <ul className="flex items-center gap-5 text-base">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-foreground hover:text-accent-foreground block whitespace-nowrap duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block xl:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap xl:m-0 xl:flex xl:w-fit xl:shrink-0 xl:gap-6 xl:space-y-0 xl:border-transparent xl:bg-transparent xl:p-0 xl:shadow-none dark:shadow-none dark:xl:bg-transparent">
                            <div className="xl:hidden">
                                <ul className="space-y-6 text-xl">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full items-center gap-3 sm:flex-row sm:gap-3 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn('border-0 bg-brand-primary hover:bg-brand-primary/90', isScrolled ? 'xl:hidden' : '')}>
                                    <Link href="/open-account">
                                        <span>Open Account</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn('bg-brand-yellow hover:bg-brand-yellow/90 text-black', isScrolled ? 'xl:inline-flex' : 'hidden')}>
                                    <Link href="/open-account">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
