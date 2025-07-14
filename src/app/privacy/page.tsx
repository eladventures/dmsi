'use client'

import React from 'react'
import { HeroHeader } from '@/components/hero-header'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { SectionWrapper } from '@/components/section-wrapper'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
    return (
        <div className=&quot;min-h-screen&quot;>
            <HeroHeader />
            
            <PageHero
                title=&quot;Privacy Policy&quot;
                subtitle=&quot;Your privacy is important to us. This policy outlines how we collect, use, and protect your information.&quot;
            />

            <SectionWrapper maxWidth=&quot;medium&quot;>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=&quot;prose prose-lg max-w-none&quot;
                >
                    <div className=&quot;bg-card rounded-2xl border p-8 md:p-12 shadow-sm&quot;>
                        <p className=&quot;text-muted-foreground mb-8&quot;>
                            <strong>Effective Date:</strong> January 1, 2024<br />
                            <strong>Last Updated:</strong> January 1, 2024
                        </p>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>1. Introduction</h2>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                DA Market Securities, Inc. (&quot;DMSI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and trading platform.
                            </p>
                            <p className=&quot;text-muted-foreground&quot;>
                                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access our services.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>2. Information We Collect</h2>
                            
                            <h3 className=&quot;text-xl font-semibold mb-3&quot;>2.1 Personal Information</h3>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                We collect personal information that you provide to us when opening an account, including but not limited to:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li>Full name and aliases</li>
                                <li>Date of birth</li>
                                <li>Government-issued identification numbers (SSS, TIN, passport, driver&apos;s license)</li>
                                <li>Contact information (address, phone number, email)</li>
                                <li>Employment information</li>
                                <li>Financial information (income, net worth, investment objectives)</li>
                                <li>Bank account details</li>
                            </ul>

                            <h3 className=&quot;text-xl font-semibold mb-3&quot;>2.2 Trading Information</h3>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                We collect information about your trading activities, including:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li>Transaction history</li>
                                <li>Account balances</li>
                                <li>Investment preferences</li>
                                <li>Trading patterns and behaviors</li>
                            </ul>

                            <h3 className=&quot;text-xl font-semibold mb-3&quot;>2.3 Technical Information</h3>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                When you use our online platform, we automatically collect:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Device information</li>
                                <li>Login data and access times</li>
                                <li>Pages visited and features used</li>
                            </ul>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>3. How We Use Your Information</h2>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                We use the collected information for the following purposes:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li>To open and maintain your trading account</li>
                                <li>To execute your trading orders and process transactions</li>
                                <li>To verify your identity and comply with Know Your Customer (KYC) requirements</li>
                                <li>To comply with legal and regulatory obligations</li>
                                <li>To prevent fraud, money laundering, and other illegal activities</li>
                                <li>To communicate with you about your account and our services</li>
                                <li>To provide customer support</li>
                                <li>To improve our services and develop new features</li>
                                <li>To send marketing communications (with your consent)</li>
                            </ul>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>4. Legal Basis for Processing</h2>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                We process your personal data based on the following legal grounds:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li><strong>Contract Performance:</strong> To provide our services and fulfill our contractual obligations to you</li>
                                <li><strong>Legal Obligations:</strong> To comply with Philippine securities laws and regulations</li>
                                <li><strong>Legitimate Interests:</strong> To operate our business, prevent fraud, and ensure network security</li>
                                <li><strong>Consent:</strong> For marketing communications and certain data processing activities</li>
                            </ul>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>5. Information Sharing and Disclosure</h2>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                We may share your information with:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li><strong>Philippine Stock Exchange (PSE):</strong> As required for trading activities</li>
                                <li><strong>Securities Clearing Corporation of the Philippines (SCCP):</strong> For settlement of trades</li>
                                <li><strong>Regulatory Authorities:</strong> Including the Securities and Exchange Commission (SEC) and other government agencies</li>
                                <li><strong>Financial Institutions:</strong> For processing deposits and withdrawals</li>
                                <li><strong>Service Providers:</strong> Third parties who assist us in operating our business</li>
                                <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                            </ul>
                            <p className=&quot;text-muted-foreground&quot;>
                                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>6. Data Security</h2>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                We implement appropriate technical and organizational measures to protect your personal data, including:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li>Encryption of sensitive data in transit and at rest</li>
                                <li>Secure access controls and authentication procedures</li>
                                <li>Regular security assessments and audits</li>
                                <li>Employee training on data protection</li>
                                <li>Physical security measures at our offices</li>
                            </ul>
                            <p className=&quot;text-muted-foreground&quot;>
                                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>7. Data Retention</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                We retain your personal data for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. Generally, we retain client records for at least five (5) years after account closure, as required by Philippine securities regulations.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>8. Your Rights</h2>
                            <p className=&quot;text-muted-foreground mb-4&quot;>
                                Under the Philippine Data Privacy Act of 2012, you have the following rights:
                            </p>
                            <ul className=&quot;list-disc pl-6 mb-4 text-muted-foreground space-y-2&quot;>
                                <li><strong>Right to be Informed:</strong> To know how your personal data is processed</li>
                                <li><strong>Right to Access:</strong> To request a copy of your personal data</li>
                                <li><strong>Right to Rectification:</strong> To correct inaccurate or incomplete data</li>
                                <li><strong>Right to Erasure:</strong> To request deletion of your data (subject to legal requirements)</li>
                                <li><strong>Right to Data Portability:</strong> To receive your data in a structured format</li>
                                <li><strong>Right to Object:</strong> To object to certain processing activities</li>
                                <li><strong>Right to File a Complaint:</strong> To lodge a complaint with the National Privacy Commission</li>
                            </ul>
                            <p className=&quot;text-muted-foreground&quot;>
                                To exercise these rights, please contact our Data Protection Officer using the contact information below.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>9. Cookies and Tracking Technologies</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect the functionality of our services.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>10. International Data Transfers</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                Your information may be transferred to and processed in countries other than the Philippines. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>11. Children&apos;s Privacy</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>12. Changes to This Policy</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after such modifications constitutes your acknowledgment of the modified policy.
                            </p>
                        </section>

                        <section className=&quot;mb-8&quot;>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>13. Contact Information</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                If you have questions about this privacy policy or our data practices, please contact us:
                            </p>
                            <div className=&quot;bg-muted/50 rounded-lg p-6 mt-4&quot;>
                                <p className=&quot;text-muted-foreground&quot;>
                                    <strong>Data Protection Officer</strong><br />
                                    DA Market Securities, Inc.<br />
                                    Unit 1105, PSE Tower<br />
                                    5th Ave. Cor. 28th St.<br />
                                    Bonifacio Global City, Taguig City<br />
                                    Philippines 1634<br /><br />
                                    Email: privacy@damarkets.ph<br />
                                    Phone: (02) 8834-7765
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className=&quot;text-2xl font-bold mb-4&quot;>14. Complaints</h2>
                            <p className=&quot;text-muted-foreground&quot;>
                                If you believe your data privacy rights have been violated, you may file a complaint with:
                            </p>
                            <div className=&quot;bg-muted/50 rounded-lg p-6 mt-4&quot;>
                                <p className=&quot;text-muted-foreground&quot;>
                                    <strong>National Privacy Commission</strong><br />
                                    3rd Floor, Core G, GSIS Headquarters Building<br />
                                    Financial Center, Roxas Boulevard<br />
                                    Pasay City, Metro Manila<br />
                                    Website: www.privacy.gov.ph<br />
                                    Email: info@privacy.gov.ph
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </SectionWrapper>

            <Footer />
        </div>
    )
}