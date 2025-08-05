'use client'

import React from 'react'
import { HeroHeader } from '@/components/hero-header'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
    return (
        <div className="min-h-screen">
            <HeroHeader />

            <PageHero
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy outlines how we collect, use, and protect your information."
            />

            <SectionWrapper maxWidth="medium">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-lg max-w-none"
                >
                    <div className="bg-card rounded-2xl border p-8 md:p-12 shadow-sm">
                        <p className="text-muted-foreground mb-8">
                            <strong>Effective Date:</strong> January 1, 2024<br />
                            <strong>Last Updated:</strong> January 1, 2024
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                            <p className="text-muted-foreground mb-4">
                                DA Market Securities, Inc. (&quot;DMSI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173) and its implementing rules and regulations. This Privacy Policy explains how we collect, use, and protect your personal information.
                            </p>
                            <p className="text-muted-foreground">
                                <strong>Data Protection Officer:</strong> Fe M. Caling<br />
                                <strong>Contact:</strong> helpdesk@itrade.ph | (02) 8887-5457
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                            <p className="text-muted-foreground mb-4">We collect personal information necessary to provide brokerage services, including:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li><strong>Identity Information:</strong> Name, address, date of birth, government IDs, TIN</li>
                                <li><strong>Financial Information:</strong> Income, bank details, transaction history, trading records</li>
                                <li><strong>Contact Information:</strong> Phone numbers, email addresses</li>
                                <li><strong>Technical Information:</strong> IP addresses, device information, website usage data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground mb-4">We process your personal information to:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li>Open and maintain your trading account</li>
                                <li>Execute trades and process transactions</li>
                                <li>Comply with regulatory requirements (SEC, PSE, BSP, AMLC, BIR)</li>
                                <li>Provide customer service and support</li>
                                <li>Prevent fraud and ensure security</li>
                                <li>Send important account notifications</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
                            <p className="text-muted-foreground mb-4">We process your information based on:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li><strong>Your consent</strong> for marketing communications</li>
                                <li><strong>Contractual necessity</strong> to provide brokerage services</li>
                                <li><strong>Legal obligations</strong> under Philippine securities and banking laws</li>
                                <li><strong>Legitimate interests</strong> for fraud prevention and service improvement</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">5. Information Sharing</h2>
                            <p className="text-muted-foreground mb-4">We may share your information with:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li><strong>Regulatory authorities</strong> (SEC, PSE, BSP, AMLC, BIR) as required by law</li>
                                <li><strong>Market infrastructure</strong> (PDTC, SCCP) for trade settlement</li>
                                <li><strong>Service providers</strong> (banks, IT vendors) under strict confidentiality agreements</li>
                                <li><strong>Legal authorities</strong> when required by court order or law</li>
                            </ul>
                            <p className="text-muted-foreground">
                                We do not sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                            <p className="text-muted-foreground mb-4">We protect your information through:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li>Encryption of sensitive data</li>
                                <li>Secure access controls and authentication</li>
                                <li>Regular security assessments</li>
                                <li>Employee confidentiality training</li>
                                <li>Secure data storage and backup systems</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                            <p className="text-muted-foreground mb-4">We retain your information as required by law:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li><strong>Account records:</strong> 7 years after account closure (SEC requirement)</li>
                                <li><strong>AML/KYC documents:</strong> 5 years after relationship ends</li>
                                <li><strong>Transaction records:</strong> As required by applicable regulations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                            <p className="text-muted-foreground mb-4">Under the Data Privacy Act, you have the right to:</p>
                            <ul className="text-muted-foreground mb-4 list-disc pl-6">
                                <li><strong>Access</strong> your personal information</li>
                                <li><strong>Correct</strong> inaccurate or incomplete data</li>
                                <li><strong>Object</strong> to certain processing activities</li>
                                <li><strong>Request deletion</strong> in specific circumstances</li>
                                <li><strong>Data portability</strong> in electronic format</li>
                            </ul>
                            <p className="text-muted-foreground">
                                To exercise these rights, contact our Data Protection Officer at helpdesk@itrade.ph.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">9. Cross-Border Transfers</h2>
                            <p className="text-muted-foreground">
                                If we transfer your information outside the Philippines, we ensure adequate protection through contractual safeguards or your explicit consent.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
                            <p className="text-muted-foreground">
                                Our website uses cookies to improve functionality and analyze usage. You can control cookie settings through your browser.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">11. Updates</h2>
                            <p className="text-muted-foreground">
                                We may update this policy periodically. Continued use of our services constitutes acceptance of any changes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <p className="text-muted-foreground">
                                    <strong>Data Protection Officer:</strong> Fe M. Caling<br />
                                    <strong>Address:</strong> Unit 1105, PSE Tower, 5th Ave. Cor. 28th St. BGC, Taguig City 1634<br />
                                    <strong>Email:</strong> helpdesk@itrade.ph<br />
                                    <strong>Phone:</strong> (02) 8887-5457 / (02) 8887-6407 / (02) 8834-7765
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">13. Complaints</h2>
                            <p className="text-muted-foreground">
                                For privacy complaints, contact us directly or file with the National Privacy Commission:
                            </p>
                            <ul className="text-muted-foreground list-disc pl-6">
                                <li><strong>Website:</strong> <a href="https://privacy.gov.ph" className="text-brand-primary hover:underline">privacy.gov.ph</a></li>
                                <li><strong>Hotline:</strong> (02) 8234-2228</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </SectionWrapper>

            <Footer />
        </div>
    )
}
