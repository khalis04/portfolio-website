import { useState } from 'react';

const DEV_IMG = '/images/profile.jpg';
const TAEKWONDO_IMG = '/images/taekwondo.png';

/* Authentic UNO Bold Italic Corner Index with Black Stroke & Hard Drop Shadow */
function UnoCornerNumber({ value }) {
    return (
        <svg
            viewBox="0 0 56 44"
            className="w-11 h-9 select-none overflow-visible"
            aria-hidden="true"
        >
            {/* Hard Offset Black Drop Shadow */}
            <text
                x="6"
                y="35"
                fill="#080B0F"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontStyle="italic"
                fontSize="31"
                letterSpacing="-1.5"
            >
                {value}
            </text>
            {/* White Fill + Thick Black UNO Outline */}
            <text
                x="3.5"
                y="32"
                fill="#FFFFFF"
                stroke="#080B0F"
                strokeWidth="5.5"
                strokeLinejoin="round"
                paintOrder="stroke"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontStyle="italic"
                fontSize="31"
                letterSpacing="-1.5"
            >
                {value}
            </text>
        </svg>
    );
}

/* Classic UNO Reverse Double-Arrow Badge */
function UnoReverseBadge({ label }) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#080B0F]/85 border-2 border-white px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-[2px_3px_0px_rgba(8,11,15,0.55)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" aria-hidden="true">
                <path
                    d="M7 7h10l-2.5-2.5M17 17H7l2.5 2.5"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span>{label}</span>
        </span>
    );
}

export default function FlipProfileCard({ variant = 'compact' }) {
    const [flipped, setFlipped] = useState(false);
    const [devImgError, setDevImgError] = useState(false);
    const [tkdImgError, setTkdImgError] = useState(false);

    const toggleFlip = () => setFlipped((prev) => !prev);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFlip();
        }
    };

    const isDetailed = variant === 'detailed';

    return (
        <div className="w-[292px] sm:w-[308px] max-w-full mx-auto select-none shrink-0">
            <div
                role="button"
                tabIndex={0}
                onClick={toggleFlip}
                onKeyDown={handleKeyDown}
                aria-pressed={flipped}
                aria-label={
                    flipped
                        ? 'Showing Taekwondo UNO card. Click to flip back to Developer card.'
                        : 'Showing Developer UNO card. Click to flip to Taekwondo card.'
                }
                className="card-perspective group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petronas-bright rounded-[24px]"
            >
                <div
                    className={`card-flip-inner relative w-full ${isDetailed ? 'h-[462px]' : 'h-[438px]'
                        } ${flipped ? 'is-flipped' : ''}`}
                >
                    {/* ==============================================================
              FRONT FACE: DEVELOPER UNO CARD (PETRONAS TEAL)
          ============================================================== */}
                    <div className="card-face absolute inset-0 rounded-[24px] bg-white p-[10px] border-2 border-[#080B0F] shadow-[0_24px_50px_-16px_rgba(0,0,0,0.8)]">
                        <div className="relative w-full h-full rounded-[15px] overflow-hidden border-2 border-[#080B0F] bg-gradient-to-br from-[#00B8B0] via-[#009993] to-[#00736F] flex flex-col">
                            {/* Subtle Radial Print Sheen */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.22), transparent 55%)',
                                }}
                            />

                            {/* Iconic Tilted UNO Center Oval */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 w-[238px] h-[330px] rounded-[50%] rotate-[-25deg] border-[7px] border-white bg-gradient-to-b from-[#1A2B33] via-[#111D24] to-[#0B1217] shadow-[-5px_7px_0px_rgba(8,11,15,0.32)]"
                            />

                            {/* Top Corner Index (01) + UNO Reverse Flip Hint */}
                            <div className="relative z-20 flex items-start justify-between px-2.5 pt-2">
                                <UnoCornerNumber value="01" />
                                <div className="pt-1 pr-0.5">
                                    <UnoReverseBadge label="TKD" />
                                </div>
                            </div>

                            {/* Cutout Portrait Framed Inside the Tilted Oval */}
                            <div className="relative z-10 flex-1 flex items-end justify-center overflow-hidden -mt-4">
                                {!devImgError ? (
                                    <img
                                        src={DEV_IMG}
                                        alt="Muhammad Khalis Fikri — Software Developer"
                                        onError={() => setDevImgError(true)}
                                        className="h-[96%] w-full object-contain object-bottom scale-[1.06] origin-bottom drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:scale-[1.09]"
                                    />
                                ) : (
                                    <p className="my-auto px-6 text-center text-xs font-mono text-white/85">
                                        Add cutout to /public/images/profile.jpg
                                    </p>
                                )}
                            </div>

                            {/* Full-Width UNO Bottom Nameplate & Role Specs */}
                            <div className="relative z-20 bg-[#0A0E14]/95 border-t-[3px] border-white px-4 py-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#00D2BE]" />
                                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#00D2BE]">
                                        Developer • FTMK UTeM
                                    </span>
                                </div>

                                <h3 className="font-sans text-[17px] font-black italic tracking-tight text-white leading-tight mt-0.5">
                                    {isDetailed ? 'Muhammad Khalis Fikri' : 'Khalis Fikri'}
                                </h3>

                                <div className="mt-2 pt-2 border-t border-white/15 space-y-1.5 text-[11px]">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-mono text-[10px] text-slate-400">Builds</span>
                                        <span className="font-semibold text-white">Web &amp; Android Apps</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-mono text-[10px] text-slate-400">Stack</span>
                                        <span className="font-semibold text-white">Java, React, Android Studio</span>
                                    </div>
                                    {isDetailed && (
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-[10px] text-slate-400">Base</span>
                                            <span className="font-semibold text-white">Melaka / Perak</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==============================================================
              BACK FACE: TAEKWONDO UNO CARD (CLASSIC UNO RED)
          ============================================================== */}
                    <div className="card-face card-face-back absolute inset-0 rounded-[24px] bg-white p-[10px] border-2 border-[#080B0F] shadow-[0_24px_50px_-16px_rgba(0,0,0,0.8)]">
                        <div className="relative w-full h-full rounded-[15px] overflow-hidden border-2 border-[#080B0F] bg-gradient-to-br from-[#EE3422] via-[#D72600] to-[#A31900] flex flex-col">
                            {/* Subtle Radial Print Sheen */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0"
                                style={{
                                    background:
                                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.22), transparent 55%)',
                                }}
                            />

                            {/* Iconic Tilted UNO Center Oval */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 w-[238px] h-[330px] rounded-[50%] rotate-[-25deg] border-[7px] border-white bg-gradient-to-b from-[#251517] via-[#170D0F] to-[#0D0809] shadow-[-5px_7px_0px_rgba(8,11,15,0.35)]"
                            />

                            {/* Top Corner Index (02) + UNO Reverse Flip Hint */}
                            <div className="relative z-20 flex items-start justify-between px-2.5 pt-2">
                                <UnoCornerNumber value="02" />
                                <div className="pt-1 pr-0.5">
                                    <UnoReverseBadge label="DEV" />
                                </div>
                            </div>

                            {/* Taekwondo Cutout Portrait Framed Inside the Tilted Oval */}
                            <div className="relative z-10 flex-1 flex items-end justify-center overflow-hidden -mt-4">
                                {!tkdImgError ? (
                                    <img
                                        src={TAEKWONDO_IMG}
                                        alt="Muhammad Khalis Fikri — Taekwondo Coach & Athlete"
                                        onError={() => setTkdImgError(true)}
                                        className="h-[96%] w-full object-contain object-bottom scale-[1.06] origin-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out group-hover:scale-[1.09]"
                                    />
                                ) : (
                                    <div className="my-auto px-6 text-center space-y-1">
                                        <p className="text-xs font-bold text-white">Taekwondo Portrait</p>
                                        <p className="text-[10px] font-mono text-amber-200">
                                            /public/images/taekwondo.png
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Full-Width UNO Bottom Nameplate & Taekwondo Specs */}
                            <div className="relative z-20 bg-[#0A0E14]/95 border-t-[3px] border-white px-4 py-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#FDE047]" />
                                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#FDE047]">
                                        Coach &amp; Varsity Athlete
                                    </span>
                                </div>

                                <h3 className="font-sans text-[17px] font-black italic tracking-tight text-white leading-tight mt-0.5">
                                    Coach Khalis
                                </h3>

                                <div className="mt-2 pt-2 border-t border-white/15 space-y-1.5 text-[11px]">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-mono text-[10px] text-slate-400">Club</span>
                                        <span className="font-semibold text-white">KTJ • Jasin</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-mono text-[10px] text-slate-400">Team</span>
                                        <span className="font-semibold text-white">UTeM • SUKIPT 26</span>
                                    </div>
                                    {isDetailed && (
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-[10px] text-slate-400">Events</span>
                                            <span className="font-semibold text-white">Kyorugi &amp; Poomsae</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Interaction Hint */}
            <p className="mt-3 text-center font-mono text-[11px] text-slate-400">
                Click card to reverse role
            </p>
        </div>
    );
}