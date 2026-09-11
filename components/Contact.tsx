"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  copyValue,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  copyValue?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op, link is still clickable
    }
  };

  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-text-faint">{label}</p>
        <p className="mt-0.5 truncate text-sm text-text-primary">{value}</p>
      </div>
    </>
  );

  const baseClasses =
    "card-glow group flex w-full items-center gap-4 rounded-xl p-4 text-left";

  if (copyValue) {
    return (
      <button type="button" onClick={handleCopy} className={baseClasses}>
        {content}
        <span className="ml-auto shrink-0 text-text-faint">
          {copied ? (
            <Check className="h-4 w-4 text-accent-blue" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
          )}
        </span>
        <span className="sr-only">{copied ? "Copied" : `Copy ${label.toLowerCase()}`}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={baseClasses}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content border-t border-space-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium text-accent-blue">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Open to trade finance and forex opportunities.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
            Reach out directly by email or phone, or connect on LinkedIn — happy
            to discuss roles, partnerships, or trade operations questions.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ContactCard
            icon={Mail}
            label="Email"
            value={profile.email}
            copyValue={profile.email}
          />
          <ContactCard
            icon={Phone}
            label="Phone"
            value={profile.phone}
            copyValue={profile.phone}
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value={profile.linkedinLabel}
            href={profile.linkedin}
          />
          <ContactCard icon={MapPin} label="Location" value={profile.location} />
        </div>
      </div>
    </section>
  );
}
