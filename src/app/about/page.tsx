import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Pravin Dayama | Skinnair – Dermatologist in Sangamner",
    description:
        "Learn about Dr. Pravin Dayama, an experienced dermatologist at Skinnair clinic in Sangamner, Maharashtra. MBBS, MD Dermatology with 10+ years of expertise.",
};

export default function AboutPage() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/40" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                        About Us
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Meet <span className="gradient-text">Dr. Pravin Dayama</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Dedicated to providing personalized, root-cause dermatological care
                        in Sangamner, Maharashtra.
                    </p>
                </div>
            </section>

            {/* ===== DOCTOR PROFILE ===== */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Photo Side */}
                        <div className="lg:col-span-2 reveal">
                            <div className="sticky top-24">
                                <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden shadow-2xl mb-6">
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
                                        <div className="text-center p-8">
                                            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                                                <svg
                                                    className="w-20 h-20 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={1.5}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-2xl font-bold text-gray-700">
                                                Dr. Pravin Dayama
                                            </p>
                                            <p className="text-gray-500 mt-1">
                                                Dermatologist & Hair Specialist
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick info cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="glass-card rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold gradient-text">10+</div>
                                        <div className="text-xs text-gray-500 mt-1">Years Experience</div>
                                    </div>
                                    <div className="glass-card rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold gradient-text">5000+</div>
                                        <div className="text-xs text-gray-500 mt-1">Happy Patients</div>
                                    </div>
                                    <div className="glass-card rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold gradient-text">15+</div>
                                        <div className="text-xs text-gray-500 mt-1">Treatments</div>
                                    </div>
                                    <div className="glass-card rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold gradient-text">IADVL</div>
                                        <div className="text-xs text-gray-500 mt-1">Member</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-3 reveal">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                A Passion for Skin Health
                            </h2>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Dr. Pravin Dayama is a highly qualified and experienced
                                    dermatologist serving the Sangamner community and surrounding
                                    regions. With an MBBS degree followed by a specialized MD in
                                    Dermatology, Dr. Dayama brings both deep medical knowledge and
                                    compassionate patient care to every consultation.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    After completing advanced training in laser therapy and
                                    cosmetology, Dr. Dayama founded Skinnair with a singular
                                    vision: to provide world-class dermatological care accessible
                                    to the local community. His approach focuses on understanding
                                    the root cause of skin and hair conditions, rather than merely
                                    treating symptoms.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    As a proud member of the Indian Association of Dermatologists,
                                    Venereologists and Leprologists (IADVL), Dr. Dayama stays at
                                    the forefront of dermatological advancements, continuously
                                    incorporating the latest evidence-based treatments into his
                                    practice.
                                </p>
                            </div>

                            {/* Qualifications */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Qualifications & Training
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        {
                                            title: "MBBS",
                                            detail: "Bachelor of Medicine and Bachelor of Surgery",
                                        },
                                        {
                                            title: "MD – Dermatology",
                                            detail: "Specialization in Dermatology, Venereology & Leprosy",
                                        },
                                        {
                                            title: "Advanced Laser Training",
                                            detail: "Certified in laser therapy and advanced cosmetology procedures",
                                        },
                                        {
                                            title: "IADVL Member",
                                            detail: "Indian Association of Dermatologists, Venereologists and Leprologists",
                                        },
                                    ].map((qual) => (
                                        <div
                                            key={qual.title}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors"
                                        >
                                            <svg
                                                className="w-5 h-5 text-accent mt-0.5 shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                                />
                                            </svg>
                                            <div>
                                                <div className="font-semibold text-gray-900 text-sm">
                                                    {qual.title}
                                                </div>
                                                <div className="text-sm text-gray-500">{qual.detail}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Clinic Story */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    The Skinnair Story
                                </h3>
                                <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                                    <p className="text-gray-600 leading-relaxed">
                                        Skinnair was born from a simple belief: everyone deserves
                                        access to expert dermatological care. Named as a blend of
                                        &ldquo;Skin&rdquo; and &ldquo;Air&rdquo; – symbolizing fresh, breathable, healthy
                                        skin – the clinic has grown to become Sangamner&apos;s most
                                        trusted destination for skin and hair treatments. Equipped
                                        with state-of-the-art technology and a warm, welcoming
                                        environment, Skinnair continues to transform lives one
                                        patient at a time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CLINIC LOCATION ===== */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 reveal">
                        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                            Visit Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                            Clinic <span className="gradient-text">Location</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 reveal">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d74.2098!3d19.5685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM0JzA2LjYiTiA3NMKwMTInMzUuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "320px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Skinnair Clinic Location"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="glass-card rounded-2xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    Main Clinic
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Kaushalyam Building, New Nagar Road,
                                    <br />
                                    Sangamner, Maharashtra 422605
                                </p>
                            </div>

                            <div className="glass-card rounded-2xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Working Hours
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Monday – Saturday</span>
                                        <span className="font-medium text-gray-900">10:00 AM – 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Sunday</span>
                                        <span className="font-medium text-red-500">Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                    Contact
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <a
                                        href="tel:+919049884354"
                                        className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                                    >
                                        📞 +91 90498 84354
                                    </a>
                                    <a
                                        href="https://wa.me/919049884354"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
                                    >
                                        💬 WhatsApp Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
