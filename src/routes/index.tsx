import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig, motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Mail, Phone, Download, ArrowRight, ExternalLink,
  Code2, Database, Cloud, Wrench, Layers, Sparkles, Award, GraduationCap,
  MapPin, Trophy, Send, Sun, Moon,
} from "lucide-react";
import {
  SiOpenjdk, SiPython, SiC, SiMysql, SiPostgresql, SiSpringboot, SiDjango,
  SiGit, SiGithub, SiHtml5, SiCss,
} from "react-icons/si";
import { FaAws, FaServer, FaCubes, FaChartBar, FaCode, FaFileCode } from "react-icons/fa";
import type { IconType } from "react-icons";


import profileImg from "@/assets/sowjanya.png";
import resumePdf from "@/assets/SowjanyaKolisetty.pdf";

const Github = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/></svg>
);
const Linkedin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>
);


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sowjanya Kolisetty — Software Developer" },
      { name: "description", content: "Portfolio of Sowjanya Kolisetty, B.Tech CSE (Data Science) graduate, AWS & Red Hat certified, full-stack developer specializing in Java, Spring Boot, Python & Django." },
      { property: "og:title", content: "Sowjanya Kolisetty — Software Developer" },
      { property: "og:description", content: "Full-stack developer · AWS Cloud Practitioner · Red Hat Certified." },
    ],
  }),
  component: Portfolio,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={`relative mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
      {children}
    </motion.div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-[500px] w-[500px] rounded-full opacity-60 blur-3xl md:block"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background: "radial-gradient(circle, oklch(0.7 0.18 280 / 0.25), transparent 70%)",
        transition: "left 0.3s ease-out, top 0.3s ease-out",
      }}
    />
  );
}

function Nav() {
  const links = [
    ["About", "/#about"], ["Education", "/#education"], ["Skills", "/#skills"],
    ["Projects", "/#projects"], ["Experience", "/#experience"], ["Contact", "/#contact"],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full glass px-5 py-3">
      <a href="#hero" className="flex items-center gap-2 font-display text-sm font-bold tracking-tight">
        <span className="grid h-7 w-7 place-items-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </span>
        Sowjanya <span className="text-muted-foreground">Kolisetty</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a href={resumePdf} download className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
          Resume <Download className="h-3.5 w-3.5 transition group-hover:translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="absolute inset-0 bg-mesh" />
      <motion.div style={{ y }} className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Available for SDE opportunities
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Sowjanya<br />
              <span className="text-gradient">Kolisetty</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Full-stack developer crafting production-ready systems with Java, Spring Boot, Python & Django.
              AWS Cloud Practitioner · Red Hat Certified.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
                View my work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted">
                Get in touch
              </a>
              <div className="ml-2 flex items-center gap-2">
                {[
                  { Icon: Github, href: "https://github.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                  { Icon: Mail, href: "mailto:kolisettysowjanya2004@gmail.com" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative overflow-hidden rounded-[2rem] glass p-2">
              <div className="overflow-hidden rounded-[1.6rem]" style={{ background: "var(--gradient-soft)" }}>
                <img src={profileImg} alt="Sowjanya Kolisetty" className="aspect-square w-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionLabel>About</SectionLabel>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold md:text-5xl">Building software that <span className="text-gradient">ships</span>.</motion.h2>
        </div>
        <div className="space-y-6">
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-muted-foreground">
            I'm a B.Tech Computer Science graduate specializing in Big Data Analytics & Data Science at KL Deemed to be University.
            I design and ship full-stack web applications — from Spring Boot REST APIs to Django platforms — and deploy them
            to AWS with an eye on performance and clean architecture.
          </motion.p>
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-muted-foreground">
            I've led teams through hackathons and capstone projects, optimized backend systems, and translated business
            logic into reliable, role-secured platforms. Currently seeking SDE roles where I can build at scale.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}


const skillIcons: Record<string, IconType> = {
  "Java": SiOpenjdk, "Python": SiPython, "C": SiC, "SQL": FaFileCode,
  "Spring Boot": SiSpringboot, "Django": SiDjango, "REST APIs": FaServer, "Microservices": FaCubes,
  "MySQL": SiMysql, "PostgreSQL": SiPostgresql,
  "AWS": FaAws, "AWS EC2": FaAws, "Git": SiGit, "GitHub": SiGithub,
  "Power BI": FaChartBar, "Tableau": FaChartBar, "VS Code": FaCode,
  "HTML": SiHtml5, "CSS": SiCss, "JSP": FaFileCode,
};

const skillGroups = [
  { Icon: Code2, title: "Languages", items: ["Java", "Python", "C", "SQL"] },
  { Icon: Layers, title: "Backend", items: ["Spring Boot", "Django", "REST APIs", "Microservices"] },
  { Icon: Database, title: "Databases", items: ["MySQL", "PostgreSQL"] },
  { Icon: Cloud, title: "Cloud & DevOps", items: ["AWS", "Git", "GitHub", "AWS EC2"] },
  { Icon: Wrench, title: "Tools & BI", items: ["Power BI", "Tableau", "VS Code"] },
  { Icon: Sparkles, title: "Frontend", items: ["HTML", "CSS", "JSP"] },
] as const;

function Skills() {
  return (
    <Section id="skills">
      <SectionLabel>Skills</SectionLabel>
      <motion.h2 variants={fadeUp} className="text-4xl font-bold md:text-5xl">A pragmatic toolkit.</motion.h2>
      <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Strong on the JVM and Python ecosystems, comfortable across the stack — from query optimization to UI.
      </motion.p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ Icon, title, items }) => (
          <motion.div key={title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl glass p-6 transition hover:-translate-y-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((name) => {
                const ChipIcon = skillIcons[name] ?? FaCode;
                return (
                  <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/85 transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
                    <ChipIcon className="h-3.5 w-3.5 text-primary" />
                    {name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}



const projects = [
  {
    title: "ONE CAUSE",
    subtitle: "Online Donation Management System",
    period: "Jul 2025 – Nov 2025",
    desc: "Led a 4-member team to architect and deploy a full-stack donation platform on AWS EC2. Built Spring Boot REST APIs, optimized MySQL queries (–35% processing time), and integrated Power BI dashboards with role-based auth.",
    tech: ["Java", "Spring Boot", "JSP", "MySQL", "AWS EC2", "Power BI"],
    codeLink: "https://github.com/SowjanyaKolisetty/OnlineDonationManagementSystem-ONECAUSE",
    accent: "linear-gradient(135deg, oklch(0.62 0.19 250), oklch(0.58 0.22 295))",
  },
  {
    title: "Student Course Management",
    subtitle: "Role-based academic platform",
    period: "Dec 2023 – Apr 2024",
    desc: "Secure Django web application for managing student records. Automated course registration, attendance tracking and grading workflows. Designed a normalized PostgreSQL schema with optimized queries.",
    tech: ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
    codeLink: "https://github.com/SowjanyaKolisetty/SDP",
    accent: "linear-gradient(135deg, oklch(0.58 0.22 295), oklch(0.72 0.13 190))",
  },
];

function Projects() {
  const reduce = useReducedMotion();
  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold md:text-5xl">Projects.</motion.h2>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="group relative overflow-hidden rounded-3xl glass p-7 focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-background"
          >
            <div aria-hidden className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60" style={{ background: p.accent }} />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => {
                  const TechIcon = skillIcons[t] ?? FaCode;
                  return (
                    <li key={t}>
                      <span
                        title={t}
                        aria-label={t}
                        tabIndex={0}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80 transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                      >
                        <TechIcon className="h-3.5 w-3.5 text-primary" aria-hidden />
                        {t}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 flex gap-3">
                <a href={p.codeLink ?? "https://github.com"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const timeline = [
  { Icon: Award, title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2024", kind: "Certification" },
  { Icon: Award, title: "Red Hat Certified Enterprise Application Developer", org: "Red Hat", year: "2024", kind: "Certification" },
  { Icon: Trophy, title: "Smart India Hackathon 2024", org: "36-hour national-level hackathon", year: "2024", kind: "Achievement" },
];

const education = [
  { school: "KL University", degree: "B.Tech CSE Honors", period: "2022 – 2026", cgpa: "9.7" },
  { school: "Oxford Junior College", degree: "Intermediate · MPC", period: "2020 – 2022", cgpa: "10" },
  { school: "Oxford Concept School", degree: "Primary & Secondary", period: "2008 – 2020", cgpa: "10" },
];

function Education() {
  const reduce = useReducedMotion();
  return (
    <Section id="education">
      <SectionLabel>Education</SectionLabel>
      <motion.h2 variants={fadeUp} className="text-4xl font-bold md:text-5xl">Academic <span className="text-gradient">journey</span>.</motion.h2>
      <div className="relative mt-12 pl-6 md:pl-8">
        <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), var(--accent-teal))" }} />
        <div className="space-y-6">
          {education.map((e) => (
            <motion.div
              key={e.school}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative"
            >
              <div aria-hidden className="absolute -left-[1.65rem] top-5 grid h-7 w-7 place-items-center rounded-full glass md:-left-[2.15rem]">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
              </div>
              <div tabIndex={0} className="rounded-2xl glass p-5 outline-none transition focus-visible:ring-2 focus-visible:ring-primary/60">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{e.school}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.degree} · {e.period}</p>
                  </div>
                  <div className="rounded-xl px-3 py-1.5 text-xs font-semibold text-white" style={{ background: "var(--gradient-primary)" }}>
                    CGPA {e.cgpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


function Experience() {
  return (
    <Section id="experience">
      <SectionLabel>Journey</SectionLabel>
      <motion.h2 variants={fadeUp} className="text-4xl font-bold md:text-5xl">Experience & milestones.</motion.h2>
      <div className="relative mt-12 pl-6 md:pl-8">
        <div aria-hidden className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), var(--accent-teal))" }} />
        <div className="space-y-6">
          {timeline.map(({ Icon, title, org, year, kind }) => (
            <motion.div key={title} variants={fadeUp} className="relative">
              <div aria-hidden className="absolute -left-[1.65rem] top-5 grid h-7 w-7 place-items-center rounded-full glass md:-left-[2.15rem]">
                <Icon className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="rounded-2xl glass p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-2 py-0.5 font-medium">{kind}</span>
                  <span>·</span><span>{year}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-[2.5rem] glass p-8 md:p-14">
        <div aria-hidden className="absolute inset-0 -z-10 opacity-60 bg-mesh" />
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold md:text-5xl">Let's build <span className="text-gradient">something</span>.</motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-muted-foreground">
              Open to SDE roles, freelance work, and collaboration. The fastest way to reach me is email.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {[
                { Icon: Mail, label: "kolisettysowjanya2004@gmail.com", href: "mailto:kolisettysowjanya2004@gmail.com" },
                { Icon: Phone, label: "+91 90633 65962", href: "tel:+919063365962" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sowjanya-kolisetty-054439255/" },
                { Icon: Github, label: "GitHub", href: "https://github.com/SowjanyaKolisetty" },
                { Icon: MapPin, label: "Elchuru, Andhra Pradesh", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-card">
                  <div className="grid h-9 w-9 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-primary)" }}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{label}</span>
                  <ArrowRight className="ml-auto h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              ))}
            </motion.div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/kolisettysowjanya2004@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio inquiry from ${name || "visitor"}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      variants={fadeUp}
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-border bg-card p-6"
    >
      <div>
        <label htmlFor="cf-name" className="text-xs font-medium text-muted-foreground">Name</label>
        <input id="cf-name" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/40" placeholder="Jane Doe" />
      </div>
      <div>
        <label htmlFor="cf-email" className="text-xs font-medium text-muted-foreground">Email</label>
        <input id="cf-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/40" placeholder="jane@company.com" />
      </div>
      <div>
        <label htmlFor="cf-msg" className="text-xs font-medium text-muted-foreground">Message</label>
        <textarea id="cf-msg" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/40" placeholder="Tell me about the role or project…" />
      </div>
      <button type="submit" disabled={status === "sending"} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-70" style={{ background: "var(--gradient-primary)" }}>
        {status === "sending" ? "Sending…" : "Send message"} <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
      {status === "success" && (
        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Thanks! Your message has been sent to Sowjanya's inbox.</p>
      )}
      {status === "error" && (
        <p className="text-xs font-medium text-red-600 dark:text-red-400">Couldn't send right now. Please email kolisettysowjanya2004@gmail.com directly.</p>
      )}
    </motion.form>
  );
}


function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const seen = typeof window !== "undefined" && localStorage.getItem("visited_v1");
    const endpoint = seen
      ? "https://abacus.jasoncameron.dev/get/sowjanya-portfolio/visits"
      : "https://abacus.jasoncameron.dev/hit/sowjanya-portfolio/visits";
    fetch(endpoint)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.value === "number") setCount(d.value);
        if (!seen) localStorage.setItem("visited_v1", "1");
      })
      .catch(() => setCount(null));
  }, []);
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      <span className="text-muted-foreground">Visitors</span>
      <span className="font-display font-semibold text-gradient">
        {count === null ? "—" : count.toLocaleString()}
      </span>
    </span>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span>© {new Date().getFullYear()} Sowjanya Kolisetty · Crafted with care.</span>
        <VisitorCounter />
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <Cursor />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

