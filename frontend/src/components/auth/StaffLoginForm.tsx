import { Input } from "../ui/Input";
import { Button } from '../ui/Button';

export function StaffLoginForm() {
  return (
    <div className="space-y-5">
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

      <Button>Login as Staff</Button>
    </div>
  );
}