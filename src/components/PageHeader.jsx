export default function PageHeader({ label, title, children, actions }) {
    return (
        <header className="layer-slate">
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-4">
                <div className="section-label">{label}</div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3">
                        <h1 className="display text-3xl sm:text-5xl">{title}</h1>
                        {children && (
                            <p className="text-slate-300 max-w-2xl leading-relaxed">{children}</p>
                        )}
                    </div>
                    {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
                </div>
            </div>
        </header>
    );
}