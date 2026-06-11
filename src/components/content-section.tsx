import Image from 'next/image'
import { motion } from 'framer-motion'

export function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl"
                    >
                        Why Investors Trust DA Market Securities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted-foreground mt-4 max-w-xl"
                    >
                        Confidence earned through decades of reliable service.
                    </motion.p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative mb-6 sm:mb-0"
                    >
                        <div className="aspect-square relative rounded-2xl overflow-hidden">
                            <Image 
                                src="/images/ecosystem.png" 
                                className="rounded-[15px] object-contain" 
                                alt="DA Market Securities trust" 
                                fill
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative space-y-4"
                    >
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Licensed and Regulated</h3>
                                <p className="text-sm text-muted-foreground">
                                    As a member of the Philippine Stock Exchange (PSE) since
1987, DA Market Securities operates under the regulatory
oversight of the Securities and Exchange Commission (SEC)
and other applicable market institutions. We are committed
to maintaining the highest standards of compliance,
transparency, and investor protection.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Client-Centered Approach</h3>
                                <p className="text-sm text-muted-foreground">
                                    We believe every investor has unique financial goals and
circumstances. By combining personalized service with
market expertise, we help clients make informed
investment decisions and build long-term financial
confidence.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Trusted Over the Years</h3>
                                <p className="text-sm text-muted-foreground">
                                    For more than three decades, DA Market Securities has
served generations of investors through varying market
cycles. Our long-standing commitment to integrity,
reliability, and personalized service has earned the trust of
individual, corporate, and institutional clients alike.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}