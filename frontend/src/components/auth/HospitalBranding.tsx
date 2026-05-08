export function HospitalBranding() {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-cyan-500 text-white p-10 flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
            H
          </div>

          <div>
            <h1 className="text-2xl font-bold">HospitalCare</h1>
            <p className="text-sm text-blue-100">
              Hospital Management System
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-4xl font-bold leading-tight">
            Welcome to the Hospital Portal
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed max-w-md">
            Secure access for hospital staff and patients.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <p className="text-3xl font-bold">24/7</p>
          <p className="text-sm text-blue-100 mt-1">
            Healthcare Access
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <p className="text-3xl font-bold">100%</p>
          <p className="text-sm text-blue-100 mt-1">
            Secure Authentication
          </p>
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
}
