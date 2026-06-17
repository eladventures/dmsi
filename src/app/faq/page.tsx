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
                question: 'Who are we?',
                answer: 'Established in 1987, DA Market Securities, Inc. (DMSI) is a traditional and online equities brokerage firm with an affiliate in banking and financing in Central Luzon. DMSI is a member of the Philippine Stock Exchange and is one of the leading stock brokerage firms in the country. The company is consistently among the top trading participants in terms of value turnover and the market leader on margin facilities.',
            },
            {
                id: 'about-2',
                question: 'What services does iTRADE offer?',
                answer: 'We offer: Online Stock Trading, Real-time market data and statistics, Charting tools, Broker Assisted Trading, and Margin Facility.',
            },
            {
                id: 'about-3',
                question: 'How do I contact iTRADE?',
                answer: 'Contact Numbers: (02) 8887-5457 / (02) 8887-6407 / (02) 8834-7765. Email Address: accounts@damarketsec.com. Office Address: Unit 1105, PSE Tower, 5th Ave. Cor. 28th St. Bonifacio Global City, Taguig City, Philippines, 1634.',
            },
        ],
        'opening-account': [
            {
                id: 'opening-1',
                question: 'Who can open an account?',
                answer: 'Any individual of legal age, whether local, an OFW, or a foreign national, as well as corporations, may open an account provided all documentary requirements are submitted. DA Market Securities, Inc. reserves the right to approve or deny any application in accordance with its account opening policies and regulatory requirements.',
            },
            {
                id: 'opening-2',
                question: 'How can I open an account?',
                answer: `1. Download and complete the Account Opening Form.

2. Email the accomplished form and supporting documents to accounts@damarketsec.com for initial review.

3. You will receive an acknowledgment email confirming receipt of your application. Our team will contact you if additional information or documents are required.

4. Submit the signed original documents personally or via courier to:

DA Market Securities, Inc.
Unit 1105, PSE Tower
5th Avenue corner 28th Street
Bonifacio Global City, Taguig City

5. Receive notification once your application has been approved.

6. Fund your account.

7. Receive your login credentials via email within 1-2 business days.`,
            },
            {
                id: 'opening-3',
                question: 'What are the requirements to open an account?',
                answer: `For Individual Accounts:

• Completed Account Opening Forms, including:
  • Customer Account Information Form (CAIF)
  • Trading Agreement
  • Signature Card
  • Data Privacy Consent Form
  • FATCA Declaration (if applicable)

• One (1) valid government-issued ID or two (2) secondary IDs

• Taxpayer Identification Number (TIN)

Additional Requirements for Foreign Individuals:

• Valid Passport

• Alien Certificate of Registration (ACR), if applicable

• Other supporting documents as may be required

Additional Requirements for Corporate Accounts:

• Articles of Incorporation

• SEC Registration Documents

• Board Resolution authorizing the opening of the account

• Secretary's Certificate

• Latest General Information Sheet (GIS)

• Other supporting documents as may be required`,
            },
            {
                id: 'opening-4',
                question: 'How will I know if my application was approved?',
                answer: `Once your application has been approved, you will receive an email notification confirming the approval of your account.

The email will include instructions on how to fund your account using any of DA Market Securities' designated bank accounts.

Our team may also contact you if additional information or documentation is required prior to account activation.`,
            },
            {
                id: 'opening-5',
                question: 'When can I start investing?',
                answer: `You may start investing once your account has been approved and your initial deposit has been received and verified by DA Market Securities.

You will receive an email confirmation once your account is activated and ready for trading.`,
            },
            {
                id: 'opening-6',
                question: 'Investing in REITS: What is an NoCD?',
                answer: 'In order for you to invest in REITs, a Name on Central Depository or NoCD is a sub-account created on the client\'s behalf for Real Estate Investment Trust (REIT) in the NoCD facility of the Philippine Depository & Trust Corporation (PDTC) as part of the regulatory requirement.',
            },
        ],
        'account-funding': [
            {
                id: 'funding-1',
                question: 'How do I fund my account?',
                answer: 'You may fund your account through any of our partner banks. Send the deposit confirmation to accounts@damarketsec.com with subject: FUND DEPOSIT. Account Name: DA Market Securities, Inc. Partner Banks: BDO (01-1868-0012-97), BPI (3541-0031-33), Metrobank (264-7-26481071-6), RCBC (1216-0203-98).',
            },
            {
                id: 'funding-2',
                question: 'What is the minimum investment required to open an account?',
                answer: 'The minimum investment is PHP100,000.00.',
            },
            {
                id: 'funding-3',
                question: 'Is there a Maintaining Balance for my Account?',
                answer: 'You will need to maintain PHP100,000.00 in cash or stock/s in your account.',
            },
            {
                id: 'funding-4',
                question: 'How long does it take before my deposit is reflected on my account?',
                answer: 'Cash deposits to any of our bank accounts will be reflected on your portfolio the next trading day. Check deposits will reflect on your portfolio after the one (1) day check-clearing period. Cut-off time for deposits is 3:00 PM.',
            },
        ],
        'trading-fees': [
            {
                id: 'fees-1',
                question: 'What types of securities can I trade?',
                answer: 'You can trade all non-suspended stocks, exchange traded funds (ETFs) and real estate investment trusts (REITs) that are publicly listed in the Philippine Stock Exchange (PSE).',
            },
            {
                id: 'fees-2',
                question: 'What are the trading hours?',
                answer: 'Trading Hours: Monday to Friday - 9:00 AM Pre-Open, 9:15 AM Pre-open No-Cancel, 9:30 AM Market Open/Continuous Trading, 12:00 NN Market Recess, 1:00 PM Market Resumption, 2:45 PM Pre-Close, 2:50 PM Run-Off, 3:00 PM Market Close.',
            },
            {
                id: 'fees-3',
                question: 'How much does it cost to buy and sell shares of stock?',
                answer: 'Buy Transaction: Commission 0.25% (min PHP 20.00), VAT 12%, PSE fee 0.005%, SCCP fee 0.01%. Sell Transaction: Same as buy plus Sales Tax 0.60%. PDTC Depository Maintenance Fee of PHP 0.00000833 per Peso market value monthly.',
            },
            {
                id: 'fees-4',
                question: 'What are the related fees to my account?',
                answer: 'For Online Accounts, Management reserves to transfer an online account into a broker-assisted account with a minimum commission fee of PHP 200.00 per transaction and a monthly maintenance fee of P350.00 for dormant account with no transactions for at least 2 years.',
            },
            {
                id: 'fees-5',
                question: 'Do you provide Margin Facilities?',
                answer: 'Yes. To find out more about our margin facilities Contact us at (02) 8887 5457 or (02) 8834 7765 or 63 917 863 3119.',
            },
        ],
        'online-trading': [
            {
                id: 'online-1',
                question: 'How do I place an order?',
                answer: 'Go to Equities. Input the stock that you want to BUY/SELL. Press F6 for (Buy) and F8 for (Sell). Order ticket will pop-out. Enter the order details then click PREVIEW BUY/SELL. A confirmation order box will appear, click PROCEED to post your order.',
            },
            {
                id: 'online-2',
                question: 'What are the rules in posting an order?',
                answer: 'Only Limit Orders will be accepted. Orders must be within Trading Thresholds: Static (30% below to 50% above previous day\'s trade) and Dynamic (10-20% based on security cluster and trading frequency).',
            },
            {
                id: 'online-3',
                question: 'What are the validity types of an order?',
                answer: '1. Day - valid until end of trading day, 2. GTC (Good till cancelled) - valid for 1 year, 3. IOC (Immediate or cancel) - fill partially then cancel, 4. GTD (Good till date) - valid until specified date, 5. Session - valid for current session only, 6. Iceberg - large orders broken into smaller orders.',
            },
            {
                id: 'online-4',
                question: 'What is a board lot?',
                answer: 'Any amount of shares wholly divisible by a minimum board lot. Board lot sizes vary based on price range from 5 shares (for stocks above PHP 5,000) to 1,000,000 shares (for stocks PHP 0.0001-0.0099).',
            },
            {
                id: 'online-5',
                question: 'Can I Modify or Cancel an Order?',
                answer: 'Yes, orders can be revised or cancelled as long as they are not matched. Editing can only be done during continuous trading phase (9:30 AM - 12:00 NN and 1:00 PM to 3:00 PM). No modifications during Pre-open and Pre-close No Cancellation Periods.',
            },
            {
                id: 'online-6',
                question: 'Are there hot keys (keyboard shortcuts) within the trading platform?',
                answer: 'In the Equities window: F6 (Buy), F8 (Sell), Arrow up (One Fluctuation up), Arrow down (One Fluctuation down), K (Multiply quantity by 1,000), M (Multiply quantity by 1,000,000).',
            },
        ],
        'maintaining-account': [
            {
                id: 'maintain-1',
                question: 'What if I forget my Username and Password?',
                answer: 'Contact us at (02) 8887 5457 or (02) 8834 7765 or (63) 917 863 3119 or send an email to accounts@damarketsec.com to reset your Username or Password.',
            },
            {
                id: 'maintain-2',
                question: 'What if I want to update my Account details?',
                answer: 'Contact us at (02) 8887 6407 or (02) 8834 7765 or (63) 917 863 3119 or send an email to accounts@damarketsec.com to update your Account details.',
            },
            {
                id: 'maintain-3',
                question: 'What if I want to change my password?',
                answer: 'Log in to your account. Under Account, click on "Change Password" and input your new password.',
            },
            {
                id: 'maintain-4',
                question: 'How many computers can I use to log-in to my iTradePro account?',
                answer: 'You can register iTradePro on up to 2 laptops/computers. Note however that the two computers cannot be logged-on to the account at the same time. If you wish to register a new computer, send an Email to accounts@damarketsec.com to request.',
            },
            {
                id: 'maintain-5',
                question: 'How do I confirm done transactions for the day?',
                answer: 'You will receive confirmation receipts for all done transactions for the day in your registered email. If you wish to view historical transactions, you may email us at accounts@damarketsec.com to request for your account ledger.',
            },
        ],
        'other-services': [
            {
                id: 'other-1',
                question: 'How do I participate in Initial Public Offerings (IPOs), Follow-on Offerings (FOOs) and Stock Rights Offerings (SROs)?',
                answer: 'You will receive announcements via Email and/or phone message. You may reply to that email with the preferred number of shares you wish to reserve. Order reservations are not guaranteed due to allocation based on trading volume. Payment will be debited from your trading account.',
            },
            {
                id: 'other-2',
                question: 'How do I withdraw from my account?',
                answer: 'Please fill out and sign a Fund Withdrawal Form and send an email to accounts@damarketsec.com with subject: FUND WITHDRAWAL REQUEST. Cut-off time for withdrawal requests is 11:00AM. You may withdraw proceeds of a stock sale in two days (T+2) after sale.',
            },
            {
                id: 'other-3',
                question: 'How can I withdraw (or uplift) my stock positions from DA Market Securities?',
                answer: 'Submit the Stock Certificate Upliftment Form, photocopy of 2 valid government-issued IDs, originally signed specimen signature card per stock/company. Upliftment fee PhP150.00 per certificate (bank) or P168.00 (non-bank). Process may take a month to complete.',
            },
            {
                id: 'other-4',
                question: 'How can I transfer my stock positions to another broker from DMSI?',
                answer: 'Download and fill-up the Request for Stock Transfer form and send the original copy to our office. Electronic transfers take 1-2 working days. Transfer fee of P75.00 per stock charged by both issuing and receiving broker.',
            },
            {
                id: 'other-5',
                question: 'If I have no access to a computer/internet, can iTRADE execute my orders on my behalf?',
                answer: 'Yes, you may send your orders via your DMSI-registered email to accounts@damarketsec.com or call our trading desk at +632 88919143, +632 88919144, or +63 917 863 3169. Our in-house broker-dealers can execute orders on your behalf. No additional charges for broker-assisted trades.',
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
                                                        ? 'bg-brand-primary text-white'
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
                                                        <p className="whitespace-pre-line text-base text-muted-foreground">
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
                                            className="text-brand-primary font-medium hover:underline"
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
