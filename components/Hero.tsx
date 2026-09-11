import { Mail, MapPin, Phone, Linkedin, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import OrbitDiagram from "./OrbitDiagram";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-content flex-col-reverse items-center gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:flex-row lg:items-center lg:gap-10 lg:pb-28"
    >
      <div className="w-full lg:w-[56%]">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-sm font-medium text-accent-blue shadow-[0_0_20px_rgba(255,45,75,0.25)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-gold" />
          {profile.role}
        </span>
        <h1 className="text-gradient-animated mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-7 flex flex-col gap-2.5 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent-gold" aria-hidden="true" />
            {profile.location}
          </span>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-text-primary"
          >
            <Phone className="h-4 w-4 text-accent-gold" aria-hidden="true" />
            {profile.phone}
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-space-borderStrong px-6 py-3 text-sm font-medium text-text-primary shadow-[0_0_20px_rgba(255,45,75,0.15)] transition-all hover:-translate-y-0.5 hover:border-accent-blue/60"
          >
            Download resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-space-border text-text-muted transition-colors hover:border-accent-blue/60 hover:text-text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-space-border text-text-muted transition-colors hover:border-accent-blue/60 hover:text-text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-[44%]">
        <OrbitDiagram />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center justify-center text-text-faint transition-colors hover:text-text-muted lg:flex"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
