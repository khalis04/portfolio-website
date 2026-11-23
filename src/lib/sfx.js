import { useSyncExternalStore } from 'react';

// Tiny synthesized sound engine (Web Audio). No audio files needed.
let ctx = null;
let on = false;
const subs = new Set();
const emit = () => subs.forEach((f) => f());

function ac() {
    if (!ctx) {
        const C = window.AudioContext || window.webkitAudioContext;
        if (!C) return null;
        ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
}

export const sfx = {
    setOn(v) {
        on = v;
        emit();
    },
    isOn: () => on,
    // Start-light beep
    beep(freq = 600, dur = 0.1) {
        if (!on) return;
        const c = ac();
        if (!c) return;
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = 'square';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.05, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
        o.connect(g).connect(c.destination);
        o.start();
        o.stop(c.currentTime + dur);
    },
    // Engine rev: sawtooth sweep through a low-pass filter
    rev() {
        if (!on) return;
        const c = ac();
        if (!c) return;
        const t = c.currentTime;
        const o = c.createOscillator();
        const f = c.createBiquadFilter();
        const g = c.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(70, t);
        o.frequency.exponentialRampToValueAtTime(380, t + 1.4);
        f.type = 'lowpass';
        f.frequency.setValueAtTime(400, t);
        f.frequency.exponentialRampToValueAtTime(2400, t + 1.4);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.09, t + 0.25);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.7);
        o.connect(f).connect(g).connect(c.destination);
        o.start(t);
        o.stop(t + 1.8);
    },
};

export function useSound() {
    return useSyncExternalStore(
        (cb) => {
            subs.add(cb);
            return () => subs.delete(cb);
        },
        () => on
    );
}