import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    ArrowUpRight,
    Download,
    Printer,
    Mail,
    MapPin,
    ExternalLink,
} from 'lucide-react';

const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academic', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
];

const CV_URL = `${import.meta.env.BASE_URL}resume.pdf`;
const CV_DOWNLOAD_NAME = 'Muhammad_Khalis_Fikri_CV.pdf';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showCvModal, setShowCvModal] = useState(false);
    const [checkingCv, setCheckingCv] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => setIsOpen(false), [pathname]);

    useEffect(() => {
        if (!isOpen && !showCvModal) return;
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                setShowCvModal(false);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, showCvModal]);

    const handleCvClick = async (e) => {
        e.preventDefault();
        if (checkingCv) return;
        setCheckingCv(true);

        try {
            const res = await fetch(CV_URL, { method: 'HEAD' });
            const contentType = res.headers.get('content-type') || '';

            if (res.ok && contentType.includes('pdf')) {
                const link = document.createElement('a');
                link.href = CV_URL;
                link.download = CV_DOWNLOAD_NAME;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setIsOpen(false);
                return;
            }
        } catch {
            // Fall through to built-in CV viewer modal
        } finally {
            setCheckingCv(false);
        }

        setIsOpen(false);
        setShowCvModal(true);
    };

    const linkClass = ({ isActive }) =>
        `relative px-3.5 py-1.5 rounded-lg font-sans text-sm font-medium transition-all ${isActive
            ? 'bg-petronas/15 text-petronas-bright font-semibold border border-petronas/40'
            : 'text-snow/80 hover:text-snow hover:bg-snow/5'
        }`;

    return (
        <>
            <header className="sticky top-0 z-50 bg-carbon/60 backdrop-blur-xl border-b border-snow/10">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Clean Modern Brand Header */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-3"
                        aria-label="Khalis Fikri, home"
                    >
                        <span className="grid place-items-center h-9 w-9 bg-petronas/90 text-ink font-sans font-extrabold text-sm rounded-lg shadow-xs">
                            KF
                        </span>
                        <span className="font-sans font-bold text-snow text-base tracking-tight leading-tight">
                            Khalis Fikri
                            <span className="hidden sm:block font-mono text-[11px] font-medium text-petronas-bright mt-0.5">
                                FTMK • UTeM
                            </span>
                        </span>
                    </NavLink>

                    {/* Desktop nav */}
                    <nav
                        className="hidden lg:flex items-center gap-1"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={linkClass}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Download CV Button */}
                    <a
                        href={CV_URL}
                        download={CV_DOWNLOAD_NAME}
                        onClick={handleCvClick}
                        className="hidden lg:inline-flex items-center gap-1.5 font-sans text-xs font-semibold px-4 py-2 bg-silver/90 text-ink rounded-lg border border-petronas hover:bg-petronas transition-colors cursor-pointer"
                    >
                        <span>{checkingCv ? 'Preparing...' : 'Download CV'}</span>
                        <ArrowUpRight size={14} />
                    </a>

                    {/* Mobile button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((v) => !v)}
                        className="lg:hidden p-2 text-snow hover:text-petronas-bright cursor-pointer"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Subtle 1px Petronas gradient hairline */}
                <div
                    className="h-[1px] w-full bg-gradient-to-r from-transparent via-petronas/60 to-transparent"
                    aria-hidden="true"
                />

                {/* Mobile drawer (Frosted Glass) */}
                {isOpen && (
                    <nav
                        id="mobile-nav"
                        aria-label="Main navigation"
                        className="lg:hidden border-b border-petronas/40 bg-carbon/85 backdrop-blur-xl px-6 py-4 space-y-1"
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={({ isActive }) =>
                                    `block px-3 py-2.5 rounded-lg font-sans text-sm font-medium ${isActive
                                        ? 'bg-petronas/20 text-petronas-bright font-semibold border border-petronas/40'
                                        : 'text-snow/85 hover:text-petronas-bright'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <a
                            href={CV_URL}
                            download={CV_DOWNLOAD_NAME}
                            onClick={handleCvClick}
                            className="btn-primary w-full mt-3 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                            <span>{checkingCv ? 'Preparing...' : 'Download CV'}</span>
                            <ArrowUpRight size={14} />
                        </a>
                    </nav>
                )}
            </header>

            {/* ================================================================
          BUILT-IN CV MODAL (FALLBACK WHEN /public/resume.pdf IS NOT ADDED YET)
      ================================================================ */}
            {showCvModal && (
                <div
                    className="fixed inset-0 z-50 bg-carbon/85 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setShowCvModal(false)}
                >
                    <div
                        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FAFBFD] text-[#080B0F] border-2 border-[#080B0F] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top Action Bar */}
                        <div className="sticky top-0 z-10 bg-[#080B0F] text-snow px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-snow/15">
                            <div className="font-mono text-xs text-petronas-bright font-bold">
                                CURRICULUM VITAE • MUHAMMAD KHALIS FIKRI
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => window.print()}
                                    className="inline-flex items-center gap-1.5 rounded-lg bg-petronas text-[#080B0F] px-3.5 py-1.5 font-sans text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                                >
                                    <Printer size={13} />
                                    <span>Print / Save PDF</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowCvModal(false)}
                                    aria-label="Close CV preview"
                                    className="p-1.5 rounded-lg bg-snow/10 text-snow hover:bg-snow/20 transition-colors cursor-pointer"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* CV Sheet Content */}
                        <div className="p-6 sm:p-9 space-y-6">
                            {/* Header */}
                            <div className="pb-5 border-b-2 border-[#080B0F] space-y-2">
                                <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#080B0F]">
                                    MUHAMMAD KHALIS FIKRI BIN MUHAMMAD FAUZI
                                </h2>
                                <p className="font-mono text-xs font-bold text-[#007A76]">
                                    Software Development Student (FTMK, UTeM) • Web &amp; Mobile Developer • UI/UX &amp; Graphic Designer
                                </p>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#334155] pt-1">
                                    <span className="inline-flex items-center gap-1">
                                        <MapPin size={12} className="text-[#007A76]" />
                                        Melaka &amp; Perak, Malaysia
                                    </span>
                                    <a
                                        href="mailto:khalisfikri04@gmail.com"
                                        className="inline-flex items-center gap-1 hover:underline"
                                    >
                                        <Mail size={12} className="text-[#007A76]" />
                                        khalisfikri04@gmail.com
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/khalis-fikri-312582444/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 hover:underline"
                                    >
                                        LinkedIn <ExternalLink size={11} />
                                    </a>
                                    <a
                                        href="https://github.com/khalisfikri"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 hover:underline"
                                    >
                                        GitHub <ExternalLink size={11} />
                                    </a>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="space-y-1.5">
                                <h3 className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#007A76]">
                                    Professional Summary
                                </h3>
                                <p className="text-sm text-[#1E293B] leading-relaxed">
                                    Bachelor of Computer Science (Software Development) student at Universiti Teknikal Malaysia Melaka (UTeM) experienced in full-stack web platforms, desktop software, and Android applications backed by IEEE SRS, UML modeling, and MySQL databases. Combines software engineering with HCI usability and graphic design leadership for university sports clubs.
                                </p>
                            </div>

                            {/* Education */}
                            <div className="space-y-2.5">
                                <h3 className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#007A76]">
                                    Education
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div>
                                        <div className="font-bold text-[#080B0F]">
                                            Universiti Teknikal Malaysia Melaka (UTeM) — Melaka
                                        </div>
                                        <div className="text-xs text-[#475569]">
                                            Bachelor of Computer Science (Software Development) with Honours • FTMK
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#080B0F]">
                                            Perak Matriculation College (KMPK) — Perak
                                        </div>
                                        <div className="text-xs text-[#475569]">
                                            Matriculation Programme
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#080B0F]">
                                            Madrasah Al-Hikmah (MADAH) — Perak
                                        </div>
                                        <div className="text-xs text-[#475569]">
                                            Secondary Education
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Key Projects */}
                            <div className="space-y-2.5">
                                <h3 className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#007A76]">
                                    Selected Software &amp; Design Projects
                                </h3>
                                <ul className="space-y-2 text-xs sm:text-sm text-[#1E293B] list-disc pl-5">
                                    <li>
                                        <strong>ACADEMIU (Workshop 2, 2026):</strong> Gamified study &amp; drill web platform with rank tiers, streak multipliers, season folders, and relational MySQL ERD.
                                    </li>
                                    <li>
                                        <strong>Nexus Cyber Café (June 2026):</strong> Segmented LAN subnet topology and web station reservation interface.
                                    </li>
                                    <li>
                                        <strong>SmartStock SRS (June 2026):</strong> IEEE 830 Software Requirements Specification, UML Use Case, and swimlane Activity workflows.
                                    </li>
                                    <li>
                                        <strong>Tuition Fee Manager &amp; Leave/Payroll OS (2026):</strong> Java Swing &amp; C++ desktop applications integrated with MySQL databases.
                                    </li>
                                    <li>
                                        <strong>UTeM Taekwondo Club &amp; KTJ Visuals (2026):</strong> Tournament posters, apparel concepts, and 2D-to-3D medal prototyping (Canva + Gemini AI).
                                    </li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className="space-y-2">
                                <h3 className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#007A76]">
                                    Technical &amp; Creative Stack
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        'Java',
                                        'C++',
                                        'Python',
                                        'React',
                                        'Tailwind CSS',
                                        'Android Studio',
                                        'MySQL',
                                        'IEEE SRS & UML',
                                        'Cisco Packet Tracer',
                                        'Figma',
                                        'Canva',
                                        'Git & GitHub',
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-md bg-[#080B0F] text-snow font-mono text-[11px] font-semibold px-2.5 py-1"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Helper Tip */}
                            <div className="rounded-xl bg-[#EEF3F5] border border-[#CBD5E1] p-3.5 flex items-center justify-between gap-3 text-xs text-[#334155]">
                                <span>
                                    Tip: Place your exported PDF at <code className="font-mono font-bold text-[#080B0F]">public/resume.pdf</code> to trigger an instant file download on click.
                                </span>
                                <Download size={15} className="text-[#007A76] shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}