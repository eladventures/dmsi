import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        group: 'Navigation',
        items: [
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'First News',
                href: '/first-news',
            },
            {
                title: 'FAQ',
                href: '/faq',
            },
            {
                title: 'Forms',
                href: '/forms',
            },
        ],
    },
]

export function Footer() {
    return (
        <footer className="bg-[#40739d] text-white pt-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">DA Market Securities</h3>
                            <p className="text-slate-300 mb-6">
                                Leading Philippine stock brokerage firm serving individual and institutional investors with integrity since 1986
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
                            <div className="text-slate-300 space-y-2">
                                <p>Unit 1105, PSE Tower</p>
                                <p>5th Ave. Cor. 28th St.</p>
                                <p>Bonifacio Global City, Taguig City</p>
                                <p className="mt-4">
                                    (02) 8834-7765 / (02) 8887-6407 / (02) 8887-5457
                                </p>
                                <p>helpdesk@itrade.ph</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex justify-end">
                        {links.map((link, index) => (
                            <div key={index} className="space-y-4 text-sm text-right">
                                {link.items.map((item, itemIndex) => (
                                    <Link
                                        key={itemIndex}
                                        href={item.href}
                                        className="text-slate-300 hover:text-white block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="border-t border-slate-700 mt-12 pt-8 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} DA Market Securities, Inc. All rights reserved.
                        </span>
                        
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-slate-400 hover:text-white transition-colors">
                                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-slate-400 hover:text-white transition-colors">
                                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X/Twitter"
                                className="text-slate-400 hover:text-white transition-colors">
                                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}