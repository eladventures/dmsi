'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface PageHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

export function PageHero({ 
    title, 
    subtitle, 
    badge,
    titleClassName = "",
    subtitleClassName = "" 
}: PageHeroProps) {
    return (
        <section className="pt-24 pb-8 md:pt-32 md:pb-12">
            <div className="mx-auto max-w-7xl px-6 text-center">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
                    >
                        <CheckCircle className="w-4 h-4" />
                        <span>{badge}</span>
                    </motion.div>
                )}
                
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: badge ? 0.1 : 0 }}
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 ${titleClassName}`}
                >
                    {title}
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: badge ? 0.2 : 0.1 }}
                    className={`text-xl text-muted-foreground max-w-4xl mx-auto mb-10 ${subtitleClassName}`}
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}