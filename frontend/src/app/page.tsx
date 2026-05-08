import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
              H
            </div>

            <div>
              <h1 className="font-bold text-xl">HospitalCare</h1>
              <p className="text-xs text-slate-500">
                Healthcare Management Platform
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="px-5 py-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition font-medium"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-100"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              Modern Healthcare Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900">
              Smart Hospital
              <span className="text-blue-600 block">Management System</span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              Simplify hospital operations, manage patients efficiently,
              schedule appointments, and deliver better healthcare experiences
              through a centralized digital platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="pages/auth/login"
                className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-2xl shadow-blue-200"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="px-7 py-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition font-semibold"
              >
                Registration
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-3xl font-black text-slate-900">24/7</h3>
                <p className="text-slate-500 mt-1 text-sm">Patient Support</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">100+</h3>
                <p className="text-slate-500 mt-1 text-sm">Medical Staff</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">Secure</h3>
                <p className="text-slate-500 mt-1 text-sm">Medical Records</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-white border border-slate-100 rounded-[32px] shadow-2xl p-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-slate-500">
                    Connected Healthcare Platform
                  </p>

                  <h2 className="text-3xl font-black text-slate-900 mt-1">
                    Smart Care System
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-blue-100 flex items-center justify-center text-3xl">
                  🏥
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition">
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Patient Management
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Centralized medical records
                    </p>
                  </div>

                  <div className="text-2xl">📋</div>
                </div>

                <div className="border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition">
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Appointment Scheduling
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Real-time booking system
                    </p>
                  </div>

                  <div className="text-2xl">📅</div>
                </div>

                <div className="border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition">
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Staff Dashboard
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Manage hospital operations
                    </p>
                  </div>

                  <div className="text-2xl">👨‍⚕️</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-100 rounded-full blur-3xl opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-24 bg-slate-50 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Core Features</p>

            <h2 className="text-4xl font-black text-slate-900">
              Everything a Modern Hospital Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Electronic Medical Records",
              "Online Appointment Booking",
              "Doctor & Staff Management",
              "Billing & Payment System",
              "Prescription Tracking",
              "Secure Patient Portal",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-6">
                  ✨
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  Streamline healthcare workflows and improve operational
                  efficiency.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-black leading-tight">
              Ready to Modernize Your Hospital?
            </h2>

            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Improve healthcare delivery with a secure and scalable hospital
              management platform.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/auth/login"
                className="px-7 py-4 rounded-2xl bg-white text-blue-600 font-bold hover:scale-105 transition"
              >
                Access Portal
              </Link>

              <button className="px-7 py-4 rounded-2xl border border-white/30 font-bold hover:bg-white/10 transition">
                Contact Hospital
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
