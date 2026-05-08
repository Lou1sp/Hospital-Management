export function PatientLoginForm() {
  return (
    <form className="space-y-5">
      {/* Email / Phone */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Email or Phone
        </label>

        <input
          name="emailOrPhone"
          placeholder="Enter email or phone number"
          className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Options */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-600">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          type="button"
          className="text-blue-600 font-medium hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-900 transition text-white py-3 rounded-2xl font-semibold shadow-lg shadow-blue-200 cursor-pointer"
      >
        Login as Patient
      </button>
    </form>
  );
}