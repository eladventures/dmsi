"use client";

import React from 'react';
import { HeroHeader } from "@/components/hero-header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";

function AboutContentSection() {
    return (
        <SectionWrapper maxWidth="medium" spacing="small">
            <div className="space-y-8 md:space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative mx-auto mb-16 max-w-5xl"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-primary">
                        <img
                            className="w-full h-auto"
                            src="/images/board.png"
                            alt="DA Market Securities board"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-medium"
                    >
                        DA Market Securities brings together expertise, innovation, and personalized service.
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-muted-foreground">
                            DA Market Securities, Inc. (DMSI) has been in the financial business since 1987. It is a member of the Philippine Stock Exchange and is one of the leading stock brokerage firms in the country.
                        </p>
                        <p className="text-muted-foreground">
                            As one of the first online platform providers and the market leader on margin facilities at present, DMSI has consistently ranked among the top trading participants in value turnover. We create value and deliver exceptional products and services through all market cycles — providing growth for our people and meaningful returns to our shareholders.
                        </p>
                        <p className="text-muted-foreground">
                            As a traditional and online equities brokerage firm with an affiliate in banking and financing in Central Luzon, we are committed to promoting financial literacy among the growing number of Filipino investors who seek long-term wealth.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <HeroHeader />
            
            <PageHero
                title="Who We Are"
                subtitle="Proudly Filipino, professionally driven—serving investors with personalized attention."
            />

            <AboutContentSection />
            
            <SectionWrapper>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-medium lg:text-5xl mb-6">
                        Board of Directors and Officers
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                        Meet the experienced leaders guiding DA Market Securities with vision and integrity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: "Mario M. Aguas", position: "Chairman, Independent Director, Member Audit and Compliance Committee", image: "/team/mario-aguas.jpg" },
                        { name: "Jocelyn David Greenlaw", position: "Director, President, Trader", image: "/team/jocelyn-greenlaw.jpg" },
                        { name: "Teresa David Carlos", position: "Director, Treasurer, Member Audit and Compliance Committee", image: "/team/teresa-carlos.jpg" },
                        { name: "Nestor S. Aguila", position: "Director, Nominee, Trader", image: "/team/nestor-aguila.jpg" },
                        { name: "Tomas S. Gomez, IV", position: "Independent Director, Chairman Audit and Compliance Committee", image: "/team/tomas-gomez.jpg" },
                        { name: "Fe M. Caling", position: "Associated Person, Data Protection Officer", image: "/team/fe-caling.jpg" },
                        { name: "Morrin Abi P. Mabiog", position: "Corporate Secretary, Settlement Assistant", image: "/team/morrin-mabiog.jpg" }
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                            <p className="text-muted-foreground text-sm">{member.position}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper background="muted">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-medium lg:text-5xl mb-6">Our Team</h2>
                </div>

                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="mb-2 text-2xl font-bold">Research Team</h3>
                        <p className="text-muted-foreground text-sm mb-6">Market analysis and strategy</p>
                    </motion.div>
                    <div className="flex justify-center border-t py-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-background size-48 rounded-full border-4 border-brand-primary p-0.5 shadow shadow-zinc-950/5 mx-auto group">
                                <img className="aspect-square rounded-full object-cover transition-transform duration-300 group-hover:scale-105" src="/team/nisha-alicer.jpg" alt="Nisha Ma. Nimfa S. Alicer" height="460" width="460" loading="lazy" />
                            </div>
                            <span className="mt-2 block text-lg font-semibold">Nisha Ma. Nimfa S. Alicer</span>
                            <span className="text-muted-foreground block text-sm">Chief Equity Strategist, Certified Equity Securities Salesman</span>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="border-t pt-6">
                        <h3 className="mb-2 text-2xl font-bold">Sales and Trading Team</h3>
                        <p className="text-muted-foreground text-sm mb-6">Execution and client services</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {[
                            {
                                name: 'Vani Lion T. Chua',
                                role: 'Trader',
                                avatar: '/team/vani-chua.jpg',
                            },
                            {
                                name: 'Jose Alejandro P. Claparols',
                                role: 'Trader',
                                avatar: '/team/jose-claparols.jpg',
                            },
                            {
                                name: 'Alyssa Marie E. Salazar',
                                role: 'Trader',
                                avatar: '/team/alyssa-salazar.jpg',
                            },
                            {
                                name: 'Shirley O. Tan',
                                role: 'Trader',
                                avatar: '/team/shirley-tan.jpg',
                            },
                            {
                                name: 'Abigail M. Peñero',
                                role: 'Telephone Clerk, Flextrade Encoder',
                                avatar: '/team/abigail-penero.jpg',
                            },
                        ].map((member, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="bg-background size-48 rounded-full border-4 border-brand-primary p-0.5 shadow shadow-zinc-950/5 mx-auto group">
                                    <img className="aspect-square rounded-full object-cover transition-transform duration-300 group-hover:scale-105" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-lg font-semibold">{member.name}</span>
                                <span className="text-muted-foreground block text-sm">{member.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="border-t pt-6">
                        <h3 className="mb-2 text-2xl font-bold">Backroom Team</h3>
                        <p className="text-muted-foreground text-sm mb-6">Operations and accounting</p>
                    </div>
                    <div className="grid grid-cols-5 gap-8">
                        {[
                            {
                                name: 'Amalia S. Romualdo',
                                role: 'Settlement Supervisor',
                                avatar: '/team/amalia-romualdo.jpg',
                            },
                            {
                                name: 'Joana Marie S. Gomez',
                                role: 'Accounting Supervisor, Officer-in-charge',
                                avatar: '/team/joana-gomez.jpg',
                            },
                            {
                                name: 'Juliet A. Maniling',
                                role: 'Accounting Assistant II',
                                avatar: '/team/juliet-maniling.jpg',
                            },
                            {
                                name: 'Rosela P. Timario',
                                role: 'Accounting Assistant',
                                avatar: '/team/rosela-timario.jpg',
                            },
                            {
                                name: 'Sherwin C. Serrano',
                                role: 'Delivery Representative',
                                avatar: '/team/sherwin-serrano.jpg',
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card rounded-2xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-xl">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                                <p className="text-muted-foreground text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <Footer />
        </div>
    );
}