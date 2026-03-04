import Link from "next/link";

const services = [
  {
    title: "Hair Loss & Regrowth",
    description:
      "Advanced PRP, mesotherapy, and root-cause analysis for lasting hair restoration and density improvement.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Skin Treatments",
    description:
      "Expert solutions for acne, pigmentation, dark spots, and uneven skin tone with scientific precision.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Laser Therapies",
    description:
      "State-of-the-art laser treatments for hair removal, skin rejuvenation, scar reduction, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-400",
  },
  {
    title: "Advanced Care",
    description:
      "Chemical peels, dermal fillers, anti-aging treatments, and personalized skincare regimens.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0l5.1 5.1a2.121 2.121 0 01-3 3l-5.1-5.1zm0 0L8.34 8.09m10.42 2.54a6 6 0 11-8.49-8.49" />
      </svg>
    ),
    color: "from-amber-500 to-orange-400",
  },
];

const testimonials = [
  {
    name: "Priya M.",
    text: "After struggling with hair loss for years, Dr. Dayama's treatment plan gave me visible regrowth in just 4 months. The clinic is clean, modern, and the staff is incredibly caring.",
    rating: 5,
    treatment: "Hair Regrowth",
  },
  {
    name: "Rahul S.",
    text: "My acne scars were a constant source of insecurity. The laser treatment at Skinnair has dramatically improved my skin texture. Highly recommend!",
    rating: 5,
    treatment: "Acne Scar Treatment",
  },
  {
    name: "Sneha K.",
    text: "Best dermatologist in Sangamner! Dr. Dayama took time to explain the root cause of my pigmentation and the treatment worked beautifully. My skin has never looked better.",
    rating: 5,
    treatment: "Pigmentation Treatment",
  },
  {
    name: "Amit P.",
    text: "Professional, knowledgeable, and results-driven. The personalized approach at Skinnair truly sets them apart from other clinics. Worth every visit!",
    rating: 5,
    treatment: "Skin Rejuvenation",
  },
];

const whyChoose = [
  {
    title: "Personalized Treatment",
    description: "Every patient gets a customized plan tailored to their unique skin & hair needs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Root-Cause Focus",
    description: "We treat the underlying cause, not just symptoms, for lasting results that transform lives.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Modern Technology",
    description: "Equipped with latest lasers, PRP systems, and dermatological tools for premium care.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Local in Sangamner",
    description: "Conveniently located for the community with flexible scheduling and walk-in availability.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/40" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Floating shapes */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float hidden lg:block" />
        <div className="absolute top-48 right-40 w-3 h-3 bg-accent/30 rounded-full animate-float delay-200 hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-secondary/20 rounded-full animate-float delay-400 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Trusted Dermatology in Sangamner
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
                Dr. Dayama&apos;s{" "}
                <span className="gradient-text">Skinnair</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
                  Expert Skin & Hair Care
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                Root-cause treatments for lasting skin health & hair regrowth.
                Experience personalized care with advanced technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <a
                  href="https://wa.me/919049884354?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 text-center btn-shine"
                >
                  📞 Book Appointment
                </a>
                <Link
                  href="/results"
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl shadow-md border border-gray-200 hover:border-primary/30 hover:text-primary hover:shadow-lg transition-all duration-300 text-center"
                >
                  ✨ View Results
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in-up delay-400">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">5000+</div>
                  <div className="text-sm text-gray-500">Happy Patients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-500">Treatments</div>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse" />
                {/* Middle ring */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-primary/5 to-accent/5" />
                {/* Inner content */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-100 to-teal-50 flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-700">Your Skin</p>
                    <p className="text-sm text-gray-500">Our Priority</p>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-2 right-8 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Verified Results</span>
                  </div>
                </div>

                <div className="absolute bottom-8 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float delay-300">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-lg">⭐</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">5.0 Rating</div>
                      <div className="text-xs text-gray-400">Google Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding bg-white" id="services-preview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Comprehensive Skin & Hair <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From hair regrowth to advanced laser therapies, we offer a full
              spectrum of dermatological treatments tailored to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                href="/services"
                key={service.title}
                className="reveal glass-card rounded-2xl p-6 group cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor visual */}
            <div className="reveal relative">
              <div className="relative max-w-md mx-auto">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <p className="text-xl font-bold text-gray-700">Dr. Pravin Dayama</p>
                      <p className="text-sm text-gray-500">Dermatologist</p>
                    </div>
                  </div>
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-xs text-gray-500">Years Exp.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                Meet Your Doctor
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Dr. Pravin Dayama
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Dr. Pravin Dayama is an experienced dermatologist dedicated to
                providing personalized skin and hair care solutions in Sangamner.
                With a deep understanding of dermatological science and a
                compassionate approach to patient care, he addresses the root
                cause of every condition.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Using advanced technology and evidence-based treatments, Dr.
                Dayama has helped thousands of patients achieve healthy, radiant
                skin and restored hair growth. His clinic, Skinnair, is
                equipped with modern facilities to deliver premium dermatological
                care.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "MBBS, MD Dermatology",
                  "Advanced Training in Laser Therapy & Cosmetology",
                  "Member, Indian Association of Dermatologists (IADVL)",
                  "10+ Years of Clinical Experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                Read Full Profile
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BEFORE-AFTER GALLERY ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Real Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Patient <span className="gradient-text">Transformations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the incredible results our patients have achieved with our
              personalized treatment plans.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Hair Regrowth – 6 Months", category: "Hair Loss" },
              { title: "Acne Clearance – 3 Months", category: "Acne" },
              { title: "Pigmentation Reduction", category: "Skin" },
              { title: "Hair Density Improvement", category: "Hair Loss" },
              { title: "Scar Treatment Results", category: "Skin" },
              { title: "Skin Rejuvenation", category: "Anti-Aging" },
            ].map((result, i) => (
              <div
                key={result.title}
                className="reveal group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                      <div className="absolute top-2 left-2 px-2 py-1 bg-red-500/90 text-white text-xs font-semibold rounded-lg">
                        Before
                      </div>
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25c0 .828.672 1.5 1.5 1.5z" />
                      </svg>
                    </div>
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                      <div className="absolute top-2 right-2 px-2 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-lg">
                        After
                      </div>
                      <svg className="w-12 h-12 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <Link
                        href="/results"
                        className="w-full py-2 bg-white/20 backdrop-blur text-white text-center text-sm font-medium rounded-lg hover:bg-white/30 transition-colors block"
                      >
                        View Full Gallery →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">{result.title}</h3>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {result.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Results
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What Our Patients <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="reveal glass-card rounded-2xl p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.treatment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Why Skinnair
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                className="reveal text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Healthy Skin & Hair?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards radiant skin and strong, healthy hair.
              Book your consultation with Dr. Dayama today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919049884354?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-secondary text-gray-900 font-bold rounded-2xl shadow-lg hover:bg-secondary-dark hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                📞 Book Now on WhatsApp
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

      {/* ===== INSTAGRAM EMBED ===== */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="reveal">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Follow Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Stay Connected on <span className="gradient-text">Instagram</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Follow @skinnair_ for skincare tips, transformations, and clinic updates.
            </p>
            <a
              href="https://instagram.com/skinnair_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow @skinnair_
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
