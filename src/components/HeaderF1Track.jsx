import { useState } from 'react';

const TRACK_PATH =
    'M -120 78 C 120 78, 225 36, 430 36 C 625 36, 715 92, 930 92 C 1135 92, 1235 40, 1560 40';

export default function HeaderF1Track({ dark = false }) {
    const [paused, setPaused] = useState(false);

    return (
        <div
            onClick={() => setPaused((p) => !p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setPaused((p) => !p);
                }
            }}
            title={paused ? 'Click to resume F1 lap' : 'Click to pause F1 lap'}
            aria-label={paused ? 'Resume Formula 1 car animation' : 'Pause Formula 1 car animation'}
            className="relative w-full h-[96px] sm:h-[118px] overflow-hidden cursor-pointer select-none group"
        >
            {/* Subtle Telemetry Label in Bottom-Left Corner */}
            <div
                className={`pointer-events-none absolute bottom-2.5 left-6 sm:left-10 z-20 inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-widest uppercase transition-opacity ${dark ? 'text-slate-400' : 'text-[#475569]'
                    }`}
            >
                <span
                    className={`h-1.5 w-1.5 rounded-full ${paused ? 'bg-amber-400' : 'bg-[#00D2BE] motion-safe:animate-pulse'
                        }`}
                />
                <span>{paused ? 'SC // PAUSED' : 'W17 // TRACK LIVE'}</span>
            </div>

            <svg
                viewBox="0 0 1440 128"
                preserveAspectRatio="xMidYMid slice"
                className="block w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <path id="homeF1TrackPath" d={TRACK_PATH} />

                    {/* Petronas 2026 Chassis Gradient */}
                    <linearGradient id="headerCarBody" x1="-26" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#0F172A" />
                        <stop offset="48%" stopColor="#1E293B" />
                        <stop offset="76%" stopColor="#CBD5E1" />
                        <stop offset="100%" stopColor="#F8FAFC" />
                    </linearGradient>

                    {/* Slipstream Aero Trail Gradient */}
                    <linearGradient id="aeroTrail" x1="-92" y1="0" x2="-34" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#00D2BE" stopOpacity="0" />
                        <stop offset="100%" stopColor="#00D2BE" stopOpacity="0.85" />
                    </linearGradient>
                </defs>

                {/* ================= 1. TRACK RUNOFF & KERBS ================= */}
                {/* Outer Curb Border Shadow */}
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke={dark ? 'rgba(0, 210, 190, 0.14)' : 'rgba(8, 11, 15, 0.10)'}
                    strokeWidth="48"
                    strokeLinecap="round"
                />

                {/* Petronas Teal & White Apex Kerbs along the Chicane */}
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke="#00A19C"
                    strokeWidth="42"
                    strokeDasharray="14 14"
                />
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke={dark ? '#E2E8F0' : '#FFFFFF'}
                    strokeWidth="42"
                    strokeDasharray="14 14"
                    strokeDashoffset="14"
                />

                {/* Crisp Track Limit Edge Lines */}
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke={dark ? '#080B0F' : '#080B0F'}
                    strokeWidth="37"
                />

                {/* Main Dark Carbon Asphalt Surface */}
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke={dark ? '#141B24' : '#18202A'}
                    strokeWidth="33"
                />

                {/* Subtle Inner Track Limit Hairlines */}
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="29"
                />
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke={dark ? '#141B24' : '#18202A'}
                    strokeWidth="27"
                />

                {/* Optimal Petronas Racing Line */}
                <use
                    href="#homeF1TrackPath"
                    fill="none"
                    stroke="#00D2BE"
                    strokeWidth="1.6"
                    strokeDasharray="10 14"
                    opacity="0.55"
                />

                {/* ================= 2. CHECKERED START / FINISH STRIP ================= */}
                <g transform="translate(155, 72) rotate(-13)" opacity="0.9">
                    <rect x="-5" y="-14" width="10" height="28" fill="#080B0F" />
                    {[0, 1, 2, 3, 4, 5].map((row) => (
                        <g key={row}>
                            <rect
                                x={row % 2 === 0 ? -4 : 0}
                                y={-13 + row * 4.4}
                                width="4"
                                height="4.4"
                                fill="#FFFFFF"
                            />
                        </g>
                    ))}
                </g>

                {/* Sector Markers Along Track */}
                <g
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="9"
                    fontWeight="700"
                    fill={dark ? 'rgba(148,163,184,0.65)' : 'rgba(71,85,105,0.75)'}
                >
                    <text x="415" y="13">S1</text>
                    <text x="920" y="121">S2</text>
                    <text x="1310" y="17">S3</text>
                </g>

                {/* ================= 3. ANIMATED 2026 PETRONAS F1 CAR ================= */}
                <g
                    transform={paused ? 'translate(690, 68) rotate(13)' : undefined}
                >
                    {!paused && (
                        <animateMotion
                            dur="5.4s"
                            repeatCount="indefinite"
                            rotate="auto"
                            calcMode="spline"
                            keyPoints="0;1"
                            keyTimes="0;1"
                            keySplines="0.35 0.05 0.65 0.95"
                        >
                            <mpath href="#homeF1TrackPath" />
                        </animateMotion>
                    )}

                    {/* High-Speed Teal Slipstream Trails */}
                    <line x1="-35" y1="-9" x2="-92" y2="-9" stroke="url(#aeroTrail)" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="-35" y1="9" x2="-92" y2="9" stroke="url(#aeroTrail)" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="-35" y1="0" x2="-74" y2="0" stroke="url(#aeroTrail)" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />

                    {/* Car Drop Shadow on Asphalt */}
                    <ellipse cx="0" cy="2" rx="34" ry="13" fill="#000000" opacity="0.45" />

                    {/* Rear & Front Suspension Wishbones */}
                    <path
                        d="M -19 -8 L -14 -4 M -16 -8 L -11 -4 M -19 8 L -14 4 M -16 8 L -11 4"
                        stroke="#334155"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 16 -8 L 19 -3 M 19 -8 L 22 -3 M 16 8 L 19 3 M 19 8 L 22 3"
                        stroke="#334155"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                    />

                    {/* Rear Active-Aero Wing */}
                    <rect x="-34" y="-11" width="6.5" height="22" rx="1.5" fill="#0B0F15" stroke="#00D2BE" strokeWidth="0.9" />
                    <rect x="-31.5" y="-9.5" width="2" height="19" rx="0.8" fill="#00D2BE" />

                    {/* Rear Slick Tires */}
                    <rect x="-25" y="-14" width="11.5" height="6.2" rx="2" fill="#05070A" stroke="#1E293B" strokeWidth="0.9" />
                    <rect x="-25" y="7.8" width="11.5" height="6.2" rx="2" fill="#05070A" stroke="#1E293B" strokeWidth="0.9" />
                    <line x1="-22.5" y1="-12.5" x2="-16" y2="-12.5" stroke="#00D2BE" strokeWidth="1" strokeLinecap="round" />
                    <line x1="-22.5" y1="12.5" x2="-16" y2="12.5" stroke="#00D2BE" strokeWidth="1" strokeLinecap="round" />

                    {/* Carbon Underbody Floor */}
                    <path
                        d="M -21 -7.5 L 6 -8.5 L 9 -4.5 L 9 4.5 L 6 8.5 L -21 7.5 Z"
                        fill="#090C10"
                    />

                    {/* Sculpted 2026 Chassis & Tapered Nose */}
                    <path
                        d="M -27 -3.2 L -19 -5.5 C -12 -8.2, -3 -8.5, 6 -6.2 L 14 -3.6 L 31 -1.8 C 33 -1.4, 33 1.4, 31 1.8 L 14 3.6 L 6 6.2 C -3 8.5, -12 8.2, -19 5.5 L -27 3.2 Z"
                        fill="url(#headerCarBody)"
                        stroke="#080B0F"
                        strokeWidth="1.1"
                    />

                    {/* Signature Petronas Teal Flow Stripes */}
                    <path d="M -20 -4.8 C -10 -7.2, -1 -7.2, 9 -4.2" fill="none" stroke="#00D2BE" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M -20 4.8 C -10 7.2, -1 7.2, 9 4.2" fill="none" stroke="#00D2BE" strokeWidth="1.6" strokeLinecap="round" />

                    {/* Cockpit Tub & Driver Helmet */}
                    <ellipse cx="1" cy="0" rx="5.5" ry="2.8" fill="#080B0F" />
                    <circle cx="-1" cy="0" r="2.2" fill="#00D2BE" stroke="#FFFFFF" strokeWidth="0.6" />
                    <path d="M 0.2 -1.4 C 1.1 -0.6, 1.1 0.6, 0.2 1.4" fill="none" stroke="#080B0F" strokeWidth="0.9" strokeLinecap="round" />

                    {/* Carbon Halo */}
                    <path d="M -1.5 -3.1 C 5.5 -3.1, 5.5 3.1, -1.5 3.1" fill="none" stroke="#1E293B" strokeWidth="1.4" strokeLinecap="round" />
                    <line x1="4.2" y1="0" x2="8.5" y2="0" stroke="#080B0F" strokeWidth="1.3" strokeLinecap="round" />

                    {/* Nose Center Accent */}
                    <line x1="14" y1="0" x2="29" y2="0" stroke="#00A19C" strokeWidth="1" strokeLinecap="round" />

                    {/* Front Slick Tires */}
                    <rect x="12" y="-13.2" width="10.5" height="5.6" rx="1.8" fill="#05070A" stroke="#1E293B" strokeWidth="0.9" />
                    <rect x="12" y="7.6" width="10.5" height="5.6" rx="1.8" fill="#05070A" stroke="#1E293B" strokeWidth="0.9" />
                    <line x1="14.2" y1="-11.8" x2="20.2" y2="-11.8" stroke="#00D2BE" strokeWidth="0.9" strokeLinecap="round" />
                    <line x1="14.2" y1="11.8" x2="20.2" y2="11.8" stroke="#00D2BE" strokeWidth="0.9" strokeLinecap="round" />

                    {/* 2026 Swept Front Wing */}
                    <path
                        d="M 25 -12.5 L 31 -10.8 L 34.5 -1.8 L 34.5 1.8 L 31 10.8 L 25 12.5 L 23.2 9.8 L 28.5 1.6 L 28.5 -1.6 L 23.2 -9.8 Z"
                        fill="#0F172A"
                        stroke="#080B0F"
                        strokeWidth="0.9"
                    />
                    <path
                        d="M 29.5 -10.4 L 32.5 -1.6 L 32.5 1.6 L 29.5 10.4"
                        fill="none"
                        stroke="#00D2BE"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                    />
                </g>
            </svg>
        </div>
    );
}