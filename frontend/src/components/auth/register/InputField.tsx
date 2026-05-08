import { ReactNode } from 'react';

type InputFieldProps = {
  label: string;
  icon: ReactNode;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  placeholder?: string;
  type?: string;
};

export function InputField({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-l font-semibold text-[#1d2945] mb-3">
        {label}
      </label>

      <div className="flex items-center gap-4 bg-[#eef3fb] rounded-2xl px-5 py-2 border border-transparent focus-within:border-blue-500 transition">
        <div className="text-gray-500">{icon}</div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-l text-black"
        />
      </div>
    </div>
  );
}