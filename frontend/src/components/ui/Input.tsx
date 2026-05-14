interface InputProps {
  label: string;
  type?: string;
  name?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  placeholder: string;
}

export function Input({
  label,
  name,
  value,
  onChange,
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
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-black w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}