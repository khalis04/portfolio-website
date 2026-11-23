import { useRef, useState } from 'react';
import { Camera, Radio, Terminal, Sparkles, MapPin, Shield } from 'lucide-react';

// Lightweight Web Audio synth for instant tactile multimedia feedback
function playSynthSound(type) {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        if (type === 'radio') {
            // Iconic F1 double pit-radio chirp
            [0, 0.11].forEach((offset, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(i === 0 ? 1180 : 1480, ctx.currentTime + offset);
                gain.gain.setValueAtTime(0.06, ctx.currentTime + offset);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + 0.08);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + offset);
                osc.stop(ctx.currentTime + offset + 0.085);
            });
        } else if (type === 'shutter') {
            // Crisp DSLR mechanical shutter snap
            const bufferSize = ctx.sampleRate * 0.045;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            noise.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
        } else {
            // Soft UI pop
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(520, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(840, ctx.currentTime + 0.06);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.075);
        }
    } catch {
        // Ignore if browser blocks autoplay audio
    }
}

const CODE_STACK = ['Java Swing', 'C++ & MySQL', 'React + Vite', 'Tailwind UI'];

export default function StickerPack() {
    const [radioActive, setRadioActive] = useState(false);
    const [shots, setShots] = useState(42);
    const [flashing, setFlashing] = useState(false);
    const [stackIdx, setStackIdx] = useState(0);
    const [tkdPop, setTkdPop] = useState(false);
    const [medalGold, setMedalGold] = useState(true);
    const radioTimer = useRef(null);

    const handleRadioClick = () => {
        playSynthSound('radio');
        setRadioActive(true);
        clearTimeout(radioTimer.current);
        radioTimer.current = setTimeout(() => setRadioActive(false), 2400);
    };

    const handleCameraClick = () => {
        playSynthSound('shutter');
        setFlashing(true);
        setShots((n) => n + 1);
        setTimeout(() => setFlashing(false), 160);
    };

    const handleCodeClick = () => {
        playSynthSound('pop');
        setStackIdx((i) => (i + 1) % CODE_STACK.length);
    };

    const handleTkdClick = () => {
        playSynthSound('pop');
        setTkdPop(true);
        setTimeout(() => setTkdPop(false), 900);
    };

    const handleMedalClick = () => {
        playSynthSound('pop');
        setMedalGold((g) => !g);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-petronas-bright font-semibold uppercase tracking-wider">
                    Interactive Sticker Kit
                </span>
                <span>Click any sticker (sound on)</span>
            </div>

            {/* Die-Cut Vinyl Sticker Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* STICKER 1: F1 PIT RADIO (Audio + Waveform Animation) */}
                <button
                    type="button"
                    onClick={handleRadioClick}
                    style={{ transform: 'rotate(-2.5deg)' }}
                    className="die-cut-sticker cursor-pointer inline-flex items-center gap-2.5 rounded-2xl bg-carbon px-3.5 py-2 border-2 border-snow text-left"
                >
                    <span className="w-7 h-7 rounded-xl bg-petronas text-ink grid place-items-center shrink-0">
                        <Radio size={14} />
                    </span>
                    <div>
                        <div className="font-mono text-[10px] font-bold uppercase text-petronas-bright leading-none">
                            {radioActive ? 'BOX THIS LAP' : 'PIT RADIO'}
                        </div>
                        <div className="text-[11px] font-semibold text-snow mt-0.5 leading-none">
                            {radioActive ? 'Open for Interns!' : 'Tap for radio'}
                        </div>
                    </div>
                    <div className="flex items-end gap-[2px] h-3.5 pl-1" aria-hidden="true">
                        {[0, 120, 220, 80].map((d, idx) => (
                            <span
                                key={idx}
                                style={{ animationDelay: `${d}ms` }}
                                className={`w-[2px] rounded-full ${radioActive ? 'h-full bg-petronas-bright animate-wave' : 'h-1.5 bg-snow/35'
                                    }`}
                            />
                        ))}
                    </div>
                </button>

                {/* STICKER 2: NIKON DSLR SHUTTER (Flash + Shutter Click Audio) */}
                <button
                    type="button"
                    onClick={handleCameraClick}
                    style={{ transform: 'rotate(2deg)' }}
                    className="die-cut-sticker relative overflow-hidden cursor-pointer inline-flex items-center gap-2 rounded-2xl bg-silver text-ink px-3.5 py-2 border-2 border-snow"
                >
                    <span
                        className={`pointer-events-none absolute inset-0 bg-snow transition-opacity duration-150 ${flashing ? 'opacity-90' : 'opacity-0'
                            }`}
                    />
                    <span className="w-7 h-7 rounded-xl bg-carbon text-petronas-bright grid place-items-center shrink-0">
                        <Camera size={14} />
                    </span>
                    <div className="text-left">
                        <div className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-petronas-deep leading-none">
                            NIKON DSLR
                        </div>
                        <div className="font-mono text-[11px] font-bold text-ink mt-0.5 leading-none tabular-nums">
                            RAW #{String(shots).padStart(3, '0')}
                        </div>
                    </div>
                </button>

                {/* STICKER 3: TAEKWONDO BLACK BELT PATCH */}
                <button
                    type="button"
                    onClick={handleTkdClick}
                    style={{ transform: 'rotate(-1.5deg)' }}
                    className="die-cut-sticker cursor-pointer inline-flex items-center gap-2 rounded-full bg-[#121820] px-3.5 py-2 border-2 border-petronas-bright text-left"
                >
                    <span className="w-7 h-7 rounded-full bg-petronas/20 text-petronas-bright grid place-items-center shrink-0">
                        <Shield size={14} />
                    </span>
                    <div>
                        <div className="font-mono text-[10px] font-bold uppercase text-petronas-bright leading-none">
                            {tkdPop ? 'KYORUGI +3!' : 'KTJ COACH'}
                        </div>
                        <div className="text-[11px] font-semibold text-snow mt-0.5 leading-none">
                            UTeM • SUKIPT
                        </div>
                    </div>
                </button>

                {/* STICKER 4: CYCLING CODE STACK BADGE */}
                <button
                    type="button"
                    onClick={handleCodeClick}
                    style={{ transform: 'rotate(2.5deg)' }}
                    className="die-cut-sticker cursor-pointer inline-flex items-center gap-2 rounded-xl bg-petronas text-ink px-3.5 py-2 border-2 border-snow text-left"
                >
                    <Terminal size={15} className="shrink-0" />
                    <div>
                        <div className="font-mono text-[9px] font-extrabold uppercase tracking-wider opacity-80 leading-none">
                            FTMK BUILD
                        </div>
                        <div className="font-mono text-xs font-bold mt-0.5 leading-none">
                            {CODE_STACK[stackIdx]}
                        </div>
                    </div>
                </button>

                {/* STICKER 5: 2D -> 3D MEDAL STAMP */}
                <button
                    type="button"
                    onClick={handleMedalClick}
                    style={{ transform: 'rotate(-3deg)' }}
                    className={`die-cut-sticker cursor-pointer inline-flex items-center gap-2 rounded-2xl px-3.5 py-2 border-2 border-snow text-left transition-colors ${medalGold
                            ? 'bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-ink'
                            : 'bg-carbon text-petronas-bright border-dashed'
                        }`}
                >
                    <Sparkles size={14} className="shrink-0" />
                    <div>
                        <div className="font-mono text-[9px] font-extrabold uppercase leading-none opacity-85">
                            {medalGold ? '3D RENDER' : '2D DRAFT'}
                        </div>
                        <div className="font-mono text-[11px] font-bold mt-0.5 leading-none">
                            Medal Lab
                        </div>
                    </div>
                </button>

                {/* STICKER 6: PERAK -> MELAKA ROUTE TICKET */}
                <div
                    style={{ transform: 'rotate(1.5deg)' }}
                    className="die-cut-sticker inline-flex items-center gap-2 rounded-xl bg-carbon-2 px-3 py-2 border-2 border-snow/80"
                >
                    <MapPin size={14} className="text-petronas-bright shrink-0" />
                    <div className="font-mono text-[11px] font-bold text-snow leading-none">
                        PRK <span className="text-petronas-bright">→</span> MLK
                    </div>
                </div>
            </div>
        </div>
    );
}