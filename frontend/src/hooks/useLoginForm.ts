'use client'

import { useState } from "react";
import { loginPatient } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export function useLoginForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            const data = await loginPatient({
                email: formData.email,
                password: formData.password
            });

            localStorage.setItem(
                'access_token',
                data.access_token,
            );

            console.log(data);
        } finally {
   
        }
    }

    return {
        formData,
        loading,
        handleChange,
        handleSubmit,
    }
}