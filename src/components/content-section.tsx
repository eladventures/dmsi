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
                                    We are a proud member of the Philippine Stock Exchange (PSE), operating with full compliance under SEC regulations. Our commitment to regulatory standards ensures your investments are protected.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Client-Centered Approach</h3>
                                <p className="text-sm text-muted-foreground">
                                    Every investor is different. We take the time to understand your goals and tailor our service to support your long-term success. Your financial objectives drive our strategies.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Trusted Over the Years</h3>
                                <p className="text-sm text-muted-foreground">
                                    With a consistent track record of service and reliability since 1986, we help clients invest with clarity and confidence. Our experience is your advantage in navigating market complexities.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}