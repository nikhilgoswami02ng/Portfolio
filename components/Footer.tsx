import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-space-border px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 text-xs text-text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
