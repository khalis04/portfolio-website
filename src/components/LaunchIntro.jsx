import { useEffect, useState } from 'react';
import { FastForward } from 'lucide-react';

const SESSION_KEY = 'khalis_portfolio_intro_seen';

export default function LaunchIntro({ alwaysShow = false }) {
    const [visible, setVisible] = useState(() => {
        if (typeof window === 'undefined') return false;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
        if (alwaysShow) return true;
        return !sessionStorage.getItem(SESSION_KEY);
    });

    // 0..5 = red gantry lights on | 6 = LIGHTS OUT + car launch | 7 = curtain split
    const [phase, setPhase] = useState(0);

    const finishIntro = () => {
        sessionStorage.setItem(SESSION_KEY, '1');
        setVisible(false);
    };

    useEffect(() => {
        if (!visible) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const timers = [
            setTimeout(() => setPhase(1), 160),
            setTimeout(() => setPhase(2), 380),
            setTimeout(() => setPhase(3), 600),
            setTimeout(() => setPhase(4), 820),
            setTimeout(() => setPhase(5), 1040),
            // Lights out + Petronas F1 car streaks across
            setTimeout(() => setPhase(6), 1380),
            // Top & bottom curtains split open as the car crosses center
            setTimeout(() => setPhase(7), 1660),
            // Unmount cleanly after curtain exit completes
            setTimeout(() => finishIntro(), 2420),
        ];

        const onKeyDown = (e) => {
            if (e.key === 'Escape' || e.key === ' ') {
                e.preventDefault();
                finishIntro();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [visible]);

    if (!visible) return null;

    const isLaunched = phase >= 6;
    const isSplitting = phase >= 7;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio launch intro"
            className="fixed inset-0 z-[100] pointer-events-auto overflow-hidden select-none"
        >
            {/* ================= TOP SPLIT CURTAIN ================= */}
            <div
                className={`absolute inset-x-0 top-0 h-1/2 bg-[#080B0F] border-b transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between ${isLaunched ? 'border-[#00D2BE]' : 'border-white/10'
                    } ${isSplitting ? '-translate-y-full' : 'translate-y-0'}`}
            >
                {/* Subtle Engineering Grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(0,210,190,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,210,190,0.06) 1px, transparent 1px)',
                        backgroundSize: '34px 34px',
                    }}
                />

                {/* Top Bar: Telemetry ID + Skip Control */}
                <div className="relative z-10 max-w-6xl w-full mx-auto px-6 sm:px-10 pt-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-slate-400">
                        <span
                            className={`h-2 w-2 rounded-full transition-colors duration-200 ${isLaunched ? 'bg-[#00D2BE]' : 'bg-red-500'
                                }`}
                        />
                        <span>KHALIS FIKRI // 2026</span>
                    </div>

                    <button
                        type="button"
                        onClick={finishIntro}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <span>Skip</span>
                        <FastForward size={12} />
                    </button>
                </div>

                {/* F1 STARTING GANTRY (5 Lights) */}
                <div className="relative z-10 flex flex-col items-center pb-7 sm:pb-9 px-6">
                    <div className="rounded-2xl bg-[#11161E] border-2 border-white/15 px-4 sm:px-6 py-3.5 shadow-[0_18px_45px_rgba(0,0,0,0.75)] flex items-center gap-3 sm:gap-4">
                        {[1, 2, 3, 4, 5].map((lightNum) => {
                            const isRedLit = phase >= lightNum && phase < 6;
                            return (
                                <div
                                    key={lightNum}
                                    className="flex flex-col items-center gap-1.5 rounded-xl bg-[#080B0F] border border-white/10 px-2 py-2"
                                >
                                    {/* Dim Upper Standby Bulb */}
                                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#181F29] border border-white/5" />
                                    {/* Active Launch Light */}
                                    <span
                                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-150 ${isRedLit
                                            ? 'bg-[#EF4444] shadow-[0_0_20px_5px_rgba(239,68,68,0.85)] border border-red-200'
                                            : isLaunched
                                                ? 'bg-[#00D2BE] shadow-[0_0_22px_5px_rgba(0,210,190,0.9)] border border-teal-100'
                                                : 'bg-[#1D2430] border border-white/10'
                                            }`}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em]">
                        {isLaunched ? (
                            <span className="text-[#00D2BE]">LIGHTS OUT // LAUNCH</span>
                        ) : (
                            <span className="text-slate-400">
                                GRID CHECK • 0{Math.min(phase, 5)} / 05
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* ================= BOTTOM SPLIT CURTAIN ================= */}
            <div
                className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#080B0F] border-t transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-between ${isLaunched ? 'border-[#00D2BE]' : 'border-white/10'
                    } ${isSplitting ? 'translate-y-full' : 'translate-y-0'}`}
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(0,210,190,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,210,190,0.06) 1px, transparent 1px)',
                        backgroundSize: '34px 34px',
                    }}
                />

                {/* Editorial Tagline Lockup */}
                <div className="relative z-10 flex flex-col items-center text-center pt-7 sm:pt-9 px-6 space-y-2.5">
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-[-0.04em] leading-none">
                        Built to work.{' '}
                        <span className="font-serif-editorial text-[#00D2BE] font-normal tracking-normal">
                            Styled
                        </span>{' '}
                        to last.
                    </h2>
                    <p className="font-mono text-[11px] sm:text-xs text-slate-400 tracking-[0.16em] uppercase">
                        Web Systems • Android Studio • UTeM TKD Visuals
                    </p>
                </div>

                {/* Bottom Progress Hairline */}
                <div className="relative z-10 max-w-6xl w-full mx-auto px-6 sm:px-10 pb-6 flex items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
                    <span>FTMK, UTeM • MELAKA</span>
                    <div className="w-32 sm:w-44 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div
                            className="h-full bg-[#00D2BE] transition-all duration-200"
                            style={{ width: `${Math.min(100, (phase / 6) * 100)}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* ================= CENTER SEAM: 2026 PETRONAS F1 CAR STREAK ================= */}
            {isLaunched && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-30"
                >
                    {/* Neon Teal Seam Flash */}
                    <div
                        className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#00D2BE] shadow-[0_0_24px_4px_rgba(0,210,190,0.8)] transition-opacity duration-500 ${isSplitting ? 'opacity-0' : 'opacity-100'
                            }`}
                    />

                    {/* Streaking 2026 Petronas F1 Car */}
                    <div className="animate-intro-car w-[220px] sm:w-[270px]">
                        <svg viewBox="0 0 280 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="introTrail" x1="0" y1="45" x2="115" y2="45" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#00D2BE" stopOpacity="0" />
                                    <stop offset="100%" stopColor="#00D2BE" stopOpacity="0.95" />
                                </linearGradient>
                                <linearGradient id="introChassis" x1="115" y1="45" x2="262" y2="45" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0F172A" />
                                    <stop offset="48%" stopColor="#1E293B" />
                                    <stop offset="76%" stopColor="#CBD5E1" />
                                    <stop offset="100%" stopColor="#FFFFFF" />
                                </linearGradient>
                            </defs>

                            {/* High-Speed Slipstream Lines */}
                            <line x1="6" y1="26" x2="118" y2="26" stroke="url(#introTrail)" strokeWidth="4" strokeLinecap="round" />
                            <line x1="20" y1="45" x2="115" y2="45" stroke="url(#introTrail)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                            <line x1="6" y1="64" x2="118" y2="64" stroke="url(#introTrail)" strokeWidth="4" strokeLinecap="round" />

                            {/* Rear Wing */}
                            <rect x="115" y="21" width="13" height="48" rx="3" fill="#0B0F15" stroke="#00D2BE" strokeWidth="2" />
                            <rect x="120" y="25" width="4" height="40" rx="1.5" fill="#00D2BE" />

                            {/* Rear Tires */}
                            <rect x="132" y="12" width="24" height="14" rx="4" fill="#05070A" stroke="#334155" strokeWidth="1.8" />
                            <rect x="132" y="64" width="24" height="14" rx="4" fill="#05070A" stroke="#334155" strokeWidth="1.8" />
                            <line x1="137" y1="15.5" x2="151" y2="15.5" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round" />
                            <line x1="137" y1="74.5" x2="151" y2="74.5" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round" />

                            {/* Chassis & Tapered Nose */}
                            <path
                                d="M 128 38 L 146 33 C 160 27, 180 26, 200 31 L 218 37 L 256 41 C 261 42, 261 48, 256 49 L 218 53 L 200 59 C 180 64, 160 63, 146 57 L 128 52 Z"
                                fill="url(#introChassis)"
                                stroke="#080B0F"
                                strokeWidth="2.2"
                            />

                            {/* Petronas Teal Livery Stripes */}
                            <path d="M 142 35 C 164 29, 184 29, 206 36" stroke="#00D2BE" strokeWidth="3.2" strokeLinecap="round" />
                            <path d="M 142 55 C 164 61, 184 61, 206 54" stroke="#00D2BE" strokeWidth="3.2" strokeLinecap="round" />

                            {/* Cockpit & Driver Helmet */}
                            <ellipse cx="187" cy="45" rx="12" ry="6" fill="#080B0F" />
                            <circle cx="183" cy="45" r="4.5" fill="#00D2BE" stroke="#FFFFFF" strokeWidth="1.2" />

                            {/* Front Tires */}
                            <rect x="210" y="14" width="22" height="12" rx="3.5" fill="#05070A" stroke="#334155" strokeWidth="1.8" />
                            <rect x="210" y="64" width="22" height="12" rx="3.5" fill="#05070A" stroke="#334155" strokeWidth="1.8" />
                            <line x1="215" y1="17" x2="227" y2="17" stroke="#00D2BE" strokeWidth="1.8" strokeLinecap="round" />
                            <line x1="215" y1="73" x2="227" y2="73" stroke="#00D2BE" strokeWidth="1.8" strokeLinecap="round" />

                            {/* 2026 Swept Front Wing */}
                            <path
                                d="M 240 16 L 254 20 L 263 41 L 263 49 L 254 70 L 240 74 L 236 68 L 249 48 L 249 42 L 236 22 Z"
                                fill="#0F172A"
                                stroke="#080B0F"
                                strokeWidth="2"
                            />
                            <path d="M 251 21 L 258 42 L 258 48 L 251 69" stroke="#00D2BE" strokeWidth="2.6" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}