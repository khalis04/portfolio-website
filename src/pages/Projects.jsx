import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    ExternalLink,
    X,
    Sparkles,
    Terminal,
    Layers,
    Palette,
    FolderKanban,
    Clapperboard,
} from 'lucide-react';
import ChapterBanner from '../components/ChapterBanner';
import ToolBadge from '../components/ToolBadge';

const courseworkProjects = [
    {
        id: 'tuition-system',
        code: '01',
        tabLabel: 'Tuition App',
        title: 'Tuition Fee Manager',
        group: 'Coursework',
        category: 'Software Systems',
        meta: 'COURSEWORK • JAVA SWING & MYSQL',
        period: 'Feb 2026',
        role: 'Java Developer',
        icon: Terminal,
        accent: '#00A19C',
        accentDark: '#006B68',
        summary:
            'Desktop tuition fee management system built in Java Swing with MySQL database integration. Organizes student fee records, calculates balances accurately, and keeps billing workflows clear.',
        stack: ['Java', 'Swing GUI', 'MySQL', 'OOP'],
        problem:
            'Tracking student tuition balances and fee statuses across disconnected records was slow and prone to manual calculation mistakes.',
        solution:
            'Built a structured Java Swing desktop interface connected to a MySQL database to manage student tuition records and fee statuses reliably.',
        hciPrinciple: 'Error Prevention & Immediate Feedback',
        hciFocus:
            'Structured input fields and immediate status feedback help prevent invalid entries and keep fee management actions predictable.',
        deliverables: [
            'Java Swing Desktop UI',
            'MySQL Database Integration',
            'Student Fee Record Workflow',
        ],
        previews: [
            {
                src: '/images/projects/tuition-gui.jpg',
                label: 'Main Interface',
                caption: 'Java Swing desktop interface for managing tuition records.',
            },
        ],
        links: [
            {
                label: 'GitHub Repo',
                href: 'https://github.com/Kiwansz/pc-tuition-fee-management',
                type: 'external',
            },
        ],
    },
    {
        id: 'payroll-system',
        code: '02',
        tabLabel: 'Payroll DB',
        title: 'Leave & Payroll OS',
        group: 'Coursework',
        category: 'Software Systems',
        meta: 'COURSEWORK • C++ & MYSQL DATABASE',
        period: 'Dec 2025 – Jan 2026',
        role: 'C++ & Database Developer',
        icon: Terminal,
        accent: '#C8232C',
        accentDark: '#7F1219',
        summary:
            'Structured C++ payroll backend connected directly to a relational MySQL database. Cross-checks approved leave quotas against salary tiers and computes deductions accurately.',
        stack: ['C++', 'MySQL', 'SQL', 'OOP'],
        problem:
            'Disconnected leave sheets and payroll records caused inconsistent deduction calculations and manual reconciliation overhead.',
        solution:
            'Built a C++ engine linked to a normalized MySQL schema that calculates monthly leave deductions consistently.',
        hciPrinciple: 'Structured Navigation & Action Confirmation',
        hciFocus:
            'Clear menu hierarchies and explicit confirmation prompts protect operators from triggering unintended batch updates.',
        deliverables: [
            'Normalized MySQL Schema',
            'C++ Payroll Calculation Logic',
            'Automated Deduction Checks',
        ],
        previews: [
            {
                src: '/images/projects/payroll-menu.jpg',
                label: 'Admin Console',
                caption: 'Role-based C++ console connected live to MySQL tables.',
            },
        ],
        links: [
            {
                label: 'GitHub Repo',
                href: 'https://github.com/khalis04/LeaveAndPayroll',
                type: 'external',
            },
        ],
    },
    {
        id: 'smartstock-srs',
        code: '03',
        tabLabel: 'SmartStock',
        title: 'SmartStock SRS',
        group: 'Coursework',
        category: 'System Architecture',
        meta: 'COURSEWORK • IEEE SRS & UML MODELING',
        period: 'June 2026',
        role: 'System Analyst & Architect',
        icon: Layers,
        accent: '#10B981',
        accentDark: '#065F46',
        summary:
            'Complete IEEE Software Requirements Specification and UML behavioral blueprint for multi-role retail inventory tracking—mapping how suppliers, warehouse clerks, and managers coordinate restock workflows.',
        stack: ['IEEE SRS', 'UML Use Case', 'Activity Diagrams', 'System Modeling'],
        problem:
            'Retail operators lacked a unified blueprint showing how suppliers, clerks, and managers interact during stock depletion and restocking.',
        solution:
            'Produced an IEEE-standard SRS paired with role-based Use Case models, swimlane Activity diagrams, and traceable requirement matrices.',
        hciPrinciple: 'Mental Model Alignment',
        hciFocus:
            'Mapped real warehouse staff routines directly to role-specific views to reduce navigation friction during stock checks.',
        deliverables: [
            'Full IEEE SRS Document',
            'Role-Based Use Case Diagrams',
            'Swimlane Activity Workflows',
        ],
        previews: [
            {
                src: '/images/projects/smartstock-usecase.jpg',
                label: 'Use Case',
                caption: 'Multi-actor UML Use Case blueprint for managers, clerks, and suppliers.',
            },
            {
                src: '/images/projects/smartstock-activity.jpg',
                label: 'Activity Flow',
                caption: 'Swimlane workflow tracking threshold alerts through supplier sign-off.',
            },
        ],
        links: [],
    },
    {
        id: 'nexus-cyber-cafe',
        code: '04',
        tabLabel: 'Nexus LAN',
        title: 'Nexus Cyber Cafe',
        group: 'Coursework',
        category: 'System Architecture',
        meta: 'COURSEWORK • NETWORK TOPOLOGY & WEB PORTAL',
        period: 'June 2026',
        role: 'Network & Web UI Architect',
        icon: Layers,
        accent: '#2563EB',
        accentDark: '#1E3A8A',
        websiteUrl: 'https://nexuscybercafe01.wixsite.com/nexus-cyber-caf',
        summary:
            'End-to-end technical build combining segmented LAN subnet topology, workstation hardware specs, tiered hourly pricing, and a live web reservation portal. Click the UI preview or Live Website button to open the site directly.',
        stack: ['Wix', 'Packet Tracer', 'Subnetting', 'UI Design'],
        problem:
            'High-density gaming hubs require strict bandwidth isolation alongside an effortless web booking view so guests can spot open rigs immediately.',
        solution:
            'Designed a segmented LAN topology isolating gaming, admin, and guest traffic alongside a live web portal with clear station availability.',
        hciPrinciple: 'Visual Spatial Mapping',
        hciFocus:
            'Color-coded rig states and direct web navigation allow visitors to scan station availability and book effortlessly.',
        deliverables: [
            'Live Nexus Cyber Cafe Website',
            'LAN Subnet Topology',
            'Station Booking Interface',
        ],
        previews: [
            {
                src: '/images/projects/nexus-ui.jpg',
                label: 'Portal UI',
                caption: 'Click to open the live Nexus Cyber Cafe website directly.',
                directUrl: 'https://nexuscybercafe01.wixsite.com/nexus-cyber-caf',
            },
            {
                src: '/images/projects/nexus-topology.jpg',
                label: 'LAN Topology',
                caption: 'Logical subnet architecture isolating gaming, admin, and Wi-Fi traffic.',
            },
        ],
        links: [
            {
                label: 'Live Website',
                href: 'https://nexuscybercafe01.wixsite.com/nexus-cyber-caf',
                type: 'external',
            },
        ],
    },
    {
        id: 'academiu-workshop2',
        code: '05',
        tabLabel: 'ACADEMIU',
        title: 'ACADEMIU',
        group: 'Coursework',
        category: 'Software Systems',
        meta: 'WORKSHOP 2 • GAMIFIED STUDY PLATFORM',
        period: '2026',
        role: 'Full-Stack & Database Developer',
        icon: Terminal,
        accent: '#7C3AED',
        accentDark: '#4C1D95',
        summary:
            'Workshop 2 gamified academic drill-and-practice web platform featuring a seven-tier rank crest progression, streak-based star multipliers, customizable season folders, relational ERD modeling, and AI-assisted practice questions.',
        stack: ['React', 'Tailwind CSS', 'MySQL', 'Gemini AI'],
        problem:
            'Repetitive academic revision and drill practice often feel unengaging without structured progression milestones and organized study sets.',
        solution:
            'Built ACADEMIU with rank tiers, streak star multipliers, customizable season folders, and a normalized relational database schema.',
        hciPrinciple: 'Progression Feedback & Habit Loops',
        hciFocus:
            'Visible rank crests, season folders, and streak multipliers reward consistent practice while keeping study sessions focused.',
        deliverables: [
            'ACADEMIU Web Platform',
            'Relational Database ERD & Schema',
            '7-Tier Rank & Streak Progression',
        ],
        previews: [
            {
                src: '/images/projects/academiu-dashboard.jpg',
                label: 'Platform UI',
                caption: 'ACADEMIU Workshop 2 drill workspace, rank progression, and season folders.',
            },
            {
                src: '/images/projects/academiu-erd.jpg',
                label: 'System & ERD',
                caption: 'Relational database architecture and practice module flow.',
            },
        ],
        links: [
            {
                label: 'GitHub Repo',
                href: 'https://github.com/khalis04/academiu-web',
                type: 'external',
            },
        ],
    },
];

const mediaProjects = [
    {
        id: 'club-poster-design',
        code: '01',
        tabLabel: 'Club Posters',
        title: 'Event Posters',
        group: 'Media',
        category: 'Poster & Visual Design',
        meta: 'MEDIA • UTEM TAEKWONDO CLUB POSTERS',
        period: '2026',
        role: 'Amateur Graphic Designer',
        icon: Palette,
        accent: '#EA580C',
        accentDark: '#9A3412',
        summary:
            'Amateur graphic design crafted manually from a blank canvas for the UTeM Taekwondo Club—built around bold athletic typography, sharp visual contrast, and 3-second mobile scannability.',
        stack: ['Canva', 'Typography', 'Visual Hierarchy', 'Print & Social'],
        problem:
            'Club announcements and tournament flyers often buried dates, venues, and categories beneath cluttered graphics on small mobile screens.',
        solution:
            'Designed clean athletic poster systems from scratch with disciplined type scales, focal imagery, and print-ready contrast—no generative templates.',
        hciPrinciple: 'Visual Hierarchy & 3-Second Scannability',
        hciFocus:
            'Anchored headlines, event dates, and registration CTAs along a clean reading path so viewers absorb key details within three seconds.',
        deliverables: [
            'Original Club Event Posters',
            'Social Media Promo Graphics',
            'Print-Ready Layouts',
        ],
        previews: [
            {
                src: '/images/poster-1.jpg',
                label: 'Poster 01',
                caption: 'Blank-canvas promotional poster structured for instant mobile legibility.',
            },
            {
                src: '/images/poster-2.jpg',
                label: 'Poster 02',
                caption: 'High-contrast tournament flyer exported for print and Instagram.',
            },
        ],
        links: [
            { label: 'Media Gallery', href: '/media', type: 'internal' },
        ],
    },
    {
        id: 'taekwondo-ai-concepts',
        code: '02',
        tabLabel: '3D Medal Lab',
        title: '2D → 3D Medal Lab',
        group: 'Media',
        category: 'Poster & Visual Design',
        meta: 'MEDIA • CANVA + GEMINI AI VISUALS',
        period: 'Mar – Sep 2026',
        role: 'Visual Concept Designer',
        icon: Palette,
        accent: '#D97706',
        accentDark: '#78350F',
        summary:
            'Rapid physical-product prototyping for UTeM Taekwondo Club, KTJ, and SUKIPT 2026. Manual 2D medal geometry drafted in Canva is transformed via Gemini AI into realistic 3D bas-relief metallic renders.',
        stack: ['Canva 2D Draft', 'Gemini AI 3D', 'Apparel Mockups', 'HAI Workflow'],
        problem:
            'Sports committees struggled to picture how flat 2D medal drafts and apparel sketches would translate into physical metallic medals and kits.',
        solution:
            'Drafted exact 2D emblem layout and typography in Canva first, then guided image-to-image Gemini AI renders for realistic 3D stakeholder previews.',
        hciPrinciple: 'Human-AI Co-Creation (HAI)',
        hciFocus:
            'Retaining strict manual layout control in Canva while delegating lighting and material realism to AI speeds up committee sign-off.',
        deliverables: [
            'Canva 2D Base + Gemini 3D Render',
            'Windbreaker & Jersey Concepts',
            'Committee Approval Mockups',
        ],
        previews: [
            {
                src: '/images/medal-canva-draft.jpg',
                label: '2D Draft',
                caption: 'Manual 2D medal layout drafted in Canva prior to 3D rendering.',
            },
            {
                src: '/images/medal-ai-3d.jpg',
                label: '3D Render',
                caption: 'Metallic 3D bas-relief visualization generated from the 2D base.',
            },
        ],
        links: [
            { label: 'Media Gallery', href: '/media', type: 'internal' },
        ],
    },
];

function FolderDeckSection({
    sectionRef,
    layerClass,
    sectionLabel,
    heading,
    badgeText,
    badgeIcon: BadgeIcon,
    projects,
    activeId,
    onSelectProject,
    previewIdx,
    onChangePreviewIdx,
    missingImages,
    onMarkMissing,
    onOpenCaseStudy,
    onOpenLightbox,
}) {
    const activeIndex = Math.max(
        0,
        projects.findIndex((p) => p.id === activeId)
    );
    const activeProject = projects[activeIndex] || projects[0];
    const safePreviewIdx =
        previewIdx < activeProject.previews.length ? previewIdx : 0;
    const currentPreview = activeProject.previews[safePreviewIdx];
    const projectLinks = activeProject.links ?? [];

    const stepFolder = (dir) => {
        const nextIdx = (activeIndex + dir + projects.length) % projects.length;
        onSelectProject(projects[nextIdx].id);
    };

    const handlePreviewClick = () => {
        if (currentPreview?.directUrl) {
            window.open(currentPreview.directUrl, '_blank', 'noopener,noreferrer');
            return;
        }
        onOpenLightbox(activeProject, safePreviewIdx);
    };

    return (
        <section ref={sectionRef} className={`${layerClass} scroll-mt-16`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-20">
                {/* Section Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7 px-1">
                    <div className="space-y-1.5">
                        <div className="section-label">{sectionLabel}</div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-snow flex items-center gap-2.5">
                            <span>{heading}</span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-carbon-2 border border-petronas/50 px-3 py-1 font-mono text-[11px] font-bold text-petronas-bright">
                                <BadgeIcon size={12} />
                                <span>{badgeText}</span>
                            </span>
                        </h2>
                    </div>

                    <span className="font-mono text-xs text-slate-400">
                        {projects.length} folders in drawer
                    </span>
                </div>

                {/* Stacked Physical Folder Deck */}
                <div className="relative">
                    {/* TOP LAYERED FOLDER TABS */}
                    <div className="relative z-20 flex items-end gap-1.5 sm:gap-2 px-4 sm:px-8 overflow-x-auto no-scrollbar pt-2">
                        {projects.map((proj) => {
                            const isActive = proj.id === activeProject.id;
                            return (
                                <button
                                    key={proj.id}
                                    type="button"
                                    onClick={() => onSelectProject(proj.id)}
                                    style={{ backgroundColor: proj.accent }}
                                    className={`group relative shrink-0 inline-flex items-center gap-2 rounded-t-xl border-2 border-b-0 border-[#080B0F] px-3 sm:px-4 transition-all duration-200 cursor-pointer ${isActive
                                            ? 'py-2.5 z-30 translate-y-[2px] shadow-[0_-4px_14px_rgba(0,0,0,0.28)]'
                                            : 'py-2 opacity-85 hover:opacity-100 translate-y-[6px] hover:translate-y-[3px] z-10'
                                        }`}
                                >
                                    <span className="inline-flex items-center justify-center rounded-full bg-[#080B0F] text-snow font-mono text-[10px] font-bold px-2 py-0.5 leading-none">
                                        {proj.code}
                                    </span>
                                    <span className="font-mono text-xs font-bold text-[#080B0F] whitespace-nowrap">
                                        {proj.tabLabel}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* RECESSED STACKED PAPER SHEETS */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none relative z-10 mx-3 sm:mx-6 h-3 rounded-t-2xl bg-[#B8C0CC] border-2 border-b-0 border-[#080B0F]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none relative z-10 mx-1.5 sm:mx-3 -mt-1 h-3 rounded-t-2xl bg-[#D8DEE6] border-2 border-b-0 border-[#080B0F]"
                    />

                    {/* ACTIVE FRONT WHITE FOLDER SHEET */}
                    <article
                        key={activeProject.id}
                        className="relative z-20 -mt-1 rounded-[24px] bg-[#FAFBFD] text-[#080B0F] border-2 border-[#080B0F] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.85)]"
                    >
                        <div className="animate-fade-up grid lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 lg:p-12">
                            {/* LEFT COLUMN: CLEAN EDITORIAL PROJECT BRIEF */}
                            <div className="lg:col-span-5 space-y-6">
                                <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#475569]">
                                    <span
                                        className="w-2.5 h-2.5 rounded-full shrink-0 border border-[#080B0F]/40"
                                        style={{ backgroundColor: activeProject.accent }}
                                    />
                                    <span>{activeProject.meta}</span>
                                </div>

                                <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-[#080B0F] tracking-[-0.035em] leading-[1.02]">
                                    {activeProject.title}
                                </h3>

                                <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed">
                                    {activeProject.summary}
                                </p>

                                <div className="pt-1">
                                    <button
                                        type="button"
                                        onClick={() => onOpenCaseStudy(activeProject)}
                                        style={{ boxShadow: `0 5px 0 ${activeProject.accent}` }}
                                        className="group inline-flex items-center gap-2.5 rounded-full bg-[#080B0F] text-snow px-6 py-3 text-sm font-semibold transition-all duration-150 cursor-pointer hover:-translate-y-0.5 active:translate-y-1"
                                    >
                                        <span>Read the case study</span>
                                        <ArrowRight
                                            size={15}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </button>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 pt-1">
                                    {projectLinks.map((link) =>
                                        link.type === 'internal' ? (
                                            <Link
                                                key={link.label}
                                                to={link.href}
                                                className="inline-flex items-center gap-1.5 rounded-full bg-snow border border-[#CBD5E1] hover:border-[#080B0F] px-4 py-1.5 text-xs font-medium text-[#080B0F] transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 rounded-full bg-snow border border-[#CBD5E1] hover:border-[#080B0F] px-4 py-1.5 text-xs font-medium text-[#080B0F] transition-colors"
                                            >
                                                {link.label}
                                                <ExternalLink size={11} className="text-[#64748B]" />
                                            </a>
                                        )
                                    )}
                                    <span className="inline-flex items-center rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-3.5 py-1.5 text-[11px] font-mono text-[#475569]">
                                        {activeProject.period}
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: FLAT COLORED SHOWCASE PANEL WITH CLEAN IMAGE */}
                            <div className="lg:col-span-7">
                                <div
                                    className="relative rounded-[24px] p-5 sm:p-6 overflow-hidden border border-[#080B0F]/15"
                                    style={{
                                        background: `linear-gradient(145deg, ${activeProject.accent}, ${activeProject.accentDark})`,
                                        boxShadow: `8px 8px 0 ${activeProject.accent}38`,
                                    }}
                                >
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 opacity-15"
                                        style={{
                                            backgroundImage:
                                                'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
                                            backgroundSize: '14px 14px',
                                        }}
                                    />

                                    <div className="relative z-10 space-y-3">
                                        <div className="relative">
                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-[18px] bg-[#080B0F]/35"
                                            />

                                            <div
                                                onClick={handlePreviewClick}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault();
                                                        handlePreviewClick();
                                                    }
                                                }}
                                                aria-label={
                                                    currentPreview.directUrl
                                                        ? `Open ${activeProject.title} website`
                                                        : `View ${currentPreview.label} larger`
                                                }
                                                className="relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-[#10151C] border-2 border-[#080B0F]/25 cursor-pointer"
                                            >
                                                {!missingImages[currentPreview.src] && (
                                                    <img
                                                        key={currentPreview.src}
                                                        src={currentPreview.src}
                                                        alt={`${activeProject.title} — ${currentPreview.label}`}
                                                        onError={() => onMarkMissing(currentPreview.src)}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {activeProject.previews.length > 1 && (
                                            <div className="flex items-center justify-between gap-2 pt-1">
                                                <div className="flex items-center gap-1.5">
                                                    {activeProject.previews.map((slide, idx) => (
                                                        <button
                                                            key={slide.src}
                                                            type="button"
                                                            onClick={() => {
                                                                onChangePreviewIdx(idx);
                                                                if (slide.directUrl) {
                                                                    window.open(
                                                                        slide.directUrl,
                                                                        '_blank',
                                                                        'noopener,noreferrer'
                                                                    );
                                                                }
                                                            }}
                                                            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-colors cursor-pointer ${safePreviewIdx === idx
                                                                    ? 'bg-[#080B0F] text-snow'
                                                                    : 'bg-snow/20 text-snow hover:bg-snow/35'
                                                                }`}
                                                        >
                                                            {slide.label}
                                                        </button>
                                                    ))}
                                                </div>
                                                <span className="font-mono text-[10px] text-snow/85">
                                                    0{safePreviewIdx + 1} / 0{activeProject.previews.length}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM-LEFT OVERLAPPING CHAPTER PILL */}
                        <div className="pointer-events-none absolute -bottom-4 left-5 sm:left-8 flex items-center gap-3">
                            <span
                                style={{ backgroundColor: activeProject.accent }}
                                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border-2 border-[#080B0F] px-3.5 py-1 text-[11px] font-mono font-bold text-[#080B0F] shadow-[2px_2px_0px_#080B0F]"
                            >
                                <span className="h-2 w-2 rounded-full bg-[#FDE047] border border-[#080B0F]/40" />
                                <span>{activeProject.group.toUpperCase()}</span>
                                <span className="font-sans font-semibold">
                                    {activeProject.tabLabel}
                                </span>
                            </span>
                        </div>

                        {/* BOTTOM-RIGHT FOLDER STEPPER PILL */}
                        <div className="absolute -bottom-4 right-5 sm:right-8 inline-flex items-center gap-1 rounded-full bg-[#080B0F] border-2 border-[#080B0F] px-1.5 py-1 text-snow shadow-[2px_2px_0px_rgba(0,210,190,0.6)]">
                            <button
                                type="button"
                                onClick={() => stepFolder(-1)}
                                aria-label={`Previous ${activeProject.group} folder`}
                                className="p-1 rounded-full hover:bg-snow/15 transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={14} />
                            </button>
                            <span className="px-2 font-mono text-[11px] font-bold text-petronas-bright tabular-nums">
                                {activeProject.code} / 0{projects.length}
                            </span>
                            <button
                                type="button"
                                onClick={() => stepFolder(1)}
                                aria-label={`Next ${activeProject.group} folder`}
                                className="p-1 rounded-full hover:bg-snow/15 transition-colors cursor-pointer"
                            >
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    </article>
                </div>

                {/* STACK BAR BELOW FOLDER WITH APP LOGOS */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 px-2 text-xs font-mono text-slate-400">
                    <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-500 mr-1">Stack:</span>
                        {activeProject.stack.map((tech) => (
                            <ToolBadge key={tech} label={tech} variant="dark" />
                        ))}
                    </div>
                    <span className="hidden sm:inline text-[11px] text-slate-500">
                        Click any folder tab above to switch {activeProject.group.toLowerCase()} files
                    </span>
                </div>
            </div>
        </section>
    );
}

export default function Projects() {
    const [viewMode, setViewMode] = useState('all'); // 'all' | 'coursework' | 'media'
    const [courseworkActiveId, setCourseworkActiveId] = useState(
        courseworkProjects[0].id
    );
    const [courseworkPreviewIdx, setCourseworkPreviewIdx] = useState(0);

    const [mediaActiveId, setMediaActiveId] = useState(mediaProjects[0].id);
    const [mediaPreviewIdx, setMediaPreviewIdx] = useState(0);

    const [missingImages, setMissingImages] = useState({});
    const [caseStudyProject, setCaseStudyProject] = useState(null);
    const [lightboxState, setLightboxState] = useState(null); // { project, previewIdx }

    const courseworkRef = useRef(null);
    const mediaRef = useRef(null);

    const handleSelectCoursework = (id) => {
        setCourseworkActiveId(id);
        setCourseworkPreviewIdx(0);
    };

    const handleSelectMedia = (id) => {
        setMediaActiveId(id);
        setMediaPreviewIdx(0);
    };

    const jumpToGroup = (mode, targetRef) => {
        setViewMode(mode);
        setTimeout(() => {
            targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 40);
    };

    const markMissing = (src) => {
        setMissingImages((prev) => ({ ...prev, [src]: true }));
    };

    const stepLightbox = (dir) => {
        if (!lightboxState) return;
        const total = lightboxState.project.previews.length;
        setLightboxState((prev) => ({
            ...prev,
            previewIdx: (prev.previewIdx + dir + total) % total,
        }));
    };

    useEffect(() => {
        const onKeyDown = (e) => {
            const tag = document.activeElement?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA') return;

            if (lightboxState) {
                if (e.key === 'Escape') setLightboxState(null);
                if (e.key === 'ArrowRight') stepLightbox(1);
                if (e.key === 'ArrowLeft') stepLightbox(-1);
                return;
            }

            if (caseStudyProject && e.key === 'Escape') {
                setCaseStudyProject(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [lightboxState, caseStudyProject]);

    const showCoursework = viewMode === 'all' || viewMode === 'coursework';
    const showMedia = viewMode === 'all' || viewMode === 'media';

    const activeLightboxPreview = lightboxState
        ? lightboxState.project.previews[
        lightboxState.previewIdx < lightboxState.project.previews.length
            ? lightboxState.previewIdx
            : 0
        ]
        : null;

    return (
        <div className="w-full">
            {/* ================================================================
          CHAPTER 04 EDITORIAL BANNER
      ================================================================ */}
            <ChapterBanner
                sectorNumber="04"
                sectorTag="The making"
                title={
                    <>
                        Things with
                        <br />
                        my{' '}
                        <span className="font-serif-editorial text-snow font-normal tracking-[-0.01em] pr-1">
                            fingerprints
                        </span>
                        <br />
                        on them.
                    </>
                }
                description="Separate folder drawers for university coursework builds and UTeM Taekwondo Club media work."
                topRight={
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0D10]/90 px-3.5 py-1.5 text-[11px] font-mono text-snow border border-snow/15">
                        <span className="text-petronas-bright font-bold">
                            0{courseworkProjects.length}
                        </span>
                        <span className="text-slate-400">Coursework</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-petronas-bright font-bold">
                            0{mediaProjects.length}
                        </span>
                        <span className="text-slate-400">Media</span>
                    </div>
                }
                pills={[
                    {
                        num: '4.1',
                        label: 'Both drawers',
                        active: viewMode === 'all',
                        onClick: () => setViewMode('all'),
                    },
                    {
                        num: '4.2',
                        label: 'Coursework folder',
                        active: viewMode === 'coursework',
                        onClick: () => jumpToGroup('coursework', courseworkRef),
                    },
                    {
                        num: '4.3',
                        label: 'Media folder',
                        active: viewMode === 'media',
                        onClick: () => jumpToGroup('media', mediaRef),
                    },
                ]}
            />

            {/* ================================================================
          DRAWER 01: COURSEWORK FOLDER
      ================================================================ */}
            {showCoursework && (
                <FolderDeckSection
                    sectionRef={courseworkRef}
                    layerClass="layer-carbon"
                    sectionLabel="01 / Academic & Engineering Drawer"
                    heading="Coursework Projects"
                    badgeText="COURSEWORK"
                    badgeIcon={FolderKanban}
                    projects={courseworkProjects}
                    activeId={courseworkActiveId}
                    onSelectProject={handleSelectCoursework}
                    previewIdx={courseworkPreviewIdx}
                    onChangePreviewIdx={setCourseworkPreviewIdx}
                    missingImages={missingImages}
                    onMarkMissing={markMissing}
                    onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
                    onOpenLightbox={(proj, idx) =>
                        setLightboxState({ project: proj, previewIdx: idx })
                    }
                />
            )}

            {/* ================================================================
          DRAWER 02: MEDIA FOLDER
      ================================================================ */}
            {showMedia && (
                <FolderDeckSection
                    sectionRef={mediaRef}
                    layerClass="layer-slate"
                    sectionLabel="02 / Club & Visual Studio Drawer"
                    heading="Media & Club Visuals"
                    badgeText="MEDIA"
                    badgeIcon={Clapperboard}
                    projects={mediaProjects}
                    activeId={mediaActiveId}
                    onSelectProject={handleSelectMedia}
                    previewIdx={mediaPreviewIdx}
                    onChangePreviewIdx={setMediaPreviewIdx}
                    missingImages={missingImages}
                    onMarkMissing={markMissing}
                    onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
                    onOpenLightbox={(proj, idx) =>
                        setLightboxState({ project: proj, previewIdx: idx })
                    }
                />
            )}

            {/* ================================================================
          REORGANIZED CASE STUDY MODAL ("Read the case study ->")
      ================================================================ */}
            {caseStudyProject && (
                <div
                    className="fixed inset-0 z-50 bg-carbon/85 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setCaseStudyProject(null)}
                >
                    <div
                        className="animate-modal-in w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-[24px] bg-[#FAFBFD] text-[#080B0F] border-2 border-[#080B0F] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Strip */}
                        <div
                            className="px-6 py-5 flex items-start justify-between gap-4 border-b-2 border-[#080B0F]"
                            style={{ backgroundColor: caseStudyProject.accent }}
                        >
                            <div className="space-y-1.5">
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#080B0F] text-snow px-3 py-0.5 font-mono text-[10px] font-bold">
                                    <span>{caseStudyProject.group.toUpperCase()}</span>
                                    <span className="text-petronas-bright">•</span>
                                    <span>FILE // {caseStudyProject.code}</span>
                                    <span className="text-petronas-bright">•</span>
                                    <span>{caseStudyProject.period}</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#080B0F] leading-tight">
                                    {caseStudyProject.title}
                                </h2>
                                <p className="font-mono text-xs font-semibold text-[#080B0F]/85">
                                    {caseStudyProject.role} — {caseStudyProject.category}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setCaseStudyProject(null)}
                                aria-label="Close case study"
                                className="p-2 rounded-full bg-[#080B0F] text-snow hover:opacity-85 transition-opacity cursor-pointer shrink-0"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Reorganized Body */}
                        <div className="p-6 sm:p-7 space-y-6">
                            {/* Row 1: Problem & Solution Cards */}
                            <div className="grid sm:grid-cols-2 gap-4 items-stretch">
                                <div className="rounded-2xl bg-white border border-[#CBD5E1] p-4 space-y-2 shadow-2xs">
                                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                                        01 / Problem Statement
                                    </div>
                                    <p className="text-sm text-[#1E293B] leading-relaxed">
                                        {caseStudyProject.problem}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white border-2 border-[#080B0F] p-4 space-y-2 shadow-[3px_3px_0px_rgba(8,11,15,0.12)]">
                                    <div
                                        className="font-mono text-[10px] font-bold uppercase tracking-wider"
                                        style={{ color: caseStudyProject.accentDark }}
                                    >
                                        02 / Solution Approach
                                    </div>
                                    <p className="text-sm text-[#080B0F] leading-relaxed">
                                        {caseStudyProject.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Row 2: Applied HCI Callout */}
                            <div className="rounded-2xl bg-[#080B0F] text-snow p-5 space-y-2 border-l-4 border-petronas-bright">
                                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-petronas-bright">
                                    <Sparkles size={12} />
                                    <span>
                                        03 / Applied HCI Principle — {caseStudyProject.hciPrinciple}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-200 leading-relaxed">
                                    {caseStudyProject.hciFocus}
                                </p>
                            </div>

                            {/* Row 3: Key Deliverables */}
                            <div className="space-y-2.5">
                                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                                    04 / Key Deliverables
                                </div>
                                <div className="grid sm:grid-cols-3 gap-3">
                                    {caseStudyProject.deliverables.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-2.5 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#080B0F] p-3.5 text-xs font-semibold text-[#080B0F] transition-colors"
                                        >
                                            <CheckCircle2
                                                size={15}
                                                className="shrink-0 mt-0.5"
                                                style={{ color: caseStudyProject.accent }}
                                            />
                                            <span className="leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Row 4: Tech Stack with App Logos & Action Buttons */}
                            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {caseStudyProject.stack.map((tech) => (
                                        <ToolBadge key={tech} label={tech} variant="modal" />
                                    ))}
                                </div>

                                {(caseStudyProject.links ?? []).length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                                        {caseStudyProject.links.map((link) =>
                                            link.type === 'internal' ? (
                                                <Link
                                                    key={link.label}
                                                    to={link.href}
                                                    onClick={() => setCaseStudyProject(null)}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-[#080B0F] text-snow px-4 py-2 text-xs font-semibold hover:opacity-90"
                                                >
                                                    {link.label} <ArrowRight size={12} />
                                                </Link>
                                            ) : (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#080B0F] bg-white text-[#080B0F] px-4 py-1.5 text-xs font-semibold hover:bg-[#080B0F] hover:text-snow transition-colors"
                                                >
                                                    {link.label} <ExternalLink size={11} />
                                                </a>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ================================================================
          FULLSCREEN PREVIEW LIGHTBOX
      ================================================================ */}
            {lightboxState && activeLightboxPreview && (
                <div
                    className="fixed inset-0 z-50 bg-carbon/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setLightboxState(null)}
                >
                    <div
                        className="animate-modal-in w-full max-w-4xl bg-carbon-2 border border-petronas/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-snow/10">
                            <div className="min-w-0">
                                <div className="text-[11px] font-mono text-petronas-bright uppercase">
                                    {lightboxState.project.group} • FILE //{' '}
                                    {lightboxState.project.code} — {activeLightboxPreview.label}
                                </div>
                                <h3 className="font-display text-base font-bold text-snow truncate">
                                    {lightboxState.project.title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setLightboxState(null)}
                                className="p-2 rounded-lg text-slate-300 hover:text-snow hover:bg-snow/10 cursor-pointer"
                                aria-label="Close fullscreen preview"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="relative bg-carbon flex-grow min-h-[300px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
                            {!missingImages[activeLightboxPreview.src] && (
                                <img
                                    key={activeLightboxPreview.src}
                                    src={activeLightboxPreview.src}
                                    alt={activeLightboxPreview.label}
                                    onError={() => markMissing(activeLightboxPreview.src)}
                                    className="animate-modal-in max-h-[68vh] w-auto object-contain"
                                />
                            )}

                            {lightboxState.project.previews.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => stepLightbox(-1)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-carbon/85 text-snow border border-snow/15 hover:border-petronas hover:text-petronas-bright transition-colors cursor-pointer"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => stepLightbox(1)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-carbon/85 text-snow border border-snow/15 hover:border-petronas hover:text-petronas-bright transition-colors cursor-pointer"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="px-5 py-3.5 border-t border-snow/10 flex items-center justify-between gap-4 bg-carbon-2">
                            <p className="text-xs text-slate-300">
                                {activeLightboxPreview.caption}
                            </p>
                            <span className="text-[11px] font-mono text-petronas-bright shrink-0">
                                0{lightboxState.previewIdx + 1} / 0
                                {lightboxState.project.previews.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}