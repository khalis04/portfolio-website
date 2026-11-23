import { useState } from 'react';
import { Link } from 'react-router-dom';
import ToolBadge from '../components/ToolBadge';
import {
    ArrowRight,
    BookOpen,
    FolderKanban,
    Layers,
    Mail,
    MapPin,
    Palette,
    Sparkles,
    Terminal,
} from 'lucide-react';

const workbenchCards = [
    {
        id: 'uno-01',
        rank: '01',
        spec: 'SPEC // 01',
        icon: Terminal,
        cardBg: '#0F766E',
        cardBorder: '#5EEAD4',
        accentBadge: '#00D2BE',
        title: 'Web Systems & Android Apps',
        subtitle: 'Software Developer • Web, Desktop & Mobile',
        summary:
            'Building website-based systems, desktop software, and mobile applications in Android Studio—using React, Java, C++, Python, and MySQL backed by structured SRS and UML specs.',
        tags: ['Web Systems', 'Android Studio', 'React', 'Java / C++'],
        to: '/projects',
        cta: 'Inspect project folders',
    },
    {
        id: 'uno-02',
        rank: '02',
        spec: 'SPEC // 02',
        icon: Layers,
        cardBg: '#1D4ED8',
        cardBorder: '#93C5FD',
        accentBadge: '#38BDF8',
        title: 'HCI & Interface Craft',
        subtitle: 'Clarity Over Clutter',
        summary:
            'Usability-driven layouts, clear visual hierarchy, and responsive interfaces designed to make web platforms and applications effortless to navigate.',
        tags: ['HCI Heuristics', 'Figma', 'Tailwind CSS'],
        to: '/projects',
        cta: 'Explore UX case studies',
    },
    {
        id: 'uno-03',
        rank: '03',
        spec: 'SPEC // 03',
        icon: Palette,
        cardBg: '#B45309',
        cardBorder: '#FCD34D',
        accentBadge: '#FBBF24',
        title: 'UTeM Taekwondo Club Visuals',
        subtitle: 'Amateur Graphic Designer',
        summary:
            'Hands-on amateur graphic design for the UTeM Taekwondo Club—crafting tournament posters from scratch alongside 3D medal concepts, club jerseys, and Nikon DSLR shots.',
        tags: ['Club Posters', '2D → 3D Medals', 'Canva + AI'],
        to: '/media',
        cta: 'Open visual archive',
    },
];

const quickRoutes = [
    {
        num: '01',
        label: 'Background',
        title: 'About Me',
        desc: 'Profile, tools, and how engineering meets visual design.',
        to: '/about',
        icon: Sparkles,
    },
    {
        num: '02',
        label: 'Scrapbook & Map',
        title: 'Education',
        desc: 'MADAH, Matriculation, and FTMK UTeM academic timeline.',
        to: '/education',
        icon: BookOpen,
    },
    {
        num: '03',
        label: '07 Dossiers',
        title: 'Projects',
        desc: 'Separate coursework and club media folder drawers.',
        to: '/projects',
        icon: FolderKanban,
    },
];

export default function Home() {
    const [carbonHeader, setCarbonHeader] = useState(false);

    return (
        <div className="w-full">
            {/* ================================================================
          BAND 01: EDITORIAL GRAPH-PAPER TYPOGRAPHIC HEADER
      ================================================================ */}
            <header
                className={`relative w-full overflow-hidden border-b-2 border-[#080B0F] transition-colors duration-300 ${carbonHeader ? 'bg-[#0A0D10] text-snow' : 'bg-[#FFFFFF] text-[#080B0F]'
                    }`}
            >
                {/* Ultra-Crisp Architectural Graph-Paper Grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage: carbonHeader
                            ? 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
                            : 'linear-gradient(to right, rgba(8,11,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,11,15,0.045) 1px, transparent 1px)',
                        backgroundSize: '34px 34px',
                    }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 pb-12 sm:pb-16">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                        {/* LEFT: HEADLINE + INTRO + ACTIONS */}
                        <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                            <h1 className="animate-paper-settle text-[48px] sm:text-[72px] xl:text-[88px] font-black leading-[0.94] tracking-[-0.045em]">
                                <span className="block">Built to work.</span>
                                <span className="block mt-1.5">
                                    <span
                                        className={`font-serif-editorial font-normal tracking-[-0.01em] text-[1.07em] inline-block mr-3 sm:mr-5 ${carbonHeader ? 'text-[#00D2BE]' : 'text-[#009B95]'
                                            }`}
                                    >
                                        Styled
                                    </span>{' '}
                                    <span>to last.</span>
                                </span>
                            </h1>

                            <div
                                style={{ animationDelay: '90ms' }}
                                className="animate-paper-settle space-y-6 max-w-xl"
                            >
                                <p
                                    className={`text-sm sm:text-[16px] leading-[1.7] ${carbonHeader ? 'text-slate-300' : 'text-[#334155]'
                                        }`}
                                >
                                    I&apos;m{' '}
                                    <span
                                        className={
                                            carbonHeader
                                                ? 'text-snow font-medium'
                                                : 'text-[#080B0F] font-medium'
                                        }
                                    >
                                        Muhammad Khalis Fikri
                                    </span>
                                    , a software developer at FTMK, UTeM building website-based
                                    systems and mobile applications with{' '}
                                    <span
                                        className={
                                            carbonHeader
                                                ? 'text-snow font-medium'
                                                : 'text-[#080B0F] font-medium'
                                        }
                                    >
                                        Android Studio
                                    </span>
                                    . Outside of code, I serve as an amateur graphic designer for
                                    the{' '}
                                    <span
                                        className={
                                            carbonHeader
                                                ? 'text-snow font-medium'
                                                : 'text-[#080B0F] font-medium'
                                        }
                                    >
                                        UTeM Taekwondo Club
                                    </span>
                                    —crafting event posters, apparel, and 3D concepts. Same
                                    precision, same focus:{' '}
                                    <strong
                                        className={`font-bold ${carbonHeader ? 'text-[#00D2BE]' : 'text-[#009B95]'
                                            }`}
                                    >
                                        built for people.
                                    </strong>
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link
                                        to="/projects"
                                        className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-150 ${carbonHeader
                                            ? 'bg-[#00D2BE] text-[#080B0F] shadow-[3px_3px_0px_#FFFFFF] hover:-translate-y-0.5'
                                            : 'bg-[#080B0F] text-white shadow-[3px_3px_0px_#00A19C] hover:-translate-y-0.5'
                                            }`}
                                    >
                                        <span>Explore Projects</span>
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className={`inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 text-xs sm:text-sm font-semibold transition-colors ${carbonHeader
                                            ? 'border-snow/25 text-snow hover:border-[#00D2BE] hover:text-[#00D2BE]'
                                            : 'border-[#080B0F] text-[#080B0F] bg-white hover:bg-[#EEF3F5]'
                                            }`}
                                    >
                                        <Mail size={14} />
                                        <span>Get in Touch</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: SMALL FRAMELESS PHOTO + CARBON MODE TOGGLE */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-between gap-6">
                            <img
                                src="/images/profile-header.png"
                                alt="Muhammad Khalis Fikri"
                                className="w-full max-w-[210px] sm:max-w-[240px] lg:max-w-[260px] h-auto object-contain select-none"
                            />

                            {/* Minimalist Mode Toggle Switch */}
                            <div className="flex items-center gap-3 self-end shrink-0">
                                <span
                                    className={`font-mono text-[11px] font-semibold uppercase tracking-[0.18em] select-none ${carbonHeader ? 'text-slate-400' : 'text-[#475569]'
                                        }`}
                                >
                                    CARBON
                                </span>

                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={carbonHeader}
                                    aria-label="Toggle carbon dark header grid"
                                    onClick={() => setCarbonHeader((prev) => !prev)}
                                    className={`relative inline-flex h-9 w-16 items-center rounded-full p-1 transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petronas-bright ${carbonHeader ? 'bg-[#00A19C]' : 'bg-[#0F2422]'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-7 w-7 rounded-full bg-white shadow-sm transition-transform duration-300 ease-out ${carbonHeader ? 'translate-x-7' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ================================================================
          BAND 02: THREE AREAS PINNED TO MY WORKBENCH (UNO CARD DECK)
      ================================================================ */}
            <section className="layer-carbon py-16 sm:py-20">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-10">
                    {/* Section Heading */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <div className="section-label">01 / Core Capabilities</div>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.035em] text-snow mt-1">
                                Three areas pinned to my{' '}
                                <span className="font-serif-editorial text-[#00D2BE] font-normal pr-1">
                                    workbench.
                                </span>
                            </h2>
                        </div>

                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-petronas-bright hover:underline shrink-0"
                        >
                            <span>View all 07 dossiers</span>
                            <ArrowRight size={13} />
                        </Link>
                    </div>

                    {/* 3 UNO-Style Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        {workbenchCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <article
                                    key={card.id}
                                    style={{ backgroundColor: card.cardBg }}
                                    className="group relative rounded-[26px] border-[3px] border-[#080B0F] p-5 sm:p-6 text-snow shadow-[0_18px_40px_-14px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                                >
                                    {/* Outer UNO Card Inner Rim */}
                                    <div
                                        style={{ borderColor: `${card.cardBorder}55` }}
                                        className="pointer-events-none absolute inset-2.5 rounded-[20px] border-2"
                                    />

                                    <div className="relative z-10 space-y-4">
                                        {/* Top UNO Corner Indices */}
                                        <div className="flex items-center justify-between font-mono text-xs font-black tracking-wider">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#080B0F] text-snow border border-white/20 shadow-sm">
                                                {card.rank}
                                            </span>
                                            <span className="rounded-full bg-[#080B0F]/80 px-3 py-1 text-[10px] tracking-widest text-white/90 border border-white/15">
                                                {card.spec}
                                            </span>
                                        </div>

                                        {/* Arched / Oval UNO Center Showcase Window */}
                                        <div className="relative rounded-t-[76px] rounded-b-2xl bg-[#080B0F]/90 border-2 border-white/20 px-5 pt-7 pb-5 text-center shadow-inner">
                                            {/* Tilted UNO Center Emblem */}
                                            <div
                                                style={{ borderColor: card.accentBadge }}
                                                className="mx-auto mb-3.5 w-12 h-12 rounded-2xl rotate-[-8deg] group-hover:rotate-0 bg-white/10 border-2 flex items-center justify-center text-white transition-transform duration-300"
                                            >
                                                <Icon size={22} style={{ color: card.accentBadge }} />
                                            </div>

                                            <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
                                                {card.title}
                                            </h3>

                                            <p
                                                style={{ color: card.accentBadge }}
                                                className="font-mono text-[11px] font-bold mt-1"
                                            >
                                                {card.subtitle}
                                            </p>

                                            <p className="text-xs sm:text-[13px] text-slate-200/95 leading-relaxed mt-3 text-left">
                                                {card.summary}
                                            </p>
                                        </div>

                                        {/* UNO Tag Pills with App Logos */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {card.tags.map((tag) => (
                                                <ToolBadge key={tag} label={tag} variant="uno" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom UNO Card Action & Inverted Corner Rank */}
                                    <div className="relative z-10 mt-6 pt-3.5 border-t border-white/20 flex items-center justify-between gap-2">
                                        <Link
                                            to={card.to}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:underline"
                                        >
                                            <span>{card.cta}</span>
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform duration-200 group-hover:translate-x-1"
                                            />
                                        </Link>

                                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#080B0F] text-white/90 font-mono text-[10px] font-black rotate-180 border border-white/20">
                                            {card.rank}
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================================================================
          BAND 03: QUICK PORTFOLIO ROUTE STRIP & COLLABORATION CTA
      ================================================================ */}
            <section className="layer-slate py-14 sm:py-16">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-8">
                    <div className="grid md:grid-cols-3 gap-5">
                        {quickRoutes.map((route) => {
                            const Icon = route.icon;
                            return (
                                <Link
                                    key={route.to}
                                    to={route.to}
                                    className="group rounded-2xl bg-carbon-2/90 border border-snow/15 hover:border-petronas p-5 flex flex-col justify-between gap-4 transition-all duration-200 hover:-translate-y-1"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="w-9 h-9 rounded-xl bg-[#080B0F] border border-petronas/40 text-petronas-bright grid place-items-center">
                                                <Icon size={16} />
                                            </span>
                                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                {route.num} // {route.label}
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className="font-display text-lg font-bold text-snow group-hover:text-petronas-bright transition-colors">
                                                {route.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                                                {route.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-petronas-bright">
                                        <span>Open section</span>
                                        <ArrowRight
                                            size={12}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="rounded-2xl bg-[#080B0F] border border-petronas/40 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                        <div className="space-y-1">
                            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-petronas-bright">
                                <MapPin size={11} />
                                <span>FTMK, UTeM • Melaka, Malaysia</span>
                            </div>
                            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-snow">
                                Open for software projects, internships &amp; club collaborations.
                            </h3>
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00D2BE] text-[#080B0F] px-6 py-3 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_#FFFFFF] hover:-translate-y-0.5 transition-all shrink-0"
                        >
                            <Mail size={14} />
                            <span>Start a Conversation</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}