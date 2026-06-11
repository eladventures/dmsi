"use client";

import React from "react";
import { HeroHeader } from "@/components/hero-header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Shield,
  DollarSign,
  Users,
  PieChart,
  Home,
  Globe,
  CreditCard,
  GraduationCap,
  FileText,
} from "lucide-react";

function VisionContentSection() {
  const focusAreas = [
    "Digital Trading and Investment Technology",
    "Enhanced Client Experience and Service",
    "Strategic Financial Institution Partnerships",
    "Investor Education and Financial Literacy",
    "Institutional and Corporate Client Solutions",
    "Long-Term Wealth Creation Opportunities",
  ];

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
            Transforming DA Market into a Modern Investment Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            DA Market Securities continues to strengthen its capabilities
            through technology, innovation, talent development, and strategic
            collaborations designed to enhance the client experience
            <br />
            and support long-term growth.
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
              To build one of the Philippines&apos; leading independent
              brokerage and wealth management platforms by combining
              personalized service, modern technology, and access to investment
              solutions that help clients achieve their financial goals.
            </p>

            <h3 className="text-3xl font-medium">Our Areas of Focus</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
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
              Leverage our decades of capital markets experience, strategic
              technology partnerships, and relationships with financial
              institutions to create a trusted investment platform for
              individual, corporate, and institutional investors.
            </p>
            <p className="text-muted-foreground">
              Through innovation and collaboration, we seek to broaden investor
              access, enhance client experience, and support the continued
              development of the Philippine capital markets.
            </p>

            <h3 className="text-3xl font-medium">Building for the Future</h3>
            <p className="text-muted-foreground">
              Under the leadership of President Jocelyn &ldquo;Joy&rdquo;
              David-Greenlaw, DA Market Securities is focused on strengthening
              its core brokerage business while investing in technology,
              strategic partnerships, and operational excellence to better serve
              the evolving needs of investors.
            </p>

          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ServiceExpansionSection() {
  const currentServices = [
    { name: "Fixed Income Solutions (Subject to Regulatory Approval)", icon: TrendingUp },
    { name: "Enhanced Digital Trading Platform (Coming Soon)", icon: Shield },
    { name: "Strategic Financial Institution Partnerships", icon: DollarSign },
  ];

  const futureServices = [
    { name: "Investment Advisory & Financial Planning", icon: Users },
    { name: "Portfolio Advisory & Wealth Planning", icon: PieChart },
    { name: "Lending, Protection, and Retirement Solutions", icon: Home },
    { name: "Insurance Solutions", icon: CreditCard },
    { name: "Educational Plans", icon: GraduationCap },
    { name: "Estate Planning Services", icon: FileText },
    { name: "Digital Access for Global & Offshore Clients", icon: Globe },
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
          DA Market Securities is expanding beyond traditional stock brokerage
          by enhancing its digital capabilities, strategic partnerships, and
          investment solutions to better serve the evolving needs of investors.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          We are currently rolling out key services such as:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {currentServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-32 flex flex-col justify-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-brand-primary/10 rounded-full mx-auto mb-3 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold leading-tight">
                  {service.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          As part of our long-term strategy, we are also laying the groundwork
          to offer:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {futureServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border-2 border-brand-primary shadow-sm p-6 text-center group hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-32 flex flex-col justify-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-brand-primary/10 rounded-full mx-auto mb-3 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold leading-tight">
                  {service.name}
                </h3>
              </motion.div>
            );
          })}

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
              src="/team/joy-greenlaw.jpg?v=2"
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
            <h3 className="text-3xl font-bold mb-2">
              Jocelyn &ldquo;Joy&rdquo; David-Greenlaw
            </h3>
            <p className="text-xl text-brand-primary font-semibold mb-4">
              President, DA Market Securities, Inc.
            </p>
            <p className="text-lg text-muted-foreground italic">
              Entrepreneurial Roots &bull; 20+ Years U.S. Wealth Management
              Experience &bull; Passionate About Financial Empowerment
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Raised in a family of entrepreneurs, Jocelyn &ldquo;Joy&rdquo;
              David-Greenlaw developed a strong foundation in business, finance,
              and client service through decades of involvement in banking,
              foreign exchange, remittance, real estate, education, and other
              entrepreneurial ventures.
            </p>

            <p className="text-muted-foreground">
              She later built a successful career in the U.S. financial
              services industry, spending more than 20 years serving clients and
              supporting financial advisors through leading institutions
              including Bank of America, Morgan Stanley, Wachovia Securities,
              and Wells Fargo Advisors.
            </p>

            <p className="text-muted-foreground">
              After returning to the Philippines, Joy acquired DA Market
              Securities, a Philippine Stock Exchange Trading Participant
              established in 1987. As President, she is leading the
              Company&apos;s transformation through technology, innovation, talent
              development, and strategic partnerships while maintaining the
              highest standards of integrity, regulatory excellence, investor
              protection, and personalized client service.
            </p>

            <p className="text-muted-foreground">
              Her vision is to position DA Market as a leading financial
              services platform that connects investors with innovative
              investment solutions, strategic opportunities, and trusted
              guidance&mdash;helping clients build, preserve, and grow wealth
              across generations.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function PartnershipSection() {
  const partnershipCriteria = [
    "Strategic growth capital",
    "Technology and digital infrastructure",
    "Product innovation and global best practices",
    "Wealth management and advisory expertise",
    "Institutional capabilities and operational support",
    "Distribution networks and expanded market access",
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
          We are looking for a like-minded institutional partner who shares our
          belief in the value of independent, client-centered financial services
          in Southeast Asia.
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
                key={criterion}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 bg-brand-primary rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
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
          <h3 className="text-2xl font-bold mb-4">
            Ready to Shape the Future?
          </h3>
          <p className="text-muted-foreground mb-6">
            If you see the opportunity to help shape the future of full-service
            investing in the Philippines, we invite you to start a conversation
            with us.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            <a href="/open-account">Start a Conversation</a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default function VisionPage() {
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
