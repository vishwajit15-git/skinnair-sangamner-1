import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Patient Results & Transformations | Skinnair Sangamner",
    description:
        "See real patient transformations at Dr. Dayama's Skinnair. Before and after results for hair regrowth, acne treatment, pigmentation, and more.",
};

const results = [
    {
        title: "Hair Regrowth – Male Pattern",
        duration: "6 Months Treatment",
        category: "Hair Loss",
        description:
            "Significant hair density improvement with PRP therapy and medication regimen. Patient showed visible regrowth starting from month 2.",
    },
    {
        title: "Severe Acne Clearance",
        duration: "3 Months Treatment",
        category: "Acne",
        description:
            "Complete clearance of inflammatory acne with customized oral and topical treatment plan, combined with chemical peels.",
    },
    {
        title: "Melasma Pigmentation Reduction",
        duration: "4 Months Treatment",
        category: "Pigmentation",
        description:
            "Dramatic improvement in facial melasma using combination therapy including depigmenting agents and chemical peels.",
    },
    {
        title: "Female Hair Thinning Recovery",
        duration: "8 Months Treatment",
        category: "Hair Loss",
        description:
            "Restored hair density and volume with mesotherapy sessions and nutritional supplementation for diffuse hair thinning.",
    },
    {
        title: "Acne Scar Treatment",
        duration: "5 Months Treatment",
        category: "Skin",
        description:
            "Micro-needling and laser combination therapy significantly reduced ice-pick and rolling acne scars for smoother skin texture.",
    },
    {
        title: "Skin Rejuvenation",
        duration: "3 Months Treatment",
        category: "Anti-Aging",
        description:
            "Chemical peels and medical facials restored youthful glow, reduced fine lines, and evened out skin tone and texture.",
    },
    {
        title: "Post-Inflammatory Dark Spots",
        duration: "2 Months Treatment",
        category: "Pigmentation",
        description:
            "Targeted depigmenting protocol cleared dark spots left after acne, restoring even, clear complexion.",
    },
    {
        title: "Laser Hair Removal – Face",
        duration: "6 Sessions",
        category: "Laser",
        description:
            "Safe and effective permanent hair reduction for facial hirsutism with our latest diode laser technology.",
    },
];

export default function ResultsPage() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/40" />
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                        Real Results
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Patient <span className="gradient-text">Transformations</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real results from real patients. Every transformation shown here
                        represents a personalized treatment plan by Dr. Dayama.
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        * All images are anonymized to protect patient privacy
                    </p>
                </div>
            </section>

            {/* ===== RESULTS GRID ===== */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Filter tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12 reveal">
                        {["All", "Hair Loss", "Acne", "Pigmentation", "Skin", "Anti-Aging", "Laser"].map(
                            (tag) => (
                                <span
                                    key={tag}
                                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${tag === "All"
                                            ? "bg-primary text-white shadow-md"
                                            : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
                                        }`}
                                >
                                    {tag}
                                </span>
                            )
                        )}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {results.map((result, i) => (
                            <div
                                key={result.title}
                                className="reveal group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                {/* Before / After Visual */}
                                <div className="relative">
                                    <div className="grid grid-cols-2">
                                        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                                            <div className="absolute top-2 left-2 px-2 py-1 bg-red-500/90 text-white text-[10px] font-bold rounded-md uppercase">
                                                Before
                                            </div>
                                            <svg
                                                className="w-10 h-10 text-gray-400/60"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                                            <div className="absolute top-2 right-2 px-2 py-1 bg-green-500/90 text-white text-[10px] font-bold rounded-md uppercase">
                                                After
                                            </div>
                                            <svg
                                                className="w-10 h-10 text-primary/30"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5 bg-white">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary font-semibold rounded-full uppercase">
                                            {result.category}
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                            {result.duration}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                        {result.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TRUST BANNER ===== */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-4xl mx-auto text-center reveal">
                    <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Your Transformation Could Be Next
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Every patient&apos;s journey is unique. Dr. Dayama creates
                            personalized treatment plans to help you achieve the best possible
                            results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919049884354?text=Hi%2C%20I%20saw%20your%20results%20and%20would%20like%20to%20book%20a%20consultation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 btn-shine"
                            >
                                📞 Book Your Consultation
                            </a>
                            <Link
                                href="/services"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl shadow-md border border-gray-200 hover:border-primary/30 hover:text-primary transition-all duration-300"
                            >
                                View Our Services →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
