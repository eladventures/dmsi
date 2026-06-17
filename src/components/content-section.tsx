import Image from 'next/image'
import { motion } from 'framer-motion'

export function ContentSection() {
    const trustPoints = [
        {
            title: 'Licensed and Regulated',
            description:
                'DA Market Securities has been a member of the Philippine Stock Exchange (PSE) since 1987 and operates under the oversight of the Securities and Exchange Commission (SEC) and other applicable market institutions.',
        },
        {
            title: 'Client-Centered Service',
            description:
                'We combine personalized service with market expertise to help clients make informed investment decisions aligned with their financial goals.',
        },
        {
            title: 'Built on Long-Term Trust',
            description:
                'For more than three decades, DA Market Securities has served individual, corporate, and institutional clients through changing market cycles with integrity and reliability.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-10 px-6 md:space-y-14">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
                    >
                        Why Investors Trust DA Market Securities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                        Confidence built through regulatory discipline, experienced guidance, and consistent client service.
                    </motion.p>
                </div>
                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-card shadow-sm">
                            <Image 
                                src="/images/trusted.png" 
                                className="object-cover" 
                                alt="DA Market Securities client service" 
                                fill
                                sizes="(min-width: 1024px) 42vw, 100vw"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="space-y-4">
                            {trustPoints.map((point, index) => (
                                <div
                                    key={point.title}
                                    className="rounded-lg border bg-card p-5 shadow-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary">
                                            {index + 1}
                                        </span>
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-tight">
                                                {point.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
