interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
}

export function Input({
  label,
  type = 'text',
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}