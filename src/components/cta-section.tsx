import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTASection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-medium lg:text-5xl"
                    >
                        Start Your Investment Journey
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-6 text-lg text-muted-foreground max-w-4xl mx-auto"
                    >
                        Since 1987, we&apos;ve guided generations of Filipino investors—young professionals, families, entrepreneurs—through the ups and downs of the stock market. At DA Market Securities, investing isn&apos;t just about numbers; it&apos;s about relationships. Our licensed brokers take the time to understand your goals, answer your questions, and walk you through each step with care. Whether you&apos;re just starting out or looking to grow your portfolio, we&apos;re here with steady guidance, clear communication, and a personal touch you can count on.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-12 flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-brand-primary hover:bg-brand-primary/90">
                            <Link href="/open-account">
                                <span>Get Started</span>
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}