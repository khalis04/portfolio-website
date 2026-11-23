import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CV_URL = `${import.meta.env.BASE_URL}resume.pdf`;
const ITEMS = [
    { name: 'Overview', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Academic', to: '/education' },
    { name: 'Projects', to: '/projects' },
    { name: 'Media', to: '/media' },
    { name: 'Contact', to: '/contact' },
    { name: 'Download CV', href: CV_URL },
];

// Press Ctrl/Cmd + K to jump anywhere
export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [i, setI] = useState(0);
    const nav = useNavigate();
    const ref = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen((v) => !v);
                setI(0);
            }
        };
        const onOpen = () => { setOpen(true); setI(0); };
        window.addEventListener('keydown', onKey);
        window.addEventListener('open-palette', onOpen);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('open-palette', onOpen);
        };
    }, []);

    useEffect(() => {
        if (open) ref.current?.focus();
    }, [open]);

    const go = (item) => {
        setOpen(false);
        if (item.href) window.open(item.href, '_blank', 'noopener');
        else nav(item.to);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Escape') setOpen(false);
        if (e.key === 'ArrowDown') { e.preventDefault(); setI((n) => (n + 1) % ITEMS.length); }
        if (e.key === 'ArrowUp') { e.preventDefault(); setI((n) => (n - 1 + ITEMS.length) % ITEMS.length); }
        if (e.key === 'Enter') go(ITEMS[i]);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[90] grid place-items-start justify-center bg-carbon/80 px-4 pt-[18vh]" onClick={() => setOpen(false)}>
            <div
                ref={ref}
                tabIndex={-1}
                role="dialog"
                aria-label="Jump to page"
                onKeyDown={onKeyDown}
                onClick={(e) => e.stopPropagation()}
                className="animate-modal-in w-full max-w-md overflow-hidden rounded-2xl border border-snow/15 bg-carbon-2 shadow-2xl outline-none"
            >
                <div className="flex items-center justify-between border-b border-snow/10 px-4 py-3 font-mono text-xs text-slate-300">
                    <span>Jump to</span>
                    <span>↑↓ move · ↵ open · esc close</span>
                </div>
                <ul>
                    {ITEMS.map((item, idx) => (
                        <li key={item.name}>
                            <button
                                type="button"
                                onMouseEnter={() => setI(idx)}
                                onClick={() => go(item)}
                                className={`flex w-full items-center justify-between min-h-11 px-4 text-left text-sm font-medium ${idx === i ? 'bg-petronas-bright text-ink' : 'text-snow'}`}
                            >
                                {item.name}
                                <span className="font-mono text-xs">{item.href ? 'PDF' : String(idx + 1).padStart(2, '0')}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}