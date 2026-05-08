'use client';

import { Eye, Lock } from 'lucide-react';
import { useState } from 'react';

type PasswordFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

export function PasswordField({
  label,
  name,
  value,
  onChange,
}: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-l font-semibold text-[#1d2945] mb-3">
        {label}
      </label>

      <div className="flex items-center gap-4 bg-[#eef3fb] rounded-2xl px-5 py-2 border border-transparent focus-within:border-blue-500 transition">
        <div className="text-gray-500">
          <Lock size={22} />
        </div>

        <input
          type={show ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          className="text-black bg-transparent outline-none w-full text-l"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-gray-500"
        >
          <Eye size={22} />
        </button>
      </div>
    </div>
  );
}