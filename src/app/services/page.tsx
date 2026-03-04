import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Skin & Hair Treatments | Skinnair – Services in Sangamner",
    description:
        "Explore our comprehensive range of dermatology services: hair regrowth, acne treatment, pigmentation, laser therapy, anti-aging, and more at Skinnair Sangamner.",
};

const services = [
    {
        title: "Hair Loss Solutions",
        description:
            "Comprehensive diagnosis and treatment for all types of hair loss including androgenetic alopecia, telogen effluvium, and alopecia areata. We identify the root cause and create a targeted treatment plan.",
        features: [
            "Trichoscopy analysis",
            "Medication therapy",
            "Nutritional guidance",
            "Scalp treatments",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
        ),
        color: "from-blue-500 to-cyan-400",
    },
    {
        title: "Hair Regrowth Therapy",
        description:
            "Advanced PRP (Platelet-Rich Plasma) therapy, mesotherapy, and growth factor treatments to stimulate natural hair regrowth and improve density for both men and women.",
        features: [
            "PRP therapy",
            "Mesotherapy",
            "Growth factor treatment",
            "Follow-up tracking",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
        color: "from-emerald-500 to-teal-400",
    },
    {
        title: "Acne Treatment",
        description:
            "Evidence-based acne management for all severities — from mild comedonal acne to severe cystic acne. Includes topical, oral, and procedural interventions for clear, healthy skin.",
        features: [
            "Customized skincare",
            "Oral medications",
            "Chemical peels",
            "Scar prevention",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
        ),
        color: "from-rose-500 to-pink-400",
    },
    {
        title: "Pigmentation Treatment",
        description:
            "Targeted treatments for melasma, dark spots, post-inflammatory hyperpigmentation, and uneven skin tone. Combines peels, topicals, and laser for optimal results.",
        features: [
            "Skin analysis",
            "Depigmenting agents",
            "Chemical peels",
            "Sun protection guidance",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
        color: "from-amber-500 to-orange-400",
    },
    {
        title: "Laser Hair Removal",
        description:
            "FDA-approved laser technology for safe, effective, painless permanent hair reduction. Suitable for face, underarms, legs, bikini line, and full body treatment.",
        features: [
            "Latest diode laser",
            "All skin types",
            "Minimal discomfort",
            "Lasting results",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        color: "from-violet-500 to-purple-400",
    },
    {
        title: "Anti-Aging & Skin Rejuvenation",
        description:
            "Turn back the clock with our anti-aging solutions including dermal fillers, botox, micro-needling, and specialized facials for youthful, radiant skin.",
        features: [
            "Dermal fillers",
            "Micro-needling",
            "Collagen induction",
            "Medical facials",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0l5.1 5.1a2.121 2.121 0 01-3 3l-5.1-5.1zm0 0L8.34 8.09m10.42 2.54a6 6 0 11-8.49-8.49" />
            </svg>
        ),
        color: "from-fuchsia-500 to-pink-400",
    },
    {
        title: "Chemical Peels",
        description:
            "Professional-grade chemical peels for skin resurfacing, treating acne scars, fine lines, sun damage, and dull complexion. Multiple peel types to suit every skin concern.",
        features: [
            "Glycolic peels",
            "Salicylic peels",
            "TCA peels",
            "Customized protocols",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
        ),
        color: "from-sky-500 to-indigo-400",
    },
    {
        title: "Skin Allergy & Eczema",
        description:
            "Comprehensive diagnosis and management of skin allergies, eczema, dermatitis, and urticaria. Allergy testing and long-term management plans to prevent flare-ups.",
        features: [
            "Patch testing",
            "Immunotherapy",
            "Trigger identification",
            "Long-term management",
        ],
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
            </svg>
        ),
        color: "from-teal-500 to-green-400",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/40" />
                <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                        Our Services
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Comprehensive <span className="gradient-text">Treatments</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Advanced dermatological solutions backed by science, delivered with
                        care. Every treatment is personalized to your unique needs.
                    </p>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="reveal glass-card rounded-2xl p-8 group"
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                <div className="flex items-start gap-5">
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {service.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-2 text-sm text-gray-500"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-accent shrink-0"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
                <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
                    <div className="reveal">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Not Sure Which Treatment Is Right for You?
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                            Book a consultation with Dr. Dayama. He&apos;ll assess your condition
                            and recommend the best personalized treatment plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919049884354?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-secondary text-gray-900 font-bold rounded-2xl shadow-lg hover:bg-secondary-dark hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                📞 Book Consultation
                            </a>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                Contact Us →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
