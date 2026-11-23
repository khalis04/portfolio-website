import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const B = import.meta.env.BASE_URL;
const SLIDES = [
    { src: `${B}images/poster-1.jpg`, label: 'Event Poster 01', cat: 'Graphic Design' },
    { src: `${B}images/medal-ai-3d.jpg`, label: 'Step 2: Gemini 3D Render', cat: 'AI Concepting' },
    { src: `${B}images/windbreaker-1.jpg`, label: 'Windbreaker Concept A', cat: 'AI Concepting' },
    { src: `${B}images/dslr-1.jpg`, label: 'Capture 01', cat: 'Photography' },
];

// Auto-playing image reel: crossfade + slow zoom, with play/pause and manual controls
export default function Reel() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const [i, setI] = useState(0);
    const [playing, setPlaying] = useState(!reduced);
    const [missing, setMissing] = useState({});

    useEffect(() => {
        if (!playing) return;
        const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 4500);
        return () => clearInterval(t);
    }, [playing]);

    const step = (d) => setI((n) => (n + d + SLIDES.length) % SLIDES.length);

    return (
        <div className="space-y-4">
            <div
                className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-ink/15 bg-ink"
                role="region"
                aria-roledescription="carousel"
                aria-label="Media reel"
            >
                {SLIDES.map((s, idx) => (
                    <div
                        key={s.src}
                        aria-hidden={idx !== i}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{ opacity: idx === i ? 1 : 0 }}
                    >
                        {!missing[s.src] ? (
                            <img
                                src={s.src}
                                alt={`${s.cat}: ${s.label}`}
                                onError={() => setMissing((m) => ({ ...m, [s.src]: true }))}
                                className="h-full w-full object-cover transition-transform ease-out"
                                style={{
                                    transform: idx === i ? 'scale(1.06)' : 'scale(1)',
                                    transitionDuration: idx === i ? '6s' : '0s',
                                }}
                            />
                        ) : (
                            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-carbon-3 to-petronas/30 p-6 text-center">
                                <div>
                                    <p className="font-display text-xl font-bold">{s.label}</p>
                                    <p className="text-sm text-slate-300">Add {s.src} to /public</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/80 to-transparent p-4 sm:p-6">
                    <div className="text-white">
                        <p className="text-sm font-bold text-petronas-bright" style={{ color: '#00D2BE' }}>{SLIDES[i].cat}</p>
                        <p className="font-display text-lg font-bold sm:text-2xl">{SLIDES[i].label}</p>
                    </div>
                    <span className="text-sm font-bold text-white">0{i + 1} / 0{SLIDES.length}</span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause reel' : 'Play reel'} className="btn-primary !px-3.5">
                        {playing ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="btn-ghost !px-3.5"><ChevronLeft size={16} /></button>
                    <button type="button" onClick={() => step(1)} aria-label="Next image" className="btn-ghost !px-3.5"><ChevronRight size={16} /></button>
                    <div className="ml-2 flex gap-1.5" role="tablist" aria-label="Choose image">
                        {SLIDES.map((s, idx) => (
                            <button
                                key={s.src}
                                role="tab"
                                aria-selected={idx === i}
                                aria-label={s.label}
                                onClick={() => setI(idx)}
                                className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-ink' : 'w-2 bg-ink/25 hover:bg-ink/50'}`}
                            />
                        ))}
                    </div>
                </div>
                <Link to="/media" className="inline-flex items-center gap-1.5 text-sm font-bold text-petronas-deep hover:text-ink">
                    Open the full gallery <ArrowUpRight size={15} />
                </Link>
            </div>
        </div>
    );
}