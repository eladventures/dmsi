"use client";

import React from 'react';
import Link from 'next/link';
import { HeroHeader } from "@/components/hero-header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// TO ADD A NEW ANNOUNCEMENT: copy one { ... } block below, paste it at the TOP
// of this array (newest first), and edit the fields. `link` is optional — delete
// it if the announcement has no button.
// ─────────────────────────────────────────────────────────────────────────────
const announcements = [
    {
        date: "May 16, 2026",
        category: "Corporate Governance",
        title: "DA Market Securities Announces 2026 Board of Directors and Corporate Governance Leadership",
        paragraphs: [
            "DA Market Securities, Inc. is pleased to announce its Board of Directors following the Company's Annual Stockholders' Meeting held on May 16, 2026.",
            "The Board reflects DA Market's continued commitment to strong corporate governance, regulatory compliance, prudent risk management, and long-term value creation for clients and stakeholders.",
            "The Company also welcomes the leadership of Abigail Tina M. Del Rosario as Chairperson of the Board and Independent Director. Together with the other members of the Board and the Audit & Compliance Committee, the Company remains focused on strengthening governance practices and supporting its strategic growth initiatives.",
            "As one of the Philippine capital market's long-standing brokerage firms, DA Market Securities continues to uphold the highest standards of professionalism, integrity, and client service.",
        ],
        footer: "For the complete list and profiles of our Board of Directors and Corporate Officers, please visit the Board of Directors section of our website.",
        link: { label: "View Board of Directors", href: "/about" },
    },
];

function AnnouncementCard({ item, index }: { item: (typeof announcements)[number]; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border-2 border-brand-primary bg-card p-8 shadow-sm md:p-12"
        >
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                </span>
                <span className="inline-flex items-center rounded-full bg-brand-yellow/20 px-3 py-1 font-medium text-foreground">
                    {item.category}
                </span>
            </div>

            <h2 className="mb-8 text-2xl font-semibold leading-tight md:text-3xl">
                {item.title}
            </h2>

            <div className="space-y-5">
                {item.paragraphs.map((text, i) => (
                    <p key={i} className="leading-relaxed text-muted-foreground">
                        {text}
                    </p>
                ))}
            </div>

            {(item.footer || item.link) && (
                <div className="mt-10 border-t pt-8">
                    {item.footer && (
                        <p className="mb-5 leading-relaxed text-muted-foreground">{item.footer}</p>
                    )}
                    {item.link && (
                        <Button asChild className="border-0 bg-brand-primary hover:bg-brand-primary/90">
                            <Link href={item.link.href}>
                                <span>{item.link.label}</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            )}
        </motion.article>
    );
}

function AnnouncementsList() {
    return (
        <SectionWrapper maxWidth="medium" spacing="small">
            <div className="space-y-10">
                {announcements.map((item, index) => (
                    <AnnouncementCard key={index} item={item} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}

export default function AnnouncementsPage() {
    return (
        <div className="min-h-screen">
            <HeroHeader />

            <PageHero
                title="Announcements"
                subtitle="Official corporate updates, governance news, and milestones from DA Market Securities."
            />

            <AnnouncementsList />

            <Footer />
        </div>
    );
}
