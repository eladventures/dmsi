"use client";

import React from 'react';
import { HeroHeader } from "@/components/hero-header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, DollarSign, Users, PieChart, Home, Globe, CreditCard, GraduationCap, FileText } from "lucide-react";

function VisionContentSection() {
    return (
        <SectionWrapper maxWidth="medium" spacing="small">
            <div className="space-y-8 md:space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-medium lg:text-5xl mb-6">
                        Transforming DA Market into a Full-Service Investment Platform
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                        DA Market Securities is on a strategic journey - evolving from a traditional equities brokerage into a modern, 
                        independent, full-service investment firm.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-medium">Our Strategic Goal</h3>
                        <p className="text-muted-foreground">
                            To offer the same breadth of services found at leading U.S. brokerage houses, 
                            while staying rooted in Philippine regulatory integrity and client trust.
                        </p>
                        <p className="text-muted-foreground">
                            We are building a platform where investors - retail, high-net-worth, and institutional - 
                            can access a full range of wealth services under one roof.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-medium">Our Strategy</h3>
                        <p className="text-muted-foreground">
                            Combine global wealth management standards with local accessibility - creating a 
                            trusted financial home for every kind of investor.
                        </p>
                        <p className="text-muted-foreground">
                            Through strategic partnerships and innovative technology, we aim to democratize access 
                            to sophisticated financial services while maintaining the personalized attention that 
                            defines our client relationships.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}

function ServiceExpansionSection() {
    const currentServices = [
        { name: "Fixed Income Instruments", icon: TrendingUp },
        { name: "Securities-Based Lending (SBL)", icon: Shield },
        { name: "Money Market Interest on Idle Cash", icon: DollarSign }
    ];

    const futureServices = [
        { name: "Investment Advisory & Financial Planning", icon: Users },
        { name: "Portfolio Management & Discretionary Services", icon: PieChart },
        { name: "Lending, Protection, and Retirement Solutions", icon: Home },
        { name: "Insurance Solutions", icon: CreditCard },
        { name: "Educational Plans", icon: GraduationCap },
        { name: "Estate Planning Services", icon: FileText },
        { name: "Digital Access for Global & Offshore Clients", icon: Globe }
    ];

    return (
        <SectionWrapper background="muted">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-medium lg:text-5xl mb-6">
                    Expanding Our Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    Under the leadership of President Jocelyn &ldquo;Joy&rdquo; David-Greenlaw, DA Market is evolving 
                    from a traditional equities brokerage into a full-service investment platform.
                </p>
            </motion.div>

            {/* Current Services Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h3 className="text-2xl font-bold text-center mb-8">We are currently rolling out key services such as:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {currentServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-32 flex flex-col justify-center"
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-brand-primary/10 rounded-full mx-auto mb-3 group-hover:bg-brand-primary/20 transition-colors duration-300">
                                    <IconComponent className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-sm font-semibold leading-tight">{service.name}</h3>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Future Services Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-center mb-8">As part of our long-term strategy, we are also laying the groundwork to offer:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {futureServices.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-32 flex flex-col justify-center"
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-brand-primary/10 rounded-full mx-auto mb-3 group-hover:bg-brand-primary/20 transition-colors duration-300">
                                    <IconComponent className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-sm font-semibold leading-tight">{service.name}</h3>
                            </motion.div>
                        );
                    })}
                    {/* DA Market Logo Card to balance the layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: futureServices.length * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-32 flex items-center justify-center"
                    >
                        <img 
                            src="/images/da_market_logo.png" 
                            alt="DA Market Securities"
                            className="w-2/3 h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}

function LeadershipSpotlightSection() {
    return (
        <SectionWrapper>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-medium lg:text-5xl mb-6">
                    Leadership Spotlight
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    Meet the visionary leader driving DA Market&apos;s transformation
                </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-3 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-brand-primary group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                        <img
                            className="w-full h-auto aspect-[4/5] object-cover"
                            src="/team/jocelyn-greenlaw.jpg"
                            alt="Jocelyn David-Greenlaw"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6 md:col-span-2"
                >
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Jocelyn &ldquo;Joy&rdquo; David-Greenlaw</h3>
                        <p className="text-xl text-brand-primary font-semibold mb-4">President, DA Market Securities, Inc.</p>
                        <p className="text-lg text-muted-foreground italic">
                            Entrepreneurial Roots • 20+ Years U.S. Wealth Management Experience • Passionate About Financial Empowerment
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-muted-foreground">
                            Jocelyn David-Greenlaw has dedicated her life to finance, business, and service. Raised alongside her siblings 
                            in a family of entrepreneurs, she was immersed from childhood in a wide range of ventures — including jewelry 
                            and pawnshop operations, money changing, foreign remittance and courier services, real estate, rural banking, 
                            education, and other businesses.
                        </p>

                        <p className="text-muted-foreground">
                            For more than 20 years before moving to the U.S., Jocelyn was actively involved in managing these family businesses — 
                            gaining hands-on experience across multiple industries and developing a deep understanding of local financial needs 
                            and client relationships.
                        </p>

                        <p className="text-muted-foreground">
                            She then spent another over two decades in the U.S. financial services industry, holding key client-facing roles at 
                            institutions such as <strong>Bank of America, Morgan Stanley, Bank of America Investments, Wachovia Securities, and Wells Fargo Advisors</strong>.
                        </p>

                        <p className="text-muted-foreground">
                            Known to most as Joy, she returned to the Philippines and acquired DA Market Securities from her family, as her siblings 
                            continued to focus on the family&apos;s other core businesses. With a clear vision and a passion for independent financial services, 
                            Joy stepped forward to lead the transformation of DA Market into a full-service investment platform — grounded in local trust, 
                            driven by professional standards, and designed to serve both domestic and global investors.
                        </p>
                    </div>

                </motion.div>
            </div>
        </SectionWrapper>
    );
}

function PartnershipSection() {
    const partnershipCriteria = [
        "Strategic capital for growth and expansion",
        "Infrastructure and technology support",
        "Product innovation and global best practices",
        "Distribution networks or complementary service capabilities"
    ];

    return (
        <SectionWrapper background="muted">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-medium lg:text-5xl mb-6">
                    Partner With Us
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    We are looking for a like-minded institutional partner who shares our belief in the value of 
                    independent, client-centered financial services in Southeast Asia.
                </p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-3xl font-bold">The Ideal Partner Will Bring:</h3>
                    <div className="space-y-4">
                        {partnershipCriteria.map((criterion, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3"
                            >
                                <div className="w-6 h-6 bg-brand-primary rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <p className="text-muted-foreground">{criterion}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl border-2 border-brand-primary shadow-lg p-8 text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to Shape the Future?</h3>
                    <p className="text-muted-foreground mb-6">
                        If you see the opportunity to help shape the future of full-service investing in the Philippines, 
                        we invite you to start a conversation with us.
                    </p>
                    <p className="text-muted-foreground mb-8">
                        As part of this vision, DA Market is actively seeking a strategic partner who can bring capital, 
                        infrastructure, and expertise to help scale this model across the Philippine market and beyond.
                    </p>
                    <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                        <a href="/open-account">Start a Conversation</a>
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}

export default function VisionPage() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen">
            <HeroHeader />
            
            <PageHero
                title="Our Vision & Strategy"
                subtitle="Building the future of full-service investing in the Philippines"
            />

            <VisionContentSection />
            <ServiceExpansionSection />
            <LeadershipSpotlightSection />
            <PartnershipSection />
            
            <Footer />
        </div>
    );
}