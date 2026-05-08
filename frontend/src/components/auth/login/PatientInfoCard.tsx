import Link from "next/link";
export function PatientInfoCard() {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl mt-5 space-y-3">

      <p className="text-sm text-slate-600 leading-relaxed">
        Patients can create their own account using email or phone number.
      </p>



      <Link href="/auth/register" className=" flex justify-center mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition py-3 rounded-2xl font-semibold">
        Create Patient Account
      </Link>
    </div>
  );
}
