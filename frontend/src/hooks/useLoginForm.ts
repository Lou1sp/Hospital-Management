"use client";

import { useState } from "react";
import { login } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export function useLoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    loginAs: string,
  ) {
    e.preventDefault();

    setLoading(true);
    const data = await login({
      email: formData.email,
      password: formData.password,
    });

    localStorage.setItem("access_token", data.access_token);

    console.log(data);

    if (loginAs == "PATIENT" && data.role != "PATIENT") {
      alert("Patient does not exists");
      return;
    }

    if (
      loginAs == "STAFF" &&
      (data.role != "DOCTOR" || data.user.role != "NURSE")
    ) {
      alert("Staff does not exists");
      return;
    }

    if(data.role == "PATIENT"){
        router.push("https://www.facebook.com");
    }
    if(data.role == "DOCTOR"){
        router.push("https://www.youtube.com");
    }
  }

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
}
