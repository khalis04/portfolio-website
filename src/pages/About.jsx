import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Copy,
    Check,
    Mail,
    ArrowUpRight,
    MapPin,
    Camera,
    Palette,
    Award,
    Layers,
    Cpu,
    Sparkles,
    Clock,
    Shuffle,
} from 'lucide-react';
import ChapterBanner from '../components/ChapterBanner';
import FlipProfileCard from '../components/FlipProfileCard';
import TaekwondoScrapbook from '../components/TaekwondoScrapbook';

const habitNotes = [
    {
        id: 'h1',
        num: '01',
        icon: Layers,
        title: 'Blueprint first',
        line: 'Sketch UML, tables, and flows before opening the IDE.',
        tag: 'ARCHITECTURE',
        bg: '#FEF08A',
        tape: 'rgba(0, 161, 156, 0.5)',
        baseTilt: -2.2,
    },
    {
        id: 'h2',
        num: '02',
        icon: Cpu,
        title: 'Calm, obvious UI',
        line: 'Clear contrast and instant feedback—zero guesswork.',
        tag: 'HCI CRAFT',
        bg: '#CCFBF1',
        tape: 'rgba(8, 11, 15, 0.35)',
        baseTilt: 1.8,
    },
    {
        id: 'h3',
        num: '03',
        icon: Sparkles,
        title: 'Craft + AI speed',
        line: 'Manual club posters; AI only for 3D medal prototypes.',
        tag: 'WORKFLOW',
        bg: '#FFFFFF',
        tape: 'rgba(245, 158, 11, 0.5)',
        baseTilt: -1.4,
    },
    {
        id: 'h4',
        num: '04',
        icon: Clock,
        title: 'Daily discipline',
        line: 'Balancing FTMK labs with evening coaching in Jasin.',
        tag: 'ROUTINE',
        bg: '#FFE4E6',
        tape: 'rgba(59, 130, 246, 0.45)',
        baseTilt: 2.3,
    },
];

const deskPasses = [
    {
        badge: 'COACH PASS',
        badgeBg: '#00A19C',
        icon: Award,
        title: 'Kelab Taekwondo Jasin',
        meta: 'Assistant Coach • KTJ',
        note: 'Kyorugi sparring drills, Poomsae prep & ringside cornering.',
        tilt: '-1.5deg',
    },
    {
        badge: 'AMATEUR DESIGNER',
        badgeBg: '#FB923C',
        icon: Palette,
        title: 'UTeM Taekwondo Club',
        meta: 'Amateur Graphic Designer',
        note: 'Creating club event posters from scratch plus 3D medal, lanyard & apparel concepts.',
        tilt: '1.2deg',
    },
    {
        badge: 'MANUAL MODE',
        badgeBg: '#FDE047',
        icon: Camera,
        title: 'Nikon DSLR',
        meta: '1/1000s • f/2.8 • RAW',
        note: 'Arena action & street frames that train my eye for UI contrast.',
        tilt: '-1.2deg',
    },
];

const indexFacts = [
    { label: 'ROLE', value: 'Software Developer (Web & Android Apps)' },
    { label: 'STUDYING', value: 'BCS (Software Dev) • FTMK, UTeM' },
    { label: 'BUILDING', value: 'React, Android Studio, Java, C++ & SQL' },
    { label: 'CREATIVE', value: 'Amateur Graphic Designer • UTeM Taekwondo Club' },
];

export default function About() {
    const [copied, setCopied] = useState(false);
    const [noteTilts, setNoteTilts] = useState(() =>
        Object.fromEntries(habitNotes.map((n) => [n.id, n.baseTilt]))
    );

    const deskRef = useRef(null);
    const habitsRef = useRef(null);
    const scrapbookRef = useRef(null);
    const passesRef = useRef(null);

    const email = 'khalisfikri04@gmail.com';

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shuffleNotes = () => {
        setNoteTilts(
            Object.fromEntries(
                habitNotes.map((n) => [
                    n.id,
                    Number(((Math.random() - 0.5) * 8).toFixed(1)),
                ])
            )
        );
    };

    const jumpTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="w-full">
            {/* ================================================================
          SECTOR 02 CHAPTER BANNER (F1 Car 2026 + Android + F1 Helmet)
      ================================================================ */}
            <ChapterBanner
                sectorNumber="02"
                sectorTag="The driver"
                title={
                    <>
                        Built on code,
                        <br />
                        shaped by{' '}
                        <span className="font-serif-editorial text-snow font-normal tracking-[-0.01em] pr-1">
                            discipline.
                        </span>
                    </>
                }
                description="Less bio essay, more snapshots—flip my card, browse the sticky notes, and check out moments on the mat."
                topRight={
                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0A0D10] text-snow px-4 py-2 text-xs font-mono hover:opacity-90 transition-opacity cursor-pointer"
                        title="Click to copy email address"
                    >
                        <Mail size={13} className="text-petronas-bright" />
                        <span>{email}</span>
                        {copied ? (
                            <Check size={13} className="text-petronas-bright" />
                        ) : (
                            <Copy size={13} />
                        )}
                    </button>
                }
                pills={[
                    { num: '2.1', label: 'Profile desk', onClick: () => jumpTo(deskRef) },
                    { num: '2.2', label: 'How I work', onClick: () => jumpTo(habitsRef) },
                    { num: '2.3', label: 'Mat scrapbook', onClick: () => jumpTo(scrapbookRef) },
                    { num: '2.4', label: 'Off-clock passes', onClick: () => jumpTo(passesRef) },
                ]}
            />

            {/* ================================================================
          SPREAD 1: THE DRIVER'S DESK (Paper Collage + Flip Profile Card)
      ================================================================ */}
            <section ref={deskRef} className="layer-carbon scroll-mt-16">
                <div className="max-w-5xl mx-auto px-6 py-12 sm:py-14">
                    <div className="relative rounded-[28px] border-2 border-[#080B0F] bg-[#F6F3EB] text-[#080B0F] shadow-[0_26px_64px_-22px_rgba(0,0,0,0.85)] overflow-hidden">
                        {/* Dot-Grid Paper Texture */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 opacity-55"
                            style={{
                                backgroundImage:
                                    'radial-gradient(rgba(8, 11, 15, 0.14) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                            }}
                        />

                        <div className="relative z-10 p-6 sm:p-10 grid md:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* LEFT: TAPED NOTES, ROUTE TICKET & LINED INDEX CARD */}
                            <div className="md:col-span-7 space-y-6">
                                {/* Short Pinned Intro Card */}
                                <div
                                    style={{ transform: 'rotate(-0.8deg)' }}
                                    className="relative bg-white border-2 border-[#080B0F] rounded-xl p-5 shadow-[5px_5px_0px_#080B0F] hover:rotate-0 transition-transform duration-300"
                                >
                                    {/* Washi Tape */}
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            backgroundColor: 'rgba(0, 161, 156, 0.48)',
                                            transform: 'rotate(-4deg)',
                                        }}
                                        className="pointer-events-none absolute -top-3 left-6 w-20 h-5 border border-[#080B0F]/15"
                                    />

                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#007A76]">
                                            HELLO // NOTE 01
                                        </span>
                                        <span className="rounded bg-[#FEF08A] border border-[#080B0F] px-2 py-0.5 font-mono text-[9px] font-extrabold">
                                            FTMK • UTeM
                                        </span>
                                    </div>

                                    <h2 className="font-serif-editorial text-3xl sm:text-[34px] text-[#080B0F] leading-[1.08]">
                                        Software developer by day, club designer &amp; coach after class.
                                    </h2>

                                    <p className="text-sm text-[#334155] mt-2 leading-relaxed">
                                        I develop website-based systems and Android Studio applications that feel clear and reliable—and contribute as an amateur graphic designer for the UTeM Taekwondo Club alongside coaching on the mat.
                                    </p>
                                </div>

                                {/* Perforated Perak -> Melaka Route Ticket Stub */}
                                <div
                                    style={{ transform: 'rotate(0.7deg)' }}
                                    className="flex flex-col sm:flex-row rounded-xl border-2 border-[#080B0F] bg-[#080B0F] text-snow overflow-hidden shadow-[5px_5px_0px_#00A19C] hover:rotate-0 transition-transform duration-300"
                                >
                                    <div className="flex-1 px-4 py-3.5 flex items-center justify-between gap-4">
                                        <div>
                                            <div className="font-mono text-[9px] text-slate-400 uppercase">Origin</div>
                                            <div className="font-display text-lg font-extrabold tracking-tight text-snow">
                                                PERAK
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-petronas-bright font-mono text-xs">
                                            <span className="h-[1.5px] w-6 sm:w-10 bg-petronas-bright/50" />
                                            <MapPin size={14} />
                                            <span className="h-[1.5px] w-6 sm:w-10 bg-petronas-bright/50" />
                                        </div>

                                        <div className="text-right">
                                            <div className="font-mono text-[9px] text-petronas-bright uppercase">Base</div>
                                            <div className="font-display text-lg font-extrabold tracking-tight text-snow">
                                                MELAKA
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-dashed border-snow/25 bg-[#121820] px-4 py-3 flex sm:flex-col items-center justify-between sm:justify-center gap-1 shrink-0">
                                        <span className="font-mono text-[9px] text-slate-400 uppercase">CAMPUS</span>
                                        <span className="font-mono text-xs font-bold text-[#FDE047]">UTeM</span>
                                    </div>
                                </div>

                                {/* Lined Index Card (Fast Scannable Snapshot) */}
                                <div className="rounded-xl border-2 border-[#080B0F] bg-[#FFFDF7] p-4 shadow-[4px_4px_0px_rgba(8,11,15,0.16)]">
                                    <dl className="divide-y divide-[#080B0F]/12">
                                        {indexFacts.map((fact) => (
                                            <div
                                                key={fact.label}
                                                className="py-2 first:pt-0.5 last:pb-0.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                                            >
                                                <dt className="font-mono text-[10px] font-bold tracking-wider text-[#007A76]">
                                                    {fact.label}
                                                </dt>
                                                <dd className="font-semibold text-[#080B0F] sm:text-right">
                                                    {fact.value}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>

                                {/* Quick Page Links */}
                                <div className="flex flex-wrap items-center gap-3 pt-1">
                                    <Link
                                        to="/projects"
                                        className="inline-flex items-center gap-1.5 rounded-full bg-[#080B0F] text-snow px-4 py-2 text-xs font-mono font-semibold shadow-[3px_3px_0px_#00A19C] hover:-translate-y-0.5 transition-transform"
                                    >
                                        See project folders <ArrowUpRight size={14} />
                                    </Link>
                                    <Link
                                        to="/education"
                                        className="inline-flex items-center gap-1.5 rounded-full bg-white border-2 border-[#080B0F] text-[#080B0F] px-4 py-2 text-xs font-mono font-bold hover:bg-[#FEF08A] transition-colors"
                                    >
                                        Journey map <ArrowUpRight size={14} />
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: INTERACTIVE 3D FLIP PROFILE CARD PINNED TO DESK */}
                            <div className="md:col-span-5 flex flex-col items-center">
                                <div className="relative">
                                    {/* Decorative Top Washi Tape Above Card */}
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            backgroundColor: 'rgba(245, 158, 11, 0.5)',
                                            transform: 'translateX(-50%) rotate(3deg)',
                                        }}
                                        className="pointer-events-none absolute -top-3 left-1/2 z-20 w-24 h-6 border border-[#080B0F]/15"
                                    />
                                    <FlipProfileCard variant="detailed" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================================================
          SPREAD 2: HOW I WORK — PINNED STICKY NOTE BOARD (Zero Paragraphs)
      ================================================================ */}
            <section ref={habitsRef} className="layer-slate scroll-mt-16">
                <div className="max-w-5xl mx-auto px-6 py-14 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div className="space-y-1.5">
                            <div className="section-label">01 / Sticky notes</div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-snow">
                                Four rules pinned to my desk
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={shuffleNotes}
                            className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-snow/20 bg-carbon px-3.5 py-1.5 text-xs font-mono font-semibold text-petronas-bright hover:border-petronas-bright hover:bg-petronas hover:text-ink transition-colors cursor-pointer"
                        >
                            <Shuffle size={12} /> Shuffle notes
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                        {habitNotes.map((note) => {
                            const Icon = note.icon;
                            const angle = noteTilts[note.id] ?? note.baseTilt;

                            return (
                                <article
                                    key={note.id}
                                    style={{
                                        backgroundColor: note.bg,
                                        transform: `rotate(${angle}deg)`,
                                    }}
                                    className="relative rounded-sm border-2 border-[#080B0F] text-[#080B0F] p-5 pt-6 flex flex-col justify-between gap-5 shadow-[6px_7px_0px_rgba(0,0,0,0.55)] hover:shadow-[10px_12px_0px_rgba(0,210,190,0.4)] hover:!rotate-0 hover:-translate-y-1.5 hover:z-10 transition-all duration-300"
                                >
                                    {/* Top Masking Tape */}
                                    <span
                                        aria-hidden="true"
                                        style={{ backgroundColor: note.tape }}
                                        className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 border border-[#080B0F]/15"
                                    />

                                    <div className="flex items-center justify-between">
                                        <span className="w-8 h-8 rounded-lg bg-[#080B0F] text-petronas-bright grid place-items-center">
                                            <Icon size={15} />
                                        </span>
                                        <span className="font-mono text-xs font-extrabold text-[#080B0F]/55">
                                            {note.num}
                                        </span>
                                    </div>

                                    <div className="space-y-1.5">
                                        <h3 className="font-serif-editorial text-2xl text-[#080B0F] leading-none">
                                            {note.title}
                                        </h3>
                                        <p className="text-xs font-medium text-[#1E293B] leading-relaxed">
                                            {note.line}
                                        </p>
                                    </div>

                                    <div className="pt-2.5 border-t border-dashed border-[#080B0F]/25 font-mono text-[10px] font-extrabold tracking-wider text-[#080B0F]/75">
                                        {note.tag}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================================================================
          SPREAD 3: TAEKWONDO POLAROID SCRAPBOOK (Poomsae, Varsity 25, SUKIPT 26)
      ================================================================ */}
            <section ref={scrapbookRef} className="layer-carbon scroll-mt-16">
                <div className="max-w-5xl mx-auto px-6 py-14">
                    <TaekwondoScrapbook />
                </div>
            </section>

            {/* ================================================================
          SPREAD 4: OFF-CLOCK CREDENTIAL PASSES (Compact Scrapbook Clippings)
      ================================================================ */}
            <section ref={passesRef} className="layer-slate scroll-mt-16">
                <div className="max-w-5xl mx-auto px-6 py-14 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                        <div className="space-y-1.5">
                            <div className="section-label">03 / Off-clock passes</div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-snow">
                                Away from the keyboard
                            </h2>
                        </div>
                        <Link
                            to="/media"
                            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-petronas-bright hover:text-snow transition-colors"
                        >
                            Open visual gallery <ArrowUpRight size={14} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {deskPasses.map((pass) => {
                            const Icon = pass.icon;
                            return (
                                <article
                                    key={pass.title}
                                    style={{ transform: `rotate(${pass.tilt})` }}
                                    className="relative rounded-2xl border-2 border-[#080B0F] bg-[#FAFBFD] text-[#080B0F] p-5 shadow-[6px_7px_0px_rgba(0,0,0,0.5)] hover:!rotate-0 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4"
                                >
                                    {/* Top Lanyard Punch Slot Detail */}
                                    <span
                                        aria-hidden="true"
                                        className="mx-auto -mt-1 w-10 h-1.5 rounded-full bg-[#CBD5E1] border border-[#080B0F]/30"
                                    />

                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            style={{ backgroundColor: pass.badgeBg }}
                                            className="rounded-full border border-[#080B0F] px-2.5 py-0.5 font-mono text-[10px] font-extrabold text-[#080B0F]"
                                        >
                                            {pass.badge}
                                        </span>
                                        <Icon size={16} className="text-[#080B0F]/70" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-display text-lg font-extrabold text-[#080B0F] leading-snug">
                                            {pass.title}
                                        </h3>
                                        <p className="font-mono text-[11px] font-semibold text-[#007A76]">
                                            {pass.meta}
                                        </p>
                                    </div>

                                    <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-dashed border-[#080B0F]/20">
                                        {pass.note}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}