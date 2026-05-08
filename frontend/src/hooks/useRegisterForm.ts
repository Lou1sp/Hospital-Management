'use client';

import { useState } from 'react';
import { registerPatient } from '@/lib/api/auth';

export function useRegisterForm() {
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
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await registerPatient({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem(
        'access_token',
        data.access_token,
      );

      console.log(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
}