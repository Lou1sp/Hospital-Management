'use client';

import { useState } from 'react';
import { registerPatient } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

export function useRegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {    e.preventDefault();

    try {
      setLoading(true);
      const data = await registerPatient({
        email: formData.email,
        user_name: formData.firstName + " " + formData.lastName,
        password: formData.password,
        phone_num: formData.phone,
        DOB: formData.dob
      });

      localStorage.setItem(
        'access_token',
        data.access_token,
      );

      console.log(data);
    } finally {
      router.push('/auth/login');
    }
  }

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
}