export function RegisterHero() {
  return (
    <section className="hidden lg:flex lg:w-1/2 bg-[#06152d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 flex flex-col justify-between p-14 w-full">
        <div>
          <div className="flex items-center gap-4 mb-24">
            <div className="w-14 h-14 border border-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              <span className="text-3xl text-blue-400">
                +
              </span>
            </div>

            <div>
              <h2 className="text-3xl tracking-wide font-light">
                HOSPITALCARE
              </h2>

              <p className="text-gray-400 tracking-[0.2em] text-sm mt-1">
                HOSPITAL MANAGEMENT SYSTEM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-blue-400" />

            <span className="text-blue-400 tracking-[0.3em] text-sm font-semibold">
              PATIENT PORTAL
            </span>
          </div>

          <div className="max-w-lg">
            <h1 className="text-7xl leading-tight font-serif">
              Join the
              <br />
              <span className="italic text-blue-400">
                Patient Portal
              </span>
            </h1>

            <p className="text-gray-400 text-2xl leading-relaxed mt-10">
              Create your account to access medical
              services, appointments, and your health
              information securely.
            </p>

            <button className="mt-10 border border-blue-500 text-blue-400 px-8 py-4 tracking-[0.2em] text-sm hover:bg-blue-500/10 transition">
              • SECURE & TRUSTED
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex gap-20">
          <div>
            <h3 className="text-6xl font-serif">
              24/7
            </h3>

            <p className="mt-4 tracking-[0.2em] text-gray-400 text-sm">
              PATIENT ACCESS
            </p>
          </div>

          <div className="w-px bg-white/10" />

          <div>
            <h3 className="text-6xl font-serif">
              100%
            </h3>

            <p className="mt-4 tracking-[0.2em] text-gray-400 text-sm">
              DATA PRIVACY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}