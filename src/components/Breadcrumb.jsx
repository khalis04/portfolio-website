import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const ROUTE_LABELS = {
    about: 'About',
    education: 'Academic',
    projects: 'Projects',
    media: 'Media',
    contact: 'Contact',
};

export default function Breadcrumb() {
    const { pathname } = useLocation();
    const segments = pathname.split('/').filter(Boolean);

    return (
        <nav
            aria-label="Breadcrumb"
            className="w-full bg-carbon/80 backdrop-blur-md border-b border-snow/10"
        >
            <div className="max-w-5xl mx-auto px-6 h-9 flex items-center justify-between gap-4">
                <ol className="flex items-center gap-1.5 font-mono text-[11px] overflow-x-auto no-scrollbar">
                    {/* Root Home Link */}
                    <li className="inline-flex items-center shrink-0">
                        {segments.length === 0 ? (
                            <span
                                aria-current="page"
                                className="inline-flex items-center gap-1.5 text-petronas-bright font-semibold"
                            >
                                <Home size={12} />
                                <span>Overview</span>
                            </span>
                        ) : (
                            <Link
                                to="/"
                                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-petronas-bright transition-colors"
                            >
                                <Home size={12} />
                                <span>Overview</span>
                            </Link>
                        )}
                    </li>

                    {/* Dynamic Clickable Segments */}
                    {segments.map((segment, index) => {
                        const path = `/${segments.slice(0, index + 1).join('/')}`;
                        const label =
                            ROUTE_LABELS[segment.toLowerCase()] ||
                            segment.charAt(0).toUpperCase() + segment.slice(1);
                        const isLast = index === segments.length - 1;

                        return (
                            <li key={path} className="inline-flex items-center gap-1.5 shrink-0">
                                <ChevronRight size={12} className="text-slate-600" aria-hidden="true" />
                                {isLast ? (
                                    <span
                                        aria-current="page"
                                        className="rounded-md bg-petronas/15 border border-petronas/35 px-2 py-0.5 text-petronas-bright font-semibold"
                                    >
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        to={path}
                                        className="text-slate-400 hover:text-petronas-bright hover:underline transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>

                <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-slate-500 shrink-0">
                    {segments.length === 0 ? 'Sector 01' : `Path / ${segments.join(' / ')}`}
                </span>
            </div>
        </nav>
    );
}