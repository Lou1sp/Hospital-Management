import { useLoginForm } from "@/hooks/useLoginForm";

export function PatientLoginForm() {
  const {
    formData,
    loading,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <form className="space-y-5"
    onSubmit={handleSubmit}
    >
      {/* Email / Phone */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Email 
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="text-black w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="text-black w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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