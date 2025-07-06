import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Trading Platform',
    description: 'Access our state-of-the-art trading platform with real-time market data and advanced analytics.',
    image: '/images/service-trading.png'
  },
  {
    title: 'Investment Advisory',
    description: 'Personalized investment strategies crafted by our expert advisors to meet your financial goals.',
    image: '/images/service-advisory.png'
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management solutions to preserve and grow your assets for the future.',
    image: '/images/service-wealth.png'
  }
]

export function ServicesSection() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-zinc-900/50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-medium lg:text-5xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto"
          >
            Tailored stock market services for individual and institutional investors—built on trust, insight, and personalized support.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-16 max-w-5xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                <div className="p-6 pb-0">
                  <div className="aspect-square relative overflow-hidden bg-muted rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <h3 className="font-semibold text-lg text-center mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}