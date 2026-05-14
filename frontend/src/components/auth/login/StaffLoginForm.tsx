import { Input } from "../../ui/Input";
import { useLoginForm } from "@/hooks/useLoginForm";

export function StaffLoginForm() {
  const { formData, loading, handleChange, handleSubmit } = useLoginForm();

  return (
    <form className="space-y-5" onSubmit={(e) => handleSubmit(e, "STAFF")}>
      <Input 
      label="Employee Email" 
      placeholder="Enter hospital-issued ID" 
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      />

      <Input 
      label="Password" 
      type="password" 
      placeholder="Enter password"
      name="password"
      value={formData.password}
      onChange={handleChange} />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-600">
          <input type="checkbox" />
          Remember me
        </label>

        <button className="text-blue-600 font-medium hover:underline">
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-900 transition text-white py-3 rounded-2xl font-semibold shadow-lg shadow-blue-200 cursor-pointer"
      >
        Login as Staff
      </button>
    </form>
  );
}
