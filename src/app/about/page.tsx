"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { HeroHeader } from "@/components/hero-header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";

type BoardMember = {
  name: string;
  position: string;
  image: string;
};

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

const boardMembers: BoardMember[] = [
  {
    name: "Abigail M. Del Rosario",
    position: "Chairman, Independent Director, Member Audit and Compliance Committee",
    image: "/team/gail-delrosario.jpg?v=2",
  },
  {
    name: "Jocelyn David Greenlaw",
    position: "Director, President, Trader",
    image: "/team/joy-greenlaw.jpg?v=2",
  },
  {
    name: "Nestor S. Aguila",
    position: "Director, Nominee, Trader",
    image: "/team/nes-aguila.jpg?v=2",
  },
  {
    name: "Teresa David Carlos",
    position: "Director, Treasurer, Member Audit and Compliance Committee",
    image: "/team/tere-carlos.jpg?v=2",
  },
  {
    name: "Tomas S. Gomez, IV",
    position: "Independent Director, Chairman Audit and Compliance Committee",
    image: "/team/tom-gomez.jpg?v=2",
  },
  {
    name: "Fe M. Caling",
    position: "Associated Person, Data Protection Officer",
    image: "/team/f-caling.jpg?v=2",
  },
  {
    name: "Francesca Ann G. Bascao",
    position: "Corporate Secretary",
    image: "/team/chesca-bascao.jpg?v=2",
  },
];

const salesTradingTeam: TeamMember[] = [
  {
    name: "Alyssa Marie E. Salazar",
    role: "Trader",
    avatar: "/team/alyssa-salazar.jpg?v=2",
  },
  {
    name: "Shirley O. Tan",
    role: "Trader",
    avatar: "/team/shirley-tan.jpg?v=2",
  },
  {
    name: "Abigail M. Peñero",
    role: "Telephone Clerk, Flextrade Encoder",
    avatar: "/team/abigail-penero.jpg?v=2",
  },
];

const backroomTeam: TeamMember[] = [
  {
    name: "Amalia S. Romualdo",
    role: "Settlement Supervisor",
    avatar: "/team/amalia-romualdo.jpg?v=2",
  },
  {
    name: "Joana Marie S. Gomez",
    role: "Accounting Supervisor, Officer-in-Charge",
    avatar: "/team/joana-gomez.jpg?v=2",
  },
  {
    name: "Juliet A. Maniling",
    role: "Accounting Assistant II",
    avatar: "/team/juliet-maniling.jpg?v=2",
  },
  {
    name: "Rosela P. Timario",
    role: "Accounting Assistant",
    avatar: "/team/rosela-timario.jpg?v=2",
  },
  {
    name: "Sherwin C. Serrano",
    role: "Delivery Representative",
    avatar: "/team/sherwin-serrano.jpg?v=2",
  },
];

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
          <div className="relative overflow-hidden rounded-2xl border-4 border-brand-primary shadow-2xl">
            <img
              className="h-auto w-full"
              src="/images/bod.jpg?v=2"
              alt="DA Market Securities board"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
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
              Since 1987, DA Market Securities, Inc. has provided trusted brokerage services as a privately owned member of the Philippine Stock Exchange. Guided by integrity, regulatory excellence, and personalized client service, the Company combines market expertise and technology-driven solutions to help investors achieve their financial goals.
            </p>

            <p className="text-muted-foreground">
              DA Market remains focused on innovation, strategic partnerships, and creating long-term value for clients while expanding access to investment opportunities and enhancing the client experience.
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
        subtitle="Proudly Filipino, professionally driven — serving investors with personalized attention."
      />

      <AboutContentSection />

      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-medium lg:text-5xl">
            Board of Directors and Officers
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-muted-foreground">
            Meet the experienced leaders guiding DA Market Securities with vision and integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {boardMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group rounded-2xl border-2 border-brand-primary bg-card p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-medium lg:text-5xl">Our Team</h2>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-2 text-2xl font-bold">Research Team</h3>
            <p className="mb-6 text-sm text-muted-foreground">Market analysis and strategy</p>
          </motion.div>

          <div className="flex justify-center border-t py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="group mx-auto size-48 rounded-full border-4 border-brand-primary bg-background p-0.5 shadow shadow-zinc-950/5">
                <img
                  className="aspect-square rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/team/nisha-alicer.jpg?v=2"
                  alt="Nisha Ma. Nimfa S. Alicer"
                  height={460}
                  width={460}
                  loading="lazy"
                />
              </div>
              <span className="mt-2 block text-lg font-semibold">Nisha Ma. Nimfa S. Alicer</span>
              <span className="block text-sm text-muted-foreground">
                Chief Equity Strategist, Certified Equity Securities Salesman
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="border-t pt-6">
            <h3 className="mb-2 text-2xl font-bold">Sales and Trading Team</h3>
            <p className="mb-6 text-sm text-muted-foreground">Execution and client services</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {salesTradingTeam.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="group mx-auto size-48 rounded-full border-4 border-brand-primary bg-background p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={member.avatar}
                    alt={member.name}
                    height={460}
                    width={460}
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-lg font-semibold">{member.name}</span>
                <span className="block text-sm text-muted-foreground">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="border-t pt-6">
            <h3 className="mb-2 text-2xl font-bold">Backroom Team</h3>
            <p className="mb-6 text-sm text-muted-foreground">Operations and accounting</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {backroomTeam.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group rounded-2xl border-2 border-brand-primary bg-card p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
