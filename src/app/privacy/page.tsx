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
                                DA Market Securities, Inc. (&quot;DMSI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and trading platform.
                            </p>
                            <p className="text-muted-foreground">
                                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access our services.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </SectionWrapper>

            <Footer />
        </div>
    )
}
