import { useState } from 'react';
import {
    AlertCircle,
    ArrowUpRight,
    Check,
    CheckCircle2,
    Copy,
    Loader2,
    Mail,
    MapPin,
    Send,
} from 'lucide-react';
import ChapterBanner from '../components/ChapterBanner';

const CONTACT_CONFIG = {
    email: 'khalisfikri04@gmail.com',
    githubLabel: 'github.com/khalis04',
    githubUrl: 'https://github.com/khalis04',
    linkedinLabel: 'https://www.linkedin.com/in/khalis-fikri-312582444/',
    linkedinUrl: 'https://www.linkedin.com/in/khalis-fikri-312582444/',
};

function GmailLogo({ className = 'w-5 h-5' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <path
                fill="#4285F4"
                d="M2 6.5v11A2.5 2.5 0 0 0 4.5 20H6V10.75L2 7.75V6.5Z"
            />
            <path
                fill="#34A853"
                d="M18 20h1.5a2.5 2.5 0 0 0 2.5-2.5V6.5v1.25l-4 3V20Z"
            />
            <path
                fill="#FBBC04"
                d="M18 6.5v4.25l4-3V6.5A2.5 2.5 0 0 0 18.02 4.5L18 4.51V6.5Z"
            />
            <path
                fill="#EA4335"
                d="M6 10.75V4.51L12 9l6-4.49v6.24l-6 4.5-6-4.5Z"
            />
            <path
                fill="#C5221F"
                d="M2 6.5v1.25l4 3V4.51l-.02-.01A2.5 2.5 0 0 0 2 6.5Z"
            />
        </svg>
    );
}

function GitHubLogo({ className = 'w-5 h-5' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

function LinkedInLogo({ className = 'w-5 h-5' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="#0A66C2" />
            <path
                fill="#FFFFFF"
                d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.58 18.42h2.72V9.77H5.58v8.65Zm4.42 0h2.71v-4.62c0-1.22.23-2.4 1.74-2.4 1.49 0 1.51 1.39 1.51 2.48v4.54h2.71v-5.13c0-2.52-.54-4.46-3.49-4.46-1.42 0-2.37.78-2.76 1.51h-.04V9.77H10v8.65Z"
            />
        </svg>
    );
}

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_CONFIG.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch {
            window.location.href = `mailto:${CONTACT_CONFIG.email}`;
        }
    };

    return (
        <div className="w-full">
            {/* ================================================================
          SECTOR 06 EDITORIAL BANNER
      ================================================================ */}
            <ChapterBanner
                sectorNumber="06"
                sectorTag="Get in touch"
                title={
                    <>
                        Let&apos;s build
                        <br />
                        something{' '}
                        <span className="font-serif-editorial text-snow font-normal tracking-[-0.01em] pr-1">
                            worth
                        </span>
                        <br />
                        shipping.
                    </>
                }
                description="Open to ICT internships, software & web collaborations, and poster or visual design commissions."
                topRight={
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#0A0D10]/90 px-3.5 py-1.5 text-[11px] font-mono text-petronas-bright border border-petronas/40">
                        <span className="w-2 h-2 rounded-full bg-petronas-bright animate-pulse" />
                        <span>Direct Channels Active</span>
                    </div>
                }
            />

            {/* ================================================================
          MAIN CONTACT CHANNELS GRID
      ================================================================ */}
            <section className="layer-carbon py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-petronas/50 bg-petronas/10 px-4 py-1.5 font-mono text-xs text-petronas-bright">
                        <span className="w-2 h-2 rounded-full bg-petronas-bright" />
                        <span>Open to internships &amp; design commissions</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {/* DIRECT EMAIL + GMAIL LOGO */}
                        <div className="rounded-2xl bg-[#0D1117]/95 border border-snow/15 hover:border-petronas/60 p-6 space-y-4 transition-colors">
                            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                Direct Email
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-white/95 border border-snow/15 grid place-items-center shrink-0">
                                    <GmailLogo className="w-5 h-5" />
                                </span>
                                <a
                                    href={`mailto:${CONTACT_CONFIG.email}`}
                                    className="font-display text-base sm:text-lg font-bold text-snow hover:text-petronas-bright transition-colors break-all"
                                >
                                    {CONTACT_CONFIG.email}
                                </a>
                            </div>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="inline-flex items-center gap-1.5 font-mono text-xs text-petronas-bright hover:underline cursor-pointer"
                            >
                                {copied ? <Check size={13} /> : <Copy size={13} />}
                                <span>{copied ? 'Copied to clipboard' : 'Copy email address'}</span>
                            </button>
                        </div>

                        {/* GITHUB + GITHUB LOGO */}
                        <a
                            href={CONTACT_CONFIG.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-2xl bg-[#0D1117]/95 border border-snow/15 hover:border-petronas/60 p-6 space-y-4 transition-colors block"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                GitHub
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-[#161B22] border border-snow/15 text-snow grid place-items-center shrink-0 group-hover:border-petronas transition-colors">
                                    <GitHubLogo className="w-5 h-5" />
                                </span>
                                <span className="font-display text-base sm:text-lg font-bold text-snow group-hover:text-petronas-bright transition-colors inline-flex items-center gap-1.5 min-w-0">
                                    <span className="truncate">{CONTACT_CONFIG.githubLabel}</span>
                                    <ArrowUpRight
                                        size={16}
                                        className="shrink-0 text-slate-400 group-hover:text-petronas-bright transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </span>
                            </div>
                            <p className="text-xs text-slate-400">
                                Source code, coursework builds, and project repositories
                            </p>
                        </a>

                        {/* LINKEDIN + LINKEDIN LOGO */}
                        <a
                            href={CONTACT_CONFIG.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-2xl bg-[#0D1117]/95 border border-snow/15 hover:border-petronas/60 p-6 space-y-4 transition-colors block"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                LinkedIn
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/40 grid place-items-center shrink-0 group-hover:border-[#0A66C2] transition-colors">
                                    <LinkedInLogo className="w-5 h-5" />
                                </span>
                                <span className="font-display text-base sm:text-lg font-bold text-snow group-hover:text-petronas-bright transition-colors inline-flex items-center gap-1.5 min-w-0">
                                    <span className="truncate">{CONTACT_CONFIG.linkedinLabel}</span>
                                    <ArrowUpRight
                                        size={16}
                                        className="shrink-0 text-slate-400 group-hover:text-petronas-bright transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </span>
                            </div>
                            <p className="text-xs text-slate-400">
                                Professional profile, academic background, and internship inquiries
                            </p>
                        </a>

                        {/* BASED IN */}
                        <div className="rounded-2xl bg-[#0D1117]/95 border border-snow/15 p-6 space-y-4">
                            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                                Based In
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-petronas/15 border border-petronas/40 text-petronas-bright grid place-items-center shrink-0">
                                    <MapPin size={18} />
                                </span>
                                <span className="font-display text-base sm:text-lg font-bold text-snow">
                                    Melaka &amp; Perak, Malaysia
                                </span>
                            </div>
                            <p className="text-xs text-slate-400">
                                UTeM Campus (FTMK) • Open to remote or on-site roles
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}