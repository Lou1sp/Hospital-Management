'use client';

import {
  Calendar,
  Mail,
  Phone,
  User,
} from 'lucide-react';

import { InputField } from './InputField';
import { PasswordField } from './PasswordField';
import { RegisterButton } from './RegisterButton';
import { TermsCheckbox } from './TermsCheckbox';

import { useRegisterForm } from '@/hooks/useRegisterForm';

export function RegisterForm() {
  const {
    formData,
    loading,
    handleChange,
    handleSubmit,
  } = useRegisterForm();

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-10">

        <h1 className="text-7xl font-bold text-[#0c1730] mt-3">
          Register
        </h1>

        <p className="text-gray-500 text-2xl mt-4">
          Create your patient account to get
          started.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="First Name"
            icon={<User size={22} />}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />

          <InputField
            label="Last Name"
            icon={<User size={22} />}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>

        <InputField
          label="Email Address"
          icon={<Mail size={22} />}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@email.com"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Phone Number"
            icon={<Phone size={22} />}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0123 456 789"
          />

          <InputField
            label="Date of Birth"
            icon={<Calendar size={22} />}
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <PasswordField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <TermsCheckbox />

        <RegisterButton loading={loading} />
      </form>
    </div>
  );
}