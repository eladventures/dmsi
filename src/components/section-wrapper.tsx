'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    background?: 'default' | 'muted';
    spacing?: 'default' | 'large' | 'small';
    maxWidth?: 'default' | 'large' | 'medium';
    animated?: boolean;
}

export function SectionWrapper({ 
    children, 
    className = "",
    background = 'default',
    spacing = 'default',
    maxWidth = 'default',
    animated = true
}: SectionWrapperProps) {
    const backgroundClass = background === 'muted' ? 'bg-muted/30' : '';
    
    const spacingClass = {
        small: 'py-8 md:py-12',
        default: 'py-16 md:py-24',
        large: 'py-24 md:py-32'
    }[spacing];
    
    const maxWidthClass = {
        medium: 'max-w-5xl',
        default: 'max-w-7xl',
        large: 'max-w-8xl'
    }[maxWidth];

    const content = (
        <section className={`${spacingClass} ${backgroundClass} ${className}`}>
            <div className={`mx-auto ${maxWidthClass} px-6`}>
                {children}
            </div>
        </section>
    );

    if (animated) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {content}
            </motion.div>
        );
    }

    return content;
}