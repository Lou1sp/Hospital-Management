export function PatientInfoCard() {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
      <h3 className="font-bold text-slate-800 text-lg">
        Patient Portal
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed">
        Patients can create their own account using email or phone number.
      </p>

      <ul className="space-y-2 text-sm text-slate-700">
        <li>• Book appointments online</li>
        <li>• View prescriptions and reports</li>
        <li>• Track medical history</li>
        <li>• Receive hospital notifications</li>
      </ul>

      <button className="w-full mt-2 border border-blue-600 text-blue-600 hover:bg-blue-50 transition py-3 rounded-2xl font-semibold">
        Create Patient Account
      </button>
    </div>
  );
}
