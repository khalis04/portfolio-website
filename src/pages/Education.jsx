import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    BookOpen,
    Code2,
    Database,
    Layers,
    Network,
    Sparkles,
} from 'lucide-react';
import ChapterBanner from '../components/ChapterBanner';
import AcademicScrapbook from '../components/AcademicScrapbook';
import ToolBadge from '../components/ToolBadge';

const subjectModules = [
    {
        code: 'MOD // 01',
        icon: Code2,
        title: 'Software Engineering & OOP',
        course: 'Java, C++ & Web / Android Systems',
        focus: 'Clean modules, reusable classes, and practical system builds.',
        tags: ['Java', 'C++', 'Android Studio', 'React'],
        tapeColor: 'rgba(0, 161, 156, 0.38)',
        tilt: '-1deg',
    },
    {
        code: 'MOD // 02',
        icon: Database,
        title: 'Databases & Data Modeling',
        course: 'Relational Schemas & SQL Queries',
        focus: 'Normalized tables, foreign-key integrity, and structured records.',
        tags: ['MySQL', 'ERD', 'SQL'],
        tapeColor: 'rgba(37, 99, 235, 0.32)',
        tilt: '1deg',
    },
    {
        code: 'MOD // 03',
        icon: Layers,
        title: 'HCI & Interface Design',
        course: 'Usability, Layout & Visual Hierarchy',
        focus: 'Clear contrast, intuitive flows, and low-friction user journeys.',
        tags: ['HCI', 'Figma', 'Tailwind CSS'],
        tapeColor: 'rgba(0, 161, 156, 0.38)',
        tilt: '-0.8deg',
    },
    {
        code: 'MOD // 04',
        icon: Network,
        title: 'Requirements & Networks',
        course: 'IEEE SRS, UML & LAN Topologies',
        focus: 'Translating system requirements into clear diagrams and subnet plans.',
        tags: ['IEEE SRS', 'UML', 'Packet Tracer'],
        tapeColor: 'rgba(15, 23, 42, 0.24)',
        tilt: '1.1deg',
    },
];

const appliedHighlights = [
    {
        num: '01',
        title: 'Blueprint before code',
        note: 'Map entities, flows, and edge cases first so builds stay structured.',
    },
    {
        num: '02',
        title: 'Code meets visual craft',
        note: 'Pairing FTMK engineering coursework with club graphic design.',
    },
    {
        num: '03',
        title: 'Ready for industry',
        note: 'Looking to apply software & UI skills in an ICT internship.',
    },
];

export default function Education() {
    const mapRef = useRef(null);
    const timelineRef = useRef(null);
    const subjectsRef = useRef(null);

    const jumpTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="w-full">
            {/* ================================================================
          SECTOR 03 CHAPTER BANNER
      ================================================================ */}
            <ChapterBanner
                sectorNumber="03"
                sectorTag="The schooling"
                title={
                    <>
                        From Perak
                        <br />
                        to{' '}
                        <span className="font-serif-editorial text-snow font-normal tracking-[-0.01em] pr-1">
                            Melaka,
                        </span>{' '}
                        UTeM.
                    </>
                }
                description="An interactive scrapbook timeline across MADAH, Matriculation, and UTeM - paired with my core academic subjects."
                topRight={
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#0A0D10]/90 px-3.5 py-1.5 text-[11px] font-mono text-snow border border-snow/15">
                        <BookOpen size={12} className="text-petronas-bright" />
                        <span>BCS (Software Development)</span>
                    </div>
                }
                pills={[
                    { num: '3.2', label: 'Scrapbook timeline', onClick: () => jumpTo(timelineRef) },
                    { num: '3.3', label: 'Key subjects & focus', onClick: () => jumpTo(subjectsRef) },
                ]}
            />

            {/* ================================================================
          BAND 01: BIGGER ACADEMIC TOWN MAP + FRAMELESS SCRAPBOOK TIMELINE
      ================================================================ */}
            <section className="layer-carbon">
                <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">
                    <div ref={timelineRef} className="scroll-mt-20">
                        <AcademicScrapbook />
                    </div>
                </div>
            </section>

            {/* ================================================================
          BAND 02: KEY SUBJECTS & APPLIED FOCUS (Matching Scrapbook Sheet)
      ================================================================ */}
            <section ref={subjectsRef} className="layer-slate scroll-mt-16">
                <div className="max-w-5xl mx-auto px-6 py-14">
                    <div className="relative rounded-[28px] border-2 border-[#080B0F] bg-[#EEF3F5] text-[#080B0F] shadow-[0_26px_64px_-22px_rgba(0,0,0,0.8)] overflow-hidden">
                        {/* Matching Drafting Grid */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0"
                            style={{
                                backgroundImage:
                                    'linear-gradient(to right, rgba(8, 11, 15, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 11, 15, 0.05) 1px, transparent 1px)',
                                backgroundSize: '26px 26px',
                            }}
                        />

                        <div className="relative z-10 p-6 sm:p-9 space-y-8">
                            {/* Section Heading */}
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#080B0F]/15">
                                <div className="space-y-1.5">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#080B0F] text-snow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                                        <Sparkles size={11} className="text-petronas-bright" />
                                        <span>Syllabus &amp; Applied Focus</span>
                                    </div>

                                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#080B0F] leading-tight">
                                        Key subjects &amp;{' '}
                                        <span className="font-serif-editorial text-[#008C87] font-normal">
                                            applied focus.
                                        </span>
                                    </h2>
                                </div>

                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#007A76] hover:text-[#080B0F] transition-colors shrink-0"
                                >
                                    <span>See coursework in action</span>
                                    <ArrowRight size={13} />
                                </Link>
                            </div>

                            {/* 4 Taped Subject Cards with App Logos */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {subjectModules.map((mod) => {
                                    const Icon = mod.icon;
                                    return (
                                        <article
                                            key={mod.code}
                                            style={{ transform: `rotate(${mod.tilt})` }}
                                            className="relative rounded-2xl bg-white border-2 border-[#080B0F] p-5 pt-6 flex flex-col justify-between gap-4 shadow-[5px_6px_0px_rgba(8,11,15,0.14)] hover:shadow-[8px_9px_0px_#00A19C] hover:!rotate-0 hover:-translate-y-1 transition-all duration-300"
                                        >
                                            {/* Top Washi Tape */}
                                            <span
                                                aria-hidden="true"
                                                style={{ backgroundColor: mod.tapeColor }}
                                                className="pointer-events-none absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 border border-[#080B0F]/12"
                                            />

                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="w-9 h-9 rounded-xl bg-[#080B0F] text-petronas-bright grid place-items-center">
                                                        <Icon size={17} />
                                                    </span>
                                                    <span className="font-mono text-[10px] font-extrabold text-[#64748B]">
                                                        {mod.code}
                                                    </span>
                                                </div>

                                                <div className="space-y-0.5">
                                                    <h3 className="font-display text-lg font-extrabold text-[#080B0F]">
                                                        {mod.title}
                                                    </h3>
                                                    <p className="font-mono text-[11px] font-semibold text-[#007A76]">
                                                        {mod.course}
                                                    </p>
                                                </div>

                                                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                                                    {mod.focus}
                                                </p>
                                            </div>

                                            <div className="pt-3 border-t border-dashed border-[#080B0F]/15 flex flex-wrap gap-1.5">
                                                {mod.tags.map((tag) => (
                                                    <ToolBadge key={tag} label={tag} variant="light" />
                                                ))}
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            {/* Bottom Applied Focus Strip (Dark Carbon Contrast Bar) */}
                            <div className="rounded-2xl bg-[#080B0F] text-snow border-2 border-[#080B0F] p-5 sm:p-6">
                                <div className="grid md:grid-cols-3 gap-5 divide-y md:divide-y-0 md:divide-x divide-snow/15">
                                    {appliedHighlights.map((item, idx) => (
                                        <div
                                            key={item.num}
                                            className={idx > 0 ? 'pt-4 md:pt-0 md:pl-5' : ''}
                                        >
                                            <div className="font-mono text-[10px] font-bold text-petronas-bright tracking-widest">
                                                FOCUS // {item.num}
                                            </div>
                                            <h3 className="font-display text-base font-bold text-snow mt-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                                                {item.note}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}