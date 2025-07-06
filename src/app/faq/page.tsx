'use client'

import { useState } from 'react'
import { HeroHeader } from '@/components/hero-header'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import Link from 'next/link'
import { Info, CreditCard, TrendingUp, BarChart3, Settings, HelpCircle, ChevronDown, type LucideIcon } from 'lucide-react'

type CategoryKey = 'about-us' | 'opening-account' | 'account-funding' | 'trading-fees' | 'online-trading' | 'maintaining-account' | 'other-services'

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('opening-account')
    const [openAccordions, setOpenAccordions] = useState<string[]>([])

    const toggleAccordion = (id: string) => {
        setOpenAccordions(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    const categories: Array<{ id: CategoryKey; title: string; icon: LucideIcon }> = [
        {
            id: 'about-us',
            title: 'About Us',
            icon: Info,
        },
        {
            id: 'opening-account', 
            title: 'Opening an Account',
            icon: CreditCard,
        },
        {
            id: 'account-funding',
            title: 'Account Funding',
            icon: CreditCard,
        },
        {
            id: 'trading-fees',
            title: 'Trading and Fees',
            icon: TrendingUp,
        },
        {
            id: 'online-trading',
            title: 'Online Trading Process',
            icon: BarChart3,
        },
        {
            id: 'maintaining-account',
            title: 'Maintaining my Account',
            icon: Settings,
        },
        {
            id: 'other-services',
            title: 'Other Services',
            icon: HelpCircle,
        },
    ]

    const faqContent = {
        'about-us': [
            {
                id: 'about-1',
                question: 'What is DA Market Securities?',
                answer: 'DA Market Securities, Inc. (DMSI) has been in the financial business since 1987. It is a member of the Philippine Stock Exchange and is one of the leading stock brokerage firms in the country.',
            },
            {
                id: 'about-2',
                question: 'What services do you offer?',
                answer: 'We offer comprehensive financial services including stock trading, investment advisory, wealth management, and margin facilities. We serve both individual and institutional investors.',
            },
        ],
        'opening-account': [
            {
                id: 'opening-1',
                question: 'WHO CAN OPEN AN ACCOUNT?',
                answer: 'Any one of legal age, local, including OFWs, or foreign, or Corporation so long as the applicant provides all the necessary requirements. Management reserves the right to approve/deny any application as it sees fit based upon its measures of standard.',
            },
            {
                id: 'opening-2',
                question: 'HOW CAN I OPEN AN ACCOUNT?',
                answer: 'You can open an account by visiting our office, calling our customer service, or through our online application process. Our team will guide you through the requirements and documentation needed.',
            },
            {
                id: 'opening-3',
                question: 'WHAT ARE THE REQUIREMENTS TO OPEN AN ACCOUNT?',
                answer: 'Requirements include valid government-issued ID, proof of income, bank certification, and completed application forms. Additional documents may be required for corporate accounts.',
            },
            {
                id: 'opening-4',
                question: 'HOW WILL I KNOW IF MY APPLICATION WAS APPROVED?',
                answer: 'You will be notified via phone call or email once your application has been reviewed and approved. The process typically takes 3-5 business days.',
            },
            {
                id: 'opening-5',
                question: 'WHEN CAN I START INVESTING?',
                answer: 'You can start investing once your account is approved and funded. Initial funding can be done through bank transfer or check deposit.',
            },
            {
                id: 'opening-6',
                question: 'INVESTING IN REITS: WHAT IS AN NOCD?',
                answer: 'NOCD stands for Notice of Confirmation of Deposit. It is a document that confirms your investment in REITs (Real Estate Investment Trusts) and serves as proof of your shareholding.',
            },
        ],
        'account-funding': [
            {
                id: 'funding-1',
                question: 'How do I fund my account?',
                answer: 'You can fund your account through bank transfer, check deposit, or online banking. We accept deposits from major Philippine banks.',
            },
            {
                id: 'funding-2',
                question: 'What is the minimum initial deposit?',
                answer: 'The minimum initial deposit varies depending on the type of account. Please contact our customer service for specific requirements.',
            },
        ],
        'trading-fees': [
            {
                id: 'fees-1',
                question: 'What are your trading fees?',
                answer: 'Our trading fees are competitive and vary based on transaction volume and account type. Please refer to our fee schedule or contact us for detailed information.',
            },
            {
                id: 'fees-2',
                question: 'Are there any hidden charges?',
                answer: 'No, we maintain full transparency in our fee structure. All applicable charges are disclosed upfront and detailed in our terms and conditions.',
            },
        ],
        'online-trading': [
            {
                id: 'online-1',
                question: 'How do I access the online trading platform?',
                answer: 'Once your account is approved, you will receive login credentials to access our online trading platform. The platform is available 24/7 during market hours.',
            },
            {
                id: 'online-2',
                question: 'Is the online platform secure?',
                answer: 'Yes, our online trading platform uses bank-level security with encryption and multi-factor authentication to protect your account and transactions.',
            },
        ],
        'maintaining-account': [
            {
                id: 'maintain-1',
                question: 'How do I update my account information?',
                answer: 'You can update your account information by visiting our office, calling customer service, or through the online platform\'s account settings.',
            },
            {
                id: 'maintain-2',
                question: 'How often should I review my portfolio?',
                answer: 'We recommend reviewing your portfolio regularly, at least quarterly, or whenever there are significant market changes that may affect your investments.',
            },
        ],
        'other-services': [
            {
                id: 'other-1',
                question: 'Do you offer investment advisory services?',
                answer: 'Yes, we provide professional investment advisory services to help you make informed investment decisions based on your financial goals and risk tolerance.',
            },
            {
                id: 'other-2',
                question: 'Can you help with financial planning?',
                answer: 'Absolutely. Our experienced financial planners can help you create a comprehensive financial plan tailored to your specific needs and objectives.',
            },
        ],
    }

    const currentFAQs = faqContent[activeCategory] || []

    return (
        <div className="min-h-screen">
            <HeroHeader />
            
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Discover quick and comprehensive answers to common questions about our platform, services, and features."
            />

            <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-card rounded-2xl border p-6 shadow-sm">
                                <nav className="space-y-2">
                                    {categories.map((category) => {
                                        const Icon = category.icon
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => setActiveCategory(category.id)}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                                    activeCategory === category.id
                                                        ? 'bg-[#40739d] text-white'
                                                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                                }`}
                                            >
                                                <Icon className="h-5 w-5" />
                                                <span className="text-sm font-medium">{category.title}</span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-card rounded-2xl border p-8 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6">
                                    {categories.find(cat => cat.id === activeCategory)?.title}
                                </h2>
                                
                                {currentFAQs.length > 0 ? (
                                    <div className="w-full space-y-4">
                                        {currentFAQs.map((item) => (
                                            <div
                                                key={item.id}
                                                className="border rounded-lg overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleAccordion(item.id)}
                                                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                                                >
                                                    <span className="text-base font-medium">
                                                        {item.question}
                                                    </span>
                                                    <ChevronDown 
                                                        className={`h-5 w-5 transition-transform ${
                                                            openAccordions.includes(item.id) ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </button>
                                                {openAccordions.includes(item.id) && (
                                                    <div className="px-6 pb-4">
                                                        <p className="text-base text-muted-foreground">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-muted-foreground">
                                        No FAQs available for this category yet.
                                    </p>
                                )}

                                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                                    <p className="text-muted-foreground">
                                        Can&apos;t find what you&apos;re looking for? Contact our{' '}
                                        <Link
                                            href="#"
                                            className="text-[#40739d] font-medium hover:underline"
                                        >
                                            customer support team
                                        </Link>
                                        {' '}for personalized assistance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </SectionWrapper>

            <Footer />
        </div>
    )
}