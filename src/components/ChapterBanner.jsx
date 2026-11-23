import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ChapterBanner({
    sectorNumber = '01',
    totalSectors = '06',
    sectorTag = 'Portfolio',
    title,
    description,
    pills = [],
    topRight = null,
}) {
    const [poppedSticker, setPoppedSticker] = useState(null);

    const triggerPop = (id) => {
        setPoppedSticker(id);
        setTimeout(() => setPoppedSticker(null), 500);
    };

    return (
        <div className="w-full px-3 sm:px-6 pt-6 pb-2">
            <div className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-gradient-to-br from-[#00CBB8] via-[#00A89E] to-[#00867F] text-[#080B0F] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)] border border-snow/20">
                {/* Soft Studio Highlight */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(650px circle at 18% 18%, rgba(255,255,255,0.22), transparent 60%)',
                    }}
                />

                {/* Giant Outlined Sector Watermark */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 420 300"
                    className="pointer-events-none select-none absolute -right-6 -bottom-10 w-[300px] sm:w-[440px] lg:w-[540px] h-auto opacity-30"
                >
                    <text
                        x="16"
                        y="258"
                        fill="none"
                        stroke="#080B0F"
                        strokeWidth="2.2"
                        fontFamily="Inter, sans-serif"
                        fontWeight="800"
                        fontSize="290"
                        letterSpacing="-14"
                    >
                        {sectorNumber}
                    </text>
                </svg>

                {/* ================= FLOATING DIE-CUT STICKERS ================= */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
                    {/* STICKER 1: F1 CAR PETRONAS 2026 (Top-Down Compact 2026 Spec) */}
                    <button
                        type="button"
                        onClick={() => triggerPop('f1car')}
                        title="Mercedes-AMG Petronas F1 — 2026 Spec"
                        style={{ transform: 'rotate(-11deg)' }}
                        className={`sticker-pop pointer-events-auto cursor-pointer absolute top-6 right-5 lg:right-10 w-40 lg:w-48 ${poppedSticker === 'f1car' ? 'translate-x-2 -translate-y-2 scale-110' : ''
                            }`}
                    >
                        <svg viewBox="0 0 210 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="petronas26Body" x1="25" y1="54" x2="188" y2="54" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#111827" />
                                    <stop offset="46%" stopColor="#1E293B" />
                                    <stop offset="72%" stopColor="#CBD5E1" />
                                    <stop offset="100%" stopColor="#F8FAFC" />
                                </linearGradient>
                            </defs>

                            {/* White Die-Cut Vinyl Backing */}
                            <g fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="14" strokeLinejoin="round">
                                <rect x="16" y="24" width="16" height="60" rx="3" />
                                <rect x="36" y="13" width="30" height="17" rx="4" />
                                <rect x="36" y="78" width="30" height="17" rx="4" />
                                <path d="M30 46 L52 38 C68 30 92 29 116 34 L168 46 L186 50 C191 52 191 56 186 58 L168 62 L116 74 C92 79 68 78 52 70 L30 62 Z" />
                                <rect x="130" y="15" width="27" height="15" rx="4" />
                                <rect x="130" y="78" width="27" height="15" rx="4" />
                                <path d="M168 20 L186 24 L192 54 L186 84 L168 88 L164 62 L164 46 Z" />
                            </g>

                            {/* Rear Suspension Wishbones */}
                            <path
                                d="M50 30 L64 41 M58 30 L70 40 M50 78 L64 67 M58 78 L70 68"
                                stroke="#080B0F"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* Front Suspension Wishbones */}
                            <path
                                d="M142 30 L150 45 M148 30 L156 46 M142 78 L150 63 M148 78 L156 62"
                                stroke="#080B0F"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                            />

                            {/* Rear Active-Aero Wing (2026) */}
                            <rect x="16" y="24" width="16" height="60" rx="3" fill="#111827" stroke="#080B0F" strokeWidth="3" />
                            <rect x="24" y="27" width="4.5" height="54" rx="1.5" fill="#00D2BE" />

                            {/* Rear Slick Tires */}
                            <rect x="36" y="13" width="30" height="17" rx="4" fill="#0B0E12" stroke="#080B0F" strokeWidth="3" />
                            <rect x="36" y="78" width="30" height="17" rx="4" fill="#0B0E12" stroke="#080B0F" strokeWidth="3" />
                            <line x1="42" y1="16.5" x2="60" y2="16.5" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round" />
                            <line x1="42" y1="91.5" x2="60" y2="91.5" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round" />

                            {/* Floor / Underbody */}
                            <path
                                d="M44 35 L118 33 L126 42 L126 66 L118 75 L44 73 Z"
                                fill="#090C10"
                                stroke="#080B0F"
                                strokeWidth="2.5"
                            />

                            {/* Sculpted 2026 Chassis & Tapered Nose */}
                            <path
                                d="M32 46 L52 40 C68 33 90 32 114 37 L134 44 L184 49 C190 50 192 52 192 54 C192 56 190 58 184 59 L134 64 L114 71 C90 76 68 75 52 68 L32 62 Z"
                                fill="url(#petronas26Body)"
                                stroke="#080B0F"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />

                            {/* Signature Petronas Teal Flow Stripes */}
                            <path d="M46 43 C72 36 96 36 122 44" stroke="#00D2BE" strokeWidth="3.2" strokeLinecap="round" />
                            <path d="M46 65 C72 72 96 72 122 64" stroke="#00D2BE" strokeWidth="3.2" strokeLinecap="round" />

                            {/* Engine Cover Spine + '26' Badge */}
                            <line x1="42" y1="54" x2="82" y2="54" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round" />

                            {/* Cockpit Tub */}
                            <ellipse cx="101" cy="54" rx="14" ry="7" fill="#080B0F" stroke="#334155" strokeWidth="1.5" />

                            {/* Driver Helmet inside Cockpit */}
                            <circle cx="96" cy="54" r="5" fill="#00D2BE" stroke="#FFFFFF" strokeWidth="1.2" />
                            <path d="M98.5 50.5 C100.5 52 100.5 56 98.5 57.5" stroke="#080B0F" strokeWidth="2" strokeLinecap="round" />

                            {/* Carbon Halo */}
                            <path d="M95 46 C113 46 113 62 95 62" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                            <line x1="109" y1="54" x2="119" y2="54" stroke="#080B0F" strokeWidth="2.8" strokeLinecap="round" />

                            {/* Nose Center Accent */}
                            <line x1="136" y1="54" x2="176" y2="54" stroke="#00A19C" strokeWidth="2" strokeLinecap="round" />

                            {/* Front Slick Tires */}
                            <rect x="130" y="15" width="27" height="15" rx="4" fill="#0B0E12" stroke="#080B0F" strokeWidth="3" />
                            <rect x="130" y="78" width="27" height="15" rx="4" fill="#0B0E12" stroke="#080B0F" strokeWidth="3" />
                            <line x1="136" y1="18.2" x2="151" y2="18.2" stroke="#00D2BE" strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="136" y1="89.8" x2="151" y2="89.8" stroke="#00D2BE" strokeWidth="1.8" strokeLinecap="round" />

                            {/* 2026 Swept Multi-Element Front Wing */}
                            <path
                                d="M169 20 L183 24 L191 49 L191 59 L183 84 L169 88 L164 81 L176 58 L176 50 L164 27 Z"
                                fill="#111827"
                                stroke="#080B0F"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M179 25 L186 50 L186 58 L179 83"
                                stroke="#00D2BE"
                                strokeWidth="2.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

                    {/* STICKER 2: ANDROID LOGO */}
                    <button
                        type="button"
                        onClick={() => triggerPop('android')}
                        title="Android Studio & Mobile Dev"
                        style={{ transform: 'rotate(-7deg)' }}
                        className={`sticker-pop pointer-events-auto cursor-pointer absolute bottom-20 right-[27%] lg:right-[29%] w-20 lg:w-24 ${poppedSticker === 'android' ? '-translate-y-3 scale-110' : ''
                            }`}
                    >
                        <svg viewBox="0 0 120 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* White Die-Cut Backing */}
                            <g stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="38" y1="24" x2="29" y2="10" />
                                <line x1="82" y1="24" x2="91" y2="10" />
                                <path d="M20 66 C20 38 38 20 60 20 C82 20 100 38 100 66 Z" fill="#FFFFFF" />
                            </g>
                            {/* Antennae */}
                            <line x1="38" y1="24" x2="29" y2="10" stroke="#080B0F" strokeWidth="4" strokeLinecap="round" />
                            <line x1="82" y1="24" x2="91" y2="10" stroke="#080B0F" strokeWidth="4" strokeLinecap="round" />
                            {/* Green Head */}
                            <path
                                d="M20 66 C20 38 38 20 60 20 C82 20 100 38 100 66 Z"
                                fill="#3DDC84"
                                stroke="#080B0F"
                                strokeWidth="3.8"
                                strokeLinejoin="round"
                            />
                            {/* Eyes */}
                            <circle cx="43" cy="46" r="4.5" fill="#080B0F" />
                            <circle cx="77" cy="46" r="4.5" fill="#080B0F" />
                        </svg>
                    </button>

                    {/* STICKER 3: F1 RACING HELMET (Petronas Edition) */}
                    <button
                        type="button"
                        onClick={() => triggerPop('helmet')}
                        title="F1 Driver Helmet — Petronas Livery"
                        style={{ transform: 'rotate(9deg)' }}
                        className={`sticker-pop pointer-events-auto cursor-pointer absolute bottom-7 right-6 lg:right-12 w-24 lg:w-28 ${poppedSticker === 'helmet' ? '-translate-y-2 scale-115' : ''
                            }`}
                    >
                        <svg viewBox="0 0 132 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="helmetVisor" x1="20" y1="42" x2="82" y2="66" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#00D2BE" />
                                    <stop offset="45%" stopColor="#0F172A" />
                                    <stop offset="100%" stopColor="#080B0F" />
                                </linearGradient>
                            </defs>

                            {/* White Die-Cut Backing */}
                            <path
                                d="M24 68 C22 36 46 14 76 16 C103 18 118 40 116 68 C114 88 101 101 80 104 L30 98 C20 96 16 86 18 76 L24 68 Z"
                                fill="#FFFFFF"
                                stroke="#FFFFFF"
                                strokeWidth="14"
                                strokeLinejoin="round"
                            />

                            {/* Main Silver/White Helmet Shell */}
                            <path
                                d="M24 68 C22 36 46 14 76 16 C103 18 118 40 116 68 C114 88 101 101 80 104 L30 98 C20 96 16 86 18 76 L24 68 Z"
                                fill="#F8FAFC"
                                stroke="#080B0F"
                                strokeWidth="3.8"
                                strokeLinejoin="round"
                            />

                            {/* Carbon Black Lower Chin & Rear Aero Base */}
                            <path
                                d="M19 79 L62 82 L88 66 L115 68 C113 88 100 101 80 104 L30 98 C20 96 16 87 19 79 Z"
                                fill="#111827"
                                stroke="#080B0F"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />

                            {/* Bold Petronas Teal Speed Stripes */}
                            <path
                                d="M44 26 C64 20 88 26 105 44 L96 54 C80 39 62 34 42 36 Z"
                                fill="#00D2BE"
                                stroke="#080B0F"
                                strokeWidth="2.8"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M66 78 L98 60 L114 62 L112 72 L78 88 Z"
                                fill="#00D2BE"
                                stroke="#080B0F"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                            />

                            {/* Rear Aero Spoiler Lip */}
                            <path
                                d="M107 40 L118 35 L117 50"
                                stroke="#080B0F"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Smoked Teal-Tint Visor */}
                            <path
                                d="M23 47 C42 43 65 44 82 52 L77 69 C58 72 38 71 21 67 C21 59 22 53 23 47 Z"
                                fill="url(#helmetVisor)"
                                stroke="#080B0F"
                                strokeWidth="3.5"
                                strokeLinejoin="round"
                            />

                            {/* Visor Top Zylon Strip + Specular Glint */}
                            <path d="M27 51 C44 48 61 49 75 54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
                            <circle cx="75" cy="59" r="3" fill="#FDE047" stroke="#080B0F" strokeWidth="1.8" />

                            {/* Chin Air Intake Vents */}
                            <line x1="28" y1="88" x2="40" y2="89" stroke="#00D2BE" strokeWidth="2.6" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* ================= MAIN FOREGROUND CONTENT ================= */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-10 sm:py-14 space-y-7">
                    {/* Top Row: Dark Sector Pill + Optional Right Control */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2.5 rounded-full bg-[#0A0D10] px-4 py-1.5 text-[11px] font-mono text-slate-200 shadow-md">
                            <span className="h-2 w-2 rounded-full bg-[#FDE047] motion-safe:animate-pulse" />
                            <span>
                                Sector {sectorNumber} of {totalSectors}{' '}
                                <span className="text-slate-500 mx-1">·</span>{' '}
                                <strong className="text-petronas-bright">{sectorTag}</strong>
                            </span>
                        </div>

                        {topRight && <div>{topRight}</div>}
                    </div>

                    {/* Mixed Bold Sans + Editorial Italic Serif Headline */}
                    <div className="max-w-xl space-y-5">
                        <h1 className="text-[42px] sm:text-6xl lg:text-[68px] font-extrabold text-[#080B0F] leading-[0.97] tracking-[-0.04em]">
                            {title}
                        </h1>

                        {description && (
                            <p className="text-sm sm:text-base font-medium text-[#080B0F]/80 leading-relaxed max-w-md">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Neo-Brutalist Hard-Shadow Numbered Chapter Pills */}
                    {pills.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2.5 pt-2">
                            {pills.map((pill) => {
                                const pillClasses = `inline-flex items-center gap-2 rounded-full border-2 border-[#080B0F] pl-1.5 pr-4 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer shadow-[3px_3px_0px_#080B0F] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#080B0F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${pill.active
                                        ? 'bg-snow text-[#080B0F]'
                                        : 'bg-[#00B8AA]/65 hover:bg-snow/90 text-[#080B0F]'
                                    }`;

                                const inner = (
                                    <>
                                        <span className="inline-flex items-center justify-center rounded-full bg-[#080B0F] text-[#FDE047] font-mono text-[10px] font-bold px-2 py-0.5">
                                            {pill.num}
                                        </span>
                                        <span>{pill.label}</span>
                                    </>
                                );

                                if (pill.to) {
                                    return (
                                        <Link key={pill.num} to={pill.to} className={pillClasses}>
                                            {inner}
                                        </Link>
                                    );
                                }

                                return (
                                    <button
                                        key={pill.num}
                                        type="button"
                                        onClick={pill.onClick}
                                        className={pillClasses}
                                    >
                                        {inner}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}