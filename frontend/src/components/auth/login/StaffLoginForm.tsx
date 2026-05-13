import { Input } from "../../ui/Input";
import { Button } from '../../ui/Button';

export function StaffLoginForm() {
  return (
    <form className="space-y-5">
      <Input
        label="Employee ID"
        placeholder="Enter hospital-issued ID"
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
      />

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