import { useEffect, useRef, useState } from 'react';

// Counts from 0 to the value when it scrolls into view ("06" stays two digits)
export default function CountUp({ value, duration = 900 }) {
    const target = parseInt(value, 10);
    const width = String(value).length;
    const [n, setN] = useState(target);
    const ref = useRef(null);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !('IntersectionObserver' in window)) return;
        setN(0);
        let raf;
        const io = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return;
            io.disconnect();
            const t0 = performance.now();
            const tick = (t) => {
                const p = Math.min(1, (t - t0) / duration);
                setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
                if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
        });
        io.observe(ref.current);
        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [target, duration]);

    return <span ref={ref}>{String(n).padStart(width, '0')}</span>;
}