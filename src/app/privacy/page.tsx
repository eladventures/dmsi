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
        subtitle="Our commitment to protecting your personal information."
      />

      <SectionWrapper maxWidth="medium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-card rounded-2xl border p-8 md:p-12 shadow-sm">

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Purpose and Scope</h2>
              <p className="text-muted-foreground">
                DA Market Securities, Inc. ("DA Market") collects Personal Data through lawful means and solely for lawful purposes directly related and necessary to its functions and operations as a securities broker.
              </p>
              <p className="text-muted-foreground mt-4">
                DA Market is committed to promoting a culture of privacy within the organization and complies with the Data Privacy Act of 2012 (Republic Act No. 10173). We safeguard and protect your Personal Data, including both personal information and sensitive personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Personal Data That DA Market Collects and Processes</h2>
              <p className="text-muted-foreground mb-4">
                When you apply for an account or avail of DA Market's brokerage services, we may collect:
              </p>
              <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                <li>Full Name</li>
                <li>Nationality</li>
                <li>Gender</li>
                <li>Date and Place of Birth</li>
                <li>Civil Status</li>
                <li>Permanent and Present Address</li>
                <li>Educational Background</li>
                <li>Contact Details (Mobile, Landline and Email Address)</li>
                <li>Tax Identification Number (TIN) and other Government-issued IDs (SSS/GSIS)</li>
                <li>Previous Employment Information</li>
                <li>Employment and Business Information</li>
                <li>Financial Information and Investment Profile</li>
                <li>Name of Spouse</li>
                <li>Bank Account Details</li>
                <li>Specimen Signature</li>
                <li>Other information required by AMLA, PSE, CMIC, SEC and applicable laws.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Use and Purpose of Collection</h2>
              <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                <li>Know-Your-Customer (KYC) procedures</li>
                <li>Evaluation and processing of applications</li>
                <li>Compliance with AMLA, PSE, CMIC, SCCP, SEC, PDTC and other government regulations</li>
                <li>Performance of DA Market's operations as a securities broker</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Retention</h2>
              <p className="text-muted-foreground">
                Only authorized personnel have access to your Personal Data. DA Market may disclose information to government agencies, banks, external auditors, tax authorities, courts and other lawful authorities whenever required by law. Personal Data is retained only for as long as necessary to fulfill its intended purpose and comply with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Privacy Rights</h2>
              <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                <li>Right to be informed</li>
                <li>Right to access</li>
                <li>Right to object</li>
                <li>Right to erasure or blocking</li>
                <li>Right to damages</li>
                <li>Right to file a complaint</li>
                <li>Right to rectify</li>
                <li>Right to data portability</li>
              </ul>

              <p className="text-muted-foreground mt-6">
                By providing your Personal Data, you acknowledge that you have read, understood and agreed to this Privacy Policy.
              </p>

              <div className="bg-muted rounded-lg p-5 mt-6">
                <p className="text-muted-foreground">
                  <strong>Data Protection Officer</strong><br />
                  DA Market Securities, Inc.<br />
                  Phone: (+632) 8887-5457<br />
                  Mobile: (+63) 917-863-3119<br />
                  Email: compliance@damarketsec.com
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
