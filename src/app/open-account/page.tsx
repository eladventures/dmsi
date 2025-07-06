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
        link.href = '/forms/registration-form.pdf';
        link.download = 'DA-Market-Securities-Registration-Form.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen">
            <HeroHeader />
            
            <PageHero
                title="Open Your Account"
                subtitle="Start your investment journey with DA Market Securities. Follow our simple process to open your trading account and begin investing in the Philippine stock market."
            />

            <SectionWrapper maxWidth="medium">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-muted/30 rounded-2xl border p-8 text-center mb-16"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-[#40739d] p-4 rounded-full">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Registration Form</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Download our comprehensive registration form to begin the account opening process. This form includes all necessary documents and agreements.
                        </p>
                        <Button
                            onClick={handleFormDownload}
                            size="lg"
                            className="bg-[#40739d] hover:bg-[#40739d]/90 text-white"
                        >
                            <Download className="h-5 w-5 mr-2" />
                            DOWNLOAD FORM
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-center">Steps on Opening an Account</h2>
                        <div className="space-y-6">
                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-[#40739d] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Download the PDF copy of the kind of account that you want to open containing CAIF, Securities Trading Agreement, Two (2) copies of Specimen Signature Cards, Data Privacy Agreement, and FATCA (for individuals).
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-[#40739d] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        2
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Fill in the required fields in your Customer Account Information Form.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-[#40739d] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        Print and sign all areas required for client signature for joint account, both the primary and secondary account holder signature is required.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-[#40739d] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        4
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <p className="text-muted-foreground mb-4">
                                            Submit the forms and other requirements to DMSI Office:
                                        </p>
                                        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                                            <div className="text-[#40739d] space-y-1">
                                                <p className="font-semibold">DA Market Securities, Inc.</p>
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <p>Unit 1105, PSE Tower, 5th Ave. Cor. 28th St.</p>
                                                        <p>Bonifacio Global City, Taguig City, Philippines,1634</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    <p>Tel. (02) 8834-7765 / 8887-6407 / 8887-5457</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    <p>Email address: helpdesk@itrade.ph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg border p-6 flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-[#40739d] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        5
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">
                                        A DMSI representative will send an email for the confirmation of receipt of the documents. You will receive an email notification containing username and password once your application is approved.
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
                                        Duly accomplished and signed Customer Account Information Form (containing CAIF, Securities Trading Agreement, Two (2) copies of Specimen Signature Cards, Data Privacy Agreement, and FATCA)
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">
                                        Minimum cash/check deposit to DA Market Securities, Inc. for Php 100,000.00.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">
                                        Photocopy of one (1) identity document (ID) issued by the Philippine Government e.g. Passport, Driver License, SSS/GSIS ID, Professional Regulation Commission (PRC) ID, and Comelec Voter ID. (Please present original for verification) for each account holder; or two (2) secondary IDs (e.g. School ID with Picture, Postal ID, Office ID) for each account holder.
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
                            <h3 className="text-2xl font-bold mb-6">B. Additional Requirements for Foreigners</h3>
                            
                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">1. Resident Foreigners</h4>
                                <div className="space-y-2 ml-4">
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">a.</span>
                                        <p className="text-muted-foreground">Alien certificate of registration (ACR) issued by the Bureau of Immigration; or</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">b.</span>
                                        <p className="text-muted-foreground">A Certification to engage in business or working permit issued by the Department of Labor & Employment (DOLE)</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3">2. Non-Resident Foreigners – include the following:</h4>
                                <div className="space-y-2 ml-4">
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">a.</span>
                                        <p className="text-muted-foreground">Proof of Income Certified by Employer; and</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-muted-foreground">b.</span>
                                        <p className="text-muted-foreground">Identity Documents authenticated by Philippine Embassy or Consulate.</p>
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