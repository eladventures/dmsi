'use client';

import React from 'react';
import { HeroHeader } from '@/components/hero-header';
import { Footer } from '@/components/footer';
import { PageHero } from '@/components/page-hero';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Download, FileText, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OpenAccountPage() {
    const handleFormDownload = () => {
        const link = document.createElement('a');
        link.href = '/forms/individual_or_joint_forms_online.pdf';
        link.download = 'DA-Market-Securities-Account-Opening-Form.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen">
            <HeroHeader />
            
            <PageHero
                title="Open Your Account"
                subtitle="Start your investment journey with DA Market Securities. Follow our simple process to open a trading account and begin investing in the Philippine stock market."
            />

            <SectionWrapper maxWidth="medium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-muted/30 rounded-2xl border p-8 text-center mb-16"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-brand-primary p-4 rounded-full">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Account Opening Form</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Download and complete the Account Opening Form to begin the account opening process. The form includes the required account information, agreements, and declarations.
                        </p>
                        <Button
                            onClick={handleFormDownload}
                            size="lg"
                            className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                        >
                            <Download className="h-5 w-5 mr-2" />
                            DOWNLOAD ACCOUNT OPENING FORM
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">Steps to Open an Account</h2>
                        <div className="space-y-6">
                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Download and complete the Account Opening Form, including the Customer Account Information Form (CAIF), Securities Trading Agreement, Specimen Signature Cards, Data Privacy Consent Form, and FATCA Declaration, if applicable.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        2
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Complete all required fields in your Customer Account Information Form.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Print and sign all sections that require the client's signature. For joint accounts, both the primary and secondary account holders must sign.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        4
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <p className="text-muted-foreground mb-4">
                                            Email the accomplished form and supporting documents to accounts@damarketsec.com for initial review. After the review, submit the signed original documents personally or via courier to the DA Market office:
                                        </p>
                                        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                                            <div className="text-brand-primary space-y-1">
                                                <p className="font-semibold">DA Market Securities, Inc.</p>
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <p>Unit 1105, PSE Tower, 5th Ave. Cor. 28th St.</p>
                                                        <p>Bonifacio Global City, Taguig City 1634, Philippines</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    <p>Tel. (02) 8834-7765 / 8887-6407 / 8887-5457</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    <p>Email address: accounts@damarketsec.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        5
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        A DA Market representative will send an email confirming receipt of your documents. Once your application is approved, you will receive an email with your username and temporary password.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-card rounded-2xl border p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6">A. Application Requirements</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">
                                        Completed and signed account opening forms, including the Customer Account Information Form (CAIF), Securities Trading Agreement, two (2) Specimen Signature Cards, Data Privacy Consent Form, and FATCA Declaration, if applicable.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">
                                        Minimum initial cash or check deposit of PHP 100,000.00, payable to DA Market Securities, Inc.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">
                                        Photocopy of one (1) valid government-issued ID, such as a passport, Driver's License, SSS/GSIS ID, Professional Regulation Commission (PRC) ID, or COMELEC Voter's ID. Please present the original ID for verification. Alternatively, two (2) secondary IDs, such as a school ID with photo, postal ID, or office ID, may be submitted for each account holder.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">
                                        Know Your Customer (KYC) verification and additional supporting documents may be requested as part of regulatory requirements.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="bg-card rounded-2xl border p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6">B. Additional Requirements for Foreign Nationals</h3>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">1. Resident Foreign Nationals</h4>
                                <div className="space-y-2 ml-4">
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">a.</span>
                                        <p className="text-muted-foreground">Alien Certificate of Registration (ACR) issued by the Bureau of Immigration; or</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">b.</span>
                                        <p className="text-muted-foreground">Certification to engage in business or a work permit issued by the Department of Labor and Employment (DOLE).</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">2. Non-Resident Foreign Nationals - include the following:</h4>
                                <div className="space-y-2 ml-4">
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">a.</span>
                                        <p className="text-muted-foreground">Proof of income certified by the employer; and</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">b.</span>
                                        <p className="text-muted-foreground">Identity documents authenticated by a Philippine Embassy or Consulate.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
            </SectionWrapper>

            <Footer />
        </div>
    );
}
