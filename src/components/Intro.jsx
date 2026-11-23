import { useEffect, useState } from 'react';
import { sfx } from '../lib/sfx';

const KEY = 'khalis-intro-seen';

function seen() {
    try {
        return sessionStorage.getItem(KEY) === '1';
    } catch {
        return false;
    }
}

// F1 start-light intro: tap, five lights build, lights out, enter. Plays once per visit.
export default function Intro() {
    const [phase, setPhase] = useState(seen() ? 'gone' : 'idle'); // idle | lights | go | gone
    const [lit, setLit] = useState(0);
    const reduced =
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const finish = () => {
        try {
            sessionStorage.setItem(KEY, '1');
        } catch {
            /* storage unavailable */
        }
        setPhase('gone');
    };

    const start = () => {
        if (phase === 'idle') {
            sfx.setOn(true); // the tap is the user gesture that allows audio
            if (reduced) return finish();
            setPhase('lights');
        } else {
            finish(); // click anywhere to skip
        }
    };

    useEffect(() => {
        if (phase === 'gone') return;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => {
            if (e.key === 'Escape') finish();
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [phase]);

    useEffect(() => {
        if (phase !== 'lights') return;
        if (lit < 5) {
            const t = setTimeout(() => {
                setLit((n) => n + 1);
                sfx.beep(520, 0.12);
            }, 650);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => {
            setPhase('go');
            sfx.rev();
        }, 900);
        return () => clearTimeout(t);
    }, [phase, lit]);

    useEffect(() => {
        if (phase !== 'go') return;
        const t = setTimeout(finish, 900);
        return () => clearTimeout(t);
    }, [phase]);

    if (phase === 'gone') return null;

    return (
        <div
            role="dialog"
            aria-label="Introduction"
            className={`fixed inset-0 z-[100] grid place-items-center bg-carbon transition-opacity duration-700 ${phase === 'go' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <button
                type="button"
                onClick={start}
                autoFocus
                className="absolute inset-0 cursor-pointer"
                aria-label={phase === 'idle' ? 'Tap to enter' : 'Skip introduction'}
            />
            <div className="pointer-events-none flex flex-col items-center gap-10 px-6 text-center">
                {/* Start-light gantry */}
                <div className="flex gap-3 rounded-2xl border border-snow/10 bg-carbon-2 px-5 py-4 sm:gap-4 sm:px-7 sm:py-5" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => {
                        const on = phase === 'lights' && i < lit;
                        return (
                            <span
                                key={i}
                                className="h-9 w-9 rounded-full sm:h-12 sm:w-12"
                                style={{
                                    background: on ? '#FF2D1F' : '#1A222C',
                                    boxShadow: on ? '0 0 24px 4px rgba(255,45,31,0.55)' : 'none',
                                    transition: 'background 0.12s, box-shadow 0.12s',
                                }}
                            />
                        );
                    })}
                </div>

                <div className="space-y-2">
                    <h1 className="display text-5xl sm:text-7xl">
                        Khalis <em>Fikri</em>
                    </h1>
                    <p className="font-mono text-xs text-slate-300">FTMK • UTeM</p>
                </div>

                <p className="font-mono text-sm text-petronas-bright">
                    {phase === 'idle' ? 'Tap to enter →' : 'Click anywhere to skip'}
                </p>
            </div>
        </div>
    );
}