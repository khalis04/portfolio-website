import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function extractSectorLabel(section, index) {
    const labelEl = section.querySelector('.section-label');
    const headingEl = section.querySelector('h2, h1');
    const raw = (labelEl?.textContent || headingEl?.textContent || `Sector ${index + 1}`)
        .replace(/^\d+\s*\/\s*/, '')
        .trim();
    return raw.length > 22 ? `${raw.slice(0, 20).trim()}…` : raw;
}

function F1CarSVG({ isMoving, speedRatio }) {
    return (
        <div className="relative flex flex-col items-center">
            {/* Subtle Teal Aero Slipstream (appears behind rear wing while moving) */}
            <div
                className="pointer-events-none absolute -top-6 flex gap-1.5 transition-opacity duration-300"
                style={{ opacity: isMoving ? Math.min(0.85, 0.25 + speedRatio * 0.6) : 0 }}
                aria-hidden="true"
            >
                <span className="w-[1.5px] h-5 rounded-full bg-gradient-to-t from-petronas-bright to-transparent animate-aero-stream" />
                <span
                    className="w-[2px] h-7 rounded-full bg-gradient-to-t from-petronas-bright/90 to-transparent animate-aero-stream"
                    style={{ animationDelay: '120ms' }}
                />
                <span
                    className="w-[1.5px] h-5 rounded-full bg-gradient-to-t from-petronas-bright to-transparent animate-aero-stream"
                    style={{ animationDelay: '240ms' }}
                />
            </div>

            {/* Slightly Compact Top-Down Mercedes-Petronas F1 Car (points down by default) */}
            <svg
                viewBox="0 0 64 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-[84px] xl:w-10 xl:h-[92px] drop-shadow-[0_10px_18px_rgba(0,0,0,0.85)]"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="f1SilverBody" x1="32" y1="16" x2="32" y2="142" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1A222C" />
                        <stop offset="32%" stopColor="#26313E" />
                        <stop offset="62%" stopColor="#BFC6D1" />
                        <stop offset="100%" stopColor="#E4E8EE" />
                    </linearGradient>
                    <linearGradient id="f1Carbon" x1="0" y1="0" x2="64" y2="148" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1E2733" />
                        <stop offset="100%" stopColor="#090C10" />
                    </linearGradient>
                    <linearGradient id="f1TealFlow" x1="32" y1="24" x2="32" y2="128" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#00A19C" />
                        <stop offset="50%" stopColor="#00D2BE" />
                        <stop offset="100%" stopColor="#00A19C" />
                    </linearGradient>
                </defs>

                {/* Rear ERS / Rain Light (Pulses red when stationary/braking) */}
                <rect
                    x="30"
                    y="3"
                    width="4"
                    height="5"
                    rx="1.5"
                    fill={isMoving ? '#7F1D1D' : '#EF4444'}
                    className={!isMoving ? 'animate-ers-blink' : ''}
                />

                {/* Rear Wing Assembly */}
                <rect x="12" y="7" width="40" height="11" rx="2" fill="url(#f1Carbon)" stroke="#2F3B4A" strokeWidth="1" />
                <rect x="14" y="14.5" width="36" height="2.6" rx="1" fill="#00D2BE" />
                {/* Rear Wing Endplates */}
                <rect x="10.5" y="5.5" width="3" height="15" rx="1" fill="#121820" stroke="#00A19C" strokeWidth="0.7" />
                <rect x="50.5" y="5.5" width="3" height="15" rx="1" fill="#121820" stroke="#00A19C" strokeWidth="0.7" />

                {/* Rear Suspension Wishbones */}
                <path d="M15 29 L26 34 M15 41 L26 39 M49 29 L38 34 M49 41 L38 39" stroke="#334155" strokeWidth="2" strokeLinecap="round" />

                {/* Rear Slick Tires */}
                <rect x="3" y="21" width="12.5" height="26" rx="3.5" fill="#0B0E12" stroke="#1E293B" strokeWidth="1.2" />
                <rect x="48.5" y="21" width="12.5" height="26" rx="3.5" fill="#0B0E12" stroke="#1E293B" strokeWidth="1.2" />
                {/* Petronas Rim Accent Stripes (Rear) */}
                <line x1="5.2" y1="25" x2="5.2" y2="43" stroke="#00D2BE" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
                <line x1="58.8" y1="25" x2="58.8" y2="43" stroke="#00D2BE" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />

                {/* Floor / Diffuser Underbody */}
                <path
                    d="M21 26 L43 26 L47 50 L46 88 L39 95 L25 95 L18 88 L17 50 Z"
                    fill="#070A0E"
                    stroke="#1E293B"
                    strokeWidth="1"
                />

                {/* Sculpted Chassis, Sidepods & Tapered Nose Cone */}
                <path
                    d="M28 18 L36 18 L39 36 C44 43 45 55 44 74 C43 84 39 90 36.5 96 L34.5 137 C34.2 141 33.2 143 32 143 C30.8 143 29.8 141 29.5 137 L27.5 96 C25 90 21 84 20 74 C19 55 20 43 25 36 Z"
                    fill="url(#f1SilverBody)"
                    stroke="#475569"
                    strokeWidth="0.9"
                />

                {/* Sidepod Radiator Intakes */}
                <path d="M20.5 76 C21 80 23 82 25.5 82 L25 74 Z" fill="#05070A" />
                <path d="M43.5 76 C43 80 41 82 38.5 82 L39 74 Z" fill="#05070A" />

                {/* Iconic Petronas Teal Sidepod Flow Stripes */}
                <path d="M26 30 C21.5 46 21 63 24 81" stroke="url(#f1TealFlow)" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M38 30 C42.5 46 43 63 40 81" stroke="url(#f1TealFlow)" strokeWidth="2.4" strokeLinecap="round" />

                {/* Center Spine / Airbox Intake */}
                <path d="M32 22 L32 58" stroke="#00D2BE" strokeWidth="1.2" opacity="0.65" />
                <ellipse cx="32" cy="59" rx="3" ry="4.5" fill="#05070A" stroke="#00A19C" strokeWidth="0.8" />

                {/* Cockpit Tub */}
                <ellipse cx="32" cy="74" rx="5.2" ry="11" fill="#05070A" stroke="#334155" strokeWidth="0.8" />

                {/* Driver Helmet + Visor */}
                <circle cx="32" cy="70.5" r="4.2" fill="#00D2BE" stroke="#FFFFFF" strokeWidth="0.9" />
                <path d="M28.6 72 C30 74 34 74 35.4 72" stroke="#05070A" strokeWidth="2" strokeLinecap="round" />

                {/* Carbon Halo Protection */}
                <path d="M26 70 C26 84 38 84 38 70" stroke="#1E293B" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M26 70 C26 84 38 84 38 70" stroke="#94A3B8" strokeWidth="0.7" strokeLinecap="round" />
                <line x1="32" y1="81" x2="32" y2="88.5" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

                {/* Nose Centerline Accent */}
                <line x1="32" y1="95" x2="32" y2="128" stroke="#00A19C" strokeWidth="1.4" strokeLinecap="round" />

                {/* Front Suspension Wishbones */}
                <path d="M15.5 103 L28 106 M15.5 114 L28.5 112 M48.5 103 L36 106 M48.5 114 L35.5 112" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" />

                {/* Front Slick Tires */}
                <rect x="5" y="96" width="10.5" height="24" rx="3" fill="#0B0E12" stroke="#1E293B" strokeWidth="1.2" />
                <rect x="48.5" y="96" width="10.5" height="24" rx="3" fill="#0B0E12" stroke="#1E293B" strokeWidth="1.2" />
                {/* Petronas Rim Accent Stripes (Front) */}
                <line x1="7" y1="100" x2="7" y2="116" stroke="#00D2BE" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
                <line x1="57" y1="100" x2="57" y2="116" stroke="#00D2BE" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />

                {/* Swept Multi-Element Front Wing */}
                <path
                    d="M7 125 L27 132 L37 132 L57 125 L58.5 134.5 L36.5 141.5 L27.5 141.5 L5.5 134.5 Z"
                    fill="url(#f1Carbon)"
                    stroke="#334155"
                    strokeWidth="0.9"
                />
                <path d="M8.5 133.5 L27.5 139.5 L36.5 139.5 L55.5 133.5" stroke="#00D2BE" strokeWidth="1.8" strokeLinecap="round" />
                {/* Front Wing Endplates */}
                <rect x="4.5" y="124" width="2.8" height="12" rx="1" fill="#121820" stroke="#00D2BE" strokeWidth="0.7" />
                <rect x="56.7" y="124" width="2.8" height="12" rx="1" fill="#121820" stroke="#00D2BE" strokeWidth="0.7" />
            </svg>
        </div>
    );
}

export default function ScrollF1Car() {
    const { pathname } = useLocation();

    const carWrapRef = useRef(null);
    const progressBarRef = useRef(null);
    const mobileBarRef = useRef(null);
    const mobileCarRef = useRef(null);

    const targetProgressRef = useRef(0);
    const currentProgressRef = useRef(0);
    const lastScrollYRef = useRef(0);
    const lastTimeRef = useRef(performance.now());
    const stopTimerRef = useRef(null);

    const [sectors, setSectors] = useState([]);
    const [activeSector, setActiveSector] = useState(0);
    const [direction, setDirection] = useState('down');
    const [isMoving, setIsMoving] = useState(false);
    const [speedKmh, setSpeedKmh] = useState(0);

    // Discover Layer-Cake sections on the current page whenever route or layout changes
    useEffect(() => {
        const scanSections = () => {
            const mainEl = document.querySelector('main');
            if (!mainEl) return;

            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const nodes = Array.from(mainEl.querySelectorAll('section'));

            if (nodes.length === 0) {
                setSectors([]);
                return;
            }

            const mapped = nodes.map((sec, idx) => {
                const docTop = sec.getBoundingClientRect().top + window.scrollY;
                const ratio =
                    maxScroll > 40 ? Math.min(1, Math.max(0, (docTop - 80) / maxScroll)) : idx / Math.max(1, nodes.length - 1);
                return {
                    index: idx,
                    code: `S${idx + 1}`,
                    label: extractSectorLabel(sec, idx),
                    ratio,
                    element: sec,
                };
            });

            setSectors(mapped);
        };

        // Reset car to start of lap on route navigation
        targetProgressRef.current = 0;
        currentProgressRef.current = 0;
        lastScrollYRef.current = 0;
        setActiveSector(0);
        setDirection('down');
        setSpeedKmh(0);
        setIsMoving(false);

        const timer = setTimeout(scanSections, 140);
        const resizeObserver = new ResizeObserver(scanSections);
        resizeObserver.observe(document.body);
        window.addEventListener('resize', scanSections);

        return () => {
            clearTimeout(timer);
            resizeObserver.disconnect();
            window.removeEventListener('resize', scanSections);
        };
    }, [pathname]);

    // Slower, weighted momentum scroll tracking via requestAnimationFrame
    useEffect(() => {
        let rafId;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const handleScroll = () => {
            const now = performance.now();
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

            const deltaY = scrollY - lastScrollYRef.current;
            const deltaT = Math.max(16, now - lastTimeRef.current);

            if (Math.abs(deltaY) > 1.5) {
                setDirection(deltaY > 0 ? 'down' : 'up');
                setIsMoving(true);

                const velocity = Math.abs(deltaY) / deltaT;
                const simulated = Math.min(338, Math.max(85, Math.round(95 + velocity * 78)));
                setSpeedKmh(simulated);
            }

            targetProgressRef.current = progress;
            lastScrollYRef.current = scrollY;
            lastTimeRef.current = now;

            if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
            stopTimerRef.current = setTimeout(() => {
                setIsMoving(false);
                setSpeedKmh(0);
            }, 320);
        };

        const tick = () => {
            const target = targetProgressRef.current;
            const current = currentProgressRef.current;
            // Lower lerp factor (0.065) makes the car glide more slowly and smoothly
            const next = prefersReduced ? target : current + (target - current) * 0.065;

            currentProgressRef.current = Math.abs(target - next) < 0.0005 ? target : next;
            const pct = currentProgressRef.current * 100;

            if (carWrapRef.current) {
                carWrapRef.current.style.top = `${pct}%`;
            }
            if (progressBarRef.current) {
                progressBarRef.current.style.height = `${pct}%`;
            }
            if (mobileBarRef.current) {
                mobileBarRef.current.style.width = `${pct}%`;
            }
            if (mobileCarRef.current) {
                mobileCarRef.current.style.left = `${pct}%`;
            }

            rafId = requestAnimationFrame(tick);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        rafId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
            if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
        };
    }, []);

    // Update active sector highlight as user scrolls
    useEffect(() => {
        if (sectors.length === 0) return;

        const updateActiveSector = () => {
            const probeY = window.scrollY + window.innerHeight * 0.35;
            let currentIdx = 0;

            sectors.forEach((sec, idx) => {
                const top = sec.element.getBoundingClientRect().top + window.scrollY;
                if (probeY >= top) currentIdx = idx;
            });

            setActiveSector(currentIdx);
        };

        updateActiveSector();
        window.addEventListener('scroll', updateActiveSector, { passive: true });
        return () => window.removeEventListener('scroll', updateActiveSector);
    }, [sectors]);

    const handleCarClick = () => {
        if (window.scrollY > 140) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (sectors[1]?.element) {
            sectors[1].element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    };

    const scrollToSector = (sec) => {
        sec.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const activeSectorObj = sectors[activeSector];
    const speedRatio = speedKmh / 338;

    return (
        <>
            {/* ================= DESKTOP / TABLET LEFT VERTICAL PIT-LANE RACER ================= */}
            <aside
                aria-label="F1 Scroll Telemetry Track"
                className="pointer-events-none fixed left-2.5 lg:left-5 xl:left-7 top-24 bottom-12 z-30 hidden md:flex flex-col items-center w-12 select-none"
            >
                {/* Top Start/Finish Marker */}
                <div className="mb-2 flex flex-col items-center gap-0.5">
                    <span className="font-mono text-[9px] font-bold tracking-widest text-petronas-bright/80">
                        LAP
                    </span>
                    <div className="w-3.5 h-1 rounded-full bg-snow/70" />
                </div>

                {/* Vertical Racing Track Spine */}
                <div className="relative flex-1 w-full flex justify-center">
                    {/* Base Asphalt Track Line */}
                    <div className="relative w-[3px] h-full rounded-full bg-snow/10 overflow-hidden">
                        {/* Illuminated Petronas Racing Line Behind Car */}
                        <div
                            ref={progressBarRef}
                            className="w-full rounded-full bg-gradient-to-b from-petronas/40 via-petronas to-petronas-bright shadow-[0_0_10px_#00D2BE]"
                            style={{ height: '0%' }}
                        />
                    </div>

                    {/* Clickable Sector Checkpoints */}
                    {sectors.map((sec) => {
                        const isCurrent = sec.index === activeSector;
                        return (
                            <button
                                key={sec.code}
                                type="button"
                                onClick={() => scrollToSector(sec)}
                                style={{ top: `${sec.ratio * 100}%` }}
                                aria-label={`Jump to ${sec.label}`}
                                className="pointer-events-auto group/dot absolute left-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 cursor-pointer"
                            >
                                <span
                                    className={`block rounded-full transition-all duration-200 ${isCurrent
                                        ? 'w-2.5 h-2.5 bg-petronas-bright ring-4 ring-petronas/25'
                                        : 'w-1.5 h-1.5 bg-snow/35 group-hover/dot:bg-petronas-bright group-hover/dot:scale-125'
                                        }`}
                                />
                                {/* Hover Sector Tooltip (Opens to the right of the left rail) */}
                                <span className="pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-carbon/95 border border-petronas/50 px-2.5 py-1 text-[10px] font-mono text-snow opacity-0 -translate-x-1 group-hover/dot:opacity-100 group-hover/dot:translate-x-0 transition-all duration-200 shadow-lg">
                                    <span className="text-petronas-bright font-bold mr-1.5">{sec.code}</span>
                                    {sec.label}
                                </span>
                            </button>
                        );
                    })}

                    {/* Moving F1 Car */}
                    <button
                        ref={carWrapRef}
                        type="button"
                        onClick={handleCarClick}
                        title={
                            direction === 'down' && activeSector === 0
                                ? 'Click to launch to next sector'
                                : 'Click to return to top (Pit Lane)'
                        }
                        aria-label="F1 scroll car — click to jump to top or next section"
                        style={{ top: '0%' }}
                        className="pointer-events-auto group/car absolute left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer focus-visible:outline-none"
                    >
                        <div
                            className={`transition-transform duration-500 ease-out group-hover/car:scale-105 ${direction === 'up' ? 'rotate-180' : 'rotate-0'
                                }`}
                        >
                            <F1CarSVG isMoving={isMoving} speedRatio={speedRatio} />
                        </div>
                    </button>
                </div>

                {/* Minimal Live Telemetry Pod at Bottom of Rail */}
                <div className="mt-3 rounded-lg bg-carbon/90 backdrop-blur-md border border-snow/10 px-2 py-1.5 text-center shadow-lg min-w-[50px]">
                    <div className="font-mono text-[10px] font-bold text-petronas-bright leading-none">
                        {activeSectorObj ? activeSectorObj.code : 'S1'}
                    </div>
                    <div className="font-mono text-[9px] text-slate-300 mt-1 tabular-nums leading-none">
                        {isMoving ? `${speedKmh}` : 'PIT'}
                    </div>
                </div>
            </aside>

            {/* ================= MOBILE HORIZONTAL TOP PROGRESS RACER ================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed top-0 inset-x-0 z-50 h-1 bg-carbon/60 md:hidden"
            >
                <div
                    ref={mobileBarRef}
                    className="h-full bg-gradient-to-r from-petronas to-petronas-bright shadow-[0_0_8px_#00D2BE]"
                    style={{ width: '0%' }}
                />
                <span
                    ref={mobileCarRef}
                    style={{ left: '0%' }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-1.5 rounded-full bg-snow border border-petronas-bright shadow-[0_0_8px_#00D2BE]"
                />
            </div>
        </>
    );
}