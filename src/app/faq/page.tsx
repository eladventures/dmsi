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
                answer: 'Established in 1987, DA Market Securities, Inc. (DA Market) is a traditional and online equities brokerage firm with an affiliate in banking and financing in Central Luzon. DA Market is a member of the Philippine Stock Exchange and serves individual and institutional investors with integrity and professionalism.',
            },
            {
                id: 'about-2',
                question: 'What services does DA Market offer?',
                answer: `DA Market offers:

• Online stock trading
• Real-time market data and statistics
• Charting tools
• Broker-assisted trading
• Margin facilities`,
            },
            {
                id: 'about-3',
                question: 'How do I contact DA Market?',
                answer: `Contact Numbers:
(02) 8887-5457 / (02) 8887-6407 / (02) 8834-7765

Email Address:
accounts@damarketsec.com

Office Address:
Unit 1105, PSE Tower, 5th Ave. Cor. 28th St.
Bonifacio Global City, Taguig City 1634, Philippines`,
            },
        ],
        'opening-account': [
            {
                id: 'opening-1',
                question: 'Who can open an account?',
                answer: 'Any individual of legal age, whether local, an OFW, or a foreign national, as well as corporations, may open an account, provided all documentary requirements are submitted. DA Market Securities, Inc. reserves the right to approve or deny any application in accordance with its account opening policies and regulatory requirements.',
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
Bonifacio Global City, Taguig City 1634, Philippines

5. Receive a notification once your application has been approved.

6. Fund your account.

7. Once your application is approved, you will receive an email containing your username and temporary password.`,
            },
            {
                id: 'opening-3',
                question: 'What are the requirements to open an account?',
                answer: `For Individual Accounts:

• Completed account opening forms, including:
  • Customer Account Information Form (CAIF)
  • Trading Agreement
  • Signature Card
  • Data Privacy Consent Form
  • FATCA Declaration (if applicable)

• One (1) valid government-issued ID or two (2) secondary IDs

• Taxpayer Identification Number (TIN)

Additional Requirements for Foreign Nationals:

• Valid passport

• Alien Certificate of Registration (ACR), if applicable

• Other supporting documents as may be required

Additional Requirements for Corporate Accounts:

• Articles of Incorporation

• SEC Registration Documents

• Board Resolution authorizing the opening of the account

• Secretary's Certificate

• Latest General Information Sheet (GIS)

• Other supporting documents as may be required

Know Your Customer (KYC) verification and additional supporting documents may be requested as part of regulatory requirements.`,
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
                question: 'Investing in REITs: What is a NoCD?',
                answer: `A Name on Central Depository (NoCD) is a securities account created in the client's name and maintained through the Philippine Depository & Trust Corp. (PDTC).

Under current regulations, investors in Real Estate Investment Trusts (REITs) are required to have a NoCD account so that their REIT holdings are recorded directly in their own name.

DA Market Securities will assist eligible clients in the opening of a NoCD account when required.`,
            },
        ],
        'account-funding': [
            {
                id: 'funding-1',
                question: 'How do I fund my account?',
                answer: `You may fund your account through any of DA Market's partner banks.

Send the deposit confirmation to accounts@damarketsec.com with the subject line: FUND DEPOSIT.

Account Name:
DA Market Securities, Inc.

Partner Banks:
• BDO (01-1868-0012-97)
• BPI (3541-0031-33)
• Metrobank (264-7-26481071-6)
• RCBC (1216-0203-98)`,
            },
            {
                id: 'funding-2',
                question: 'What is the minimum investment required to open an account?',
                answer: 'The minimum initial cash or check deposit is PHP 100,000.00, payable to DA Market Securities, Inc.',
            },
            {
                id: 'funding-3',
                question: 'Is there a maintaining balance for my account?',
                answer: 'You must maintain at least PHP 100,000.00 in cash or securities in your account.',
            },
            {
                id: 'funding-4',
                question: 'How long does it take before my deposit is reflected on my account?',
                answer: 'Cash deposits to any of DA Market Securities\' bank accounts will be reflected in your portfolio on the next trading day. Check deposits will be reflected after the one (1) day check-clearing period. The cut-off time for deposits is 3:00 PM.',
            },
        ],
        'trading-fees': [
            {
                id: 'fees-1',
                question: 'What types of securities can I trade?',
                answer: 'You can trade all non-suspended stocks, exchange-traded funds (ETFs), and real estate investment trusts (REITs) publicly listed on the Philippine Stock Exchange (PSE).',
            },
            {
                id: 'fees-2',
                question: 'What are the trading hours?',
                answer: `Trading Hours:

Monday to Friday
• 9:00 AM - Pre-Open
• 9:15 AM - Pre-Open No-Cancel
• 9:30 AM - Market Open / Continuous Trading
• 12:00 NN - Market Recess
• 1:00 PM - Market Resumption
• 2:45 PM - Pre-Close
• 2:50 PM - Run-Off
• 3:00 PM - Market Close`,
            },
            {
                id: 'fees-3',
                question: 'How much does it cost to buy and sell shares of stock?',
                answer: `Buy Transaction:
• Commission: 0.25% (minimum PHP 20.00)
• VAT: 12%
• PSE fee: 0.005%
• SCCP fee: 0.01%

Sell Transaction:
Same as buy transaction, plus 0.60% sales tax.

PDTC Depository Maintenance Fee:
PHP 0.00000833 per peso market value monthly.`,
            },
            {
                id: 'fees-4',
                question: 'What are the related fees to my account?',
                answer: 'For online accounts, DA Market Securities reserves the right to transfer an account to broker-assisted status. Broker-assisted accounts are subject to a minimum commission fee of PHP 200.00 per transaction and a monthly maintenance fee of PHP 350.00 for dormant accounts with no transactions for at least two (2) years.',
            },
            {
                id: 'fees-5',
                question: 'Do you provide Margin Facilities?',
                answer: 'Yes. To learn more about margin facilities, contact DA Market Securities at (02) 8887-5457, (02) 8834-7765, or +63 917 863 3119.',
            },
        ],
        'online-trading': [
            {
                id: 'online-1',
                question: 'How do I place an order?',
                answer: 'Go to Equities and enter the stock you want to buy or sell. Press F6 to buy or F8 to sell. When the order ticket appears, enter the order details and click Preview Buy/Sell. Review the confirmation box, then click Proceed to post your order.',
            },
            {
                id: 'online-2',
                question: 'What are the rules in posting an order?',
                answer: 'Only limit orders are accepted. Orders must be within the applicable trading thresholds: Static Threshold (30% below to 50% above the previous day\'s trade) and Dynamic Threshold (10% to 20%, depending on the security cluster and trading frequency).',
            },
            {
                id: 'online-3',
                question: 'What are the validity types of an order?',
                answer: `1. Day - valid until the end of the trading day.
2. GTC (Good Till Cancelled) - valid for one (1) year.
3. IOC (Immediate or Cancel) - fills partially, then cancels any remaining quantity.
4. GTD (Good Till Date) - valid until the specified date.
5. Session - valid for the current trading session only.
6. Iceberg - breaks large orders into smaller visible quantities.`,
            },
            {
                id: 'online-4',
                question: 'What is a board lot?',
                answer: 'A board lot is the minimum number of shares that can be traded for a particular stock. Board lot sizes vary by price range, from 5 shares for stocks above PHP 5,000.00 to 1,000,000 shares for stocks priced from PHP 0.0001 to PHP 0.0099.',
            },
            {
                id: 'online-5',
                question: 'Can I modify or cancel an order?',
                answer: 'Yes. Orders may be revised or cancelled as long as they have not yet been matched. Editing is allowed only during the continuous trading phase (9:30 AM to 12:00 NN and 1:00 PM to 3:00 PM). Modifications are not allowed during the Pre-Open and Pre-Close No-Cancellation periods.',
            },
            {
                id: 'online-6',
                question: 'Are there hot keys (keyboard shortcuts) within the trading platform?',
                answer: `In the Equities window:
• F6 - Buy
• F8 - Sell
• Arrow Up - One fluctuation up
• Arrow Down - One fluctuation down
• K - Multiply quantity by 1,000
• M - Multiply quantity by 1,000,000`,
            },
        ],
        'maintaining-account': [
            {
                id: 'maintain-1',
                question: 'What if I forget my username or password?',
                answer: 'Contact DA Market Securities at (02) 8887-5457, (02) 8834-7765, or +63 917 863 3119, or send an email to accounts@damarketsec.com to request a username or password reset.',
            },
            {
                id: 'maintain-2',
                question: 'What if I want to update my account details?',
                answer: 'Contact DA Market Securities at (02) 8887-6407, (02) 8834-7765, or +63 917 863 3119, or send an email to accounts@damarketsec.com to update your account details.',
            },
            {
                id: 'maintain-3',
                question: 'What if I want to change my password?',
                answer: 'Log in to your account. Under Account, click on "Change Password" and input your new password.',
            },
            {
                id: 'maintain-4',
                question: 'How many computers can I use to log in to my DA Market online trading account?',
                answer: 'You may register your DA Market online trading account on up to two laptops or computers. The two computers cannot be logged in to the account at the same time. To register a new computer, send an email to accounts@damarketsec.com for assistance.',
            },
            {
                id: 'maintain-5',
                question: 'How do I confirm completed transactions for the day?',
                answer: 'You will receive confirmation receipts for all completed transactions through your registered email. To view historical transactions, email accounts@damarketsec.com and request your account ledger.',
            },
        ],
        'other-services': [
            {
                id: 'other-1',
                question: 'How do I participate in Initial Public Offerings (IPOs), Follow-on Offerings (FOOs) and Stock Rights Offerings (SROs)?',
                answer: 'You will receive announcements via email or phone message. You may reply with the preferred number of shares you wish to reserve. Order reservations are not guaranteed and may depend on allocation, trading volume, and availability. Payment will be debited from your trading account.',
            },
            {
                id: 'other-2',
                question: 'How do I withdraw from my account?',
                answer: 'Fill out and sign the Fund Withdrawal Form, then email it to accounts@damarketsec.com with the subject line: FUND WITHDRAWAL REQUEST. The cut-off time for withdrawal requests is 11:00 AM. Proceeds from a stock sale may be withdrawn two (2) trading days after the sale date (T+2).',
            },
            {
                id: 'other-3',
                question: 'How can I withdraw (or uplift) my stock positions from DA Market Securities?',
                answer: 'Submit the Stock Certificate Upliftment Form, a photocopy of two (2) valid government-issued IDs, and the originally signed specimen signature card for each stock/company. The upliftment fee is PHP 150.00 per certificate for bank stocks and PHP 168.00 per certificate for non-bank stocks. Processing may take up to one (1) month.',
            },
            {
                id: 'other-4',
                question: 'How can I transfer my stock positions to another broker from DA Market?',
                answer: 'Download and complete the Request for Stock Transfer Form, then send the original copy to the DA Market office. Electronic transfers usually take one (1) to two (2) working days. A transfer fee of PHP 75.00 per stock is charged by both the issuing and receiving brokers.',
            },
            {
                id: 'other-5',
                question: 'If I have no access to a computer or the internet, can DA Market execute my orders on my behalf?',
                answer: 'Yes. You may send your orders using your DA Market-registered email to accounts@damarketsec.com or call the trading desk at +632 88919143, +632 88919144, or +63 917 863 3169. DA Market Securities\' in-house broker-dealers can execute orders on your behalf. No additional charges apply for broker-assisted trades.',
            },
        ],
    }

    const currentFAQs = faqContent[activeCategory] || []

    const renderLinkedText = (text: string) => {
        const formLabel = 'Account Opening Form'
        const formIndex = text.indexOf(formLabel)

        if (formIndex === -1) {
            return text
        }

        return (
            <>
                {text.slice(0, formIndex)}
                <Link href="/forms" className="font-medium text-brand-primary hover:underline">
                    {formLabel}
                </Link>
                {text.slice(formIndex + formLabel.length)}
            </>
        )
    }

    const renderFAQAnswer = (answer: string) => {
        const bullet = '\u2022'

        return answer
            .split('\n')
            .map((line) => line.trimEnd())
            .filter((line) => line.trim().length > 0)
            .map((line, index) => {
                const trimmedLine = line.trim()
                const isNestedBullet = line.startsWith(`  ${bullet}`)

                if (/^\d+\.\s/.test(trimmedLine)) {
                    const [number, ...text] = trimmedLine.split(' ')

                    return (
                        <p key={index} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                            <span className="font-semibold text-foreground">{number}</span>
                            <span>{renderLinkedText(text.join(' '))}</span>
                        </p>
                    )
                }

                if (trimmedLine.startsWith(bullet)) {
                    return (
                        <p
                            key={index}
                            className={`flex gap-3 text-base leading-relaxed text-muted-foreground ${
                                isNestedBullet ? 'ml-5' : ''
                            }`}
                        >
                            <span className="text-foreground">{bullet}</span>
                            <span>{renderLinkedText(trimmedLine.replace(/^\u2022\s*/, ''))}</span>
                        </p>
                    )
                }

                if (trimmedLine.endsWith(':') || trimmedLine === 'DA Market Securities, Inc.') {
                    return (
                        <p key={index} className="pt-3 text-base font-semibold leading-relaxed text-foreground first:pt-0">
                            {trimmedLine}
                        </p>
                    )
                }

                return (
                    <p key={index} className="text-base leading-relaxed text-muted-foreground">
                        {renderLinkedText(trimmedLine)}
                    </p>
                )
            })
    }

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
                                                    <div className="px-6 pb-5">
                                                        <div className="space-y-2.5">
                                                            {renderFAQAnswer(item.answer)}
                                                        </div>
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
                                            href="mailto:accounts@damarketsec.com?subject=FAQ%20Support%20Inquiry"
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
