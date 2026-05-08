"use client"
import { AuthLayout } from '@/app/layouts/AuthLayout';
import { HospitalBranding } from '@/components/auth/HospitalBranding';
import { LoginHeader } from '@/components/auth/LoginHeader';
import { AuthTabs } from '@/components/auth/AuthTabs';
import { StaffLoginForm } from '@/components/auth/StaffLoginForm';
import { PatientInfoCard } from '@/components/auth/PatientInfoCard';
import { useState } from 'react';
import { PatientLoginForm } from '@/components/auth/PatientLoginForm';
export default function LoginPage() {
  const [role, setRole] = useState('staff')
  return (
    <AuthLayout>
      <HospitalBranding />

      <div className="p-8 lg:p-12 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <LoginHeader />

          <AuthTabs activeTab={role} setTab={setRole} />
          {role=="staff" ? <StaffLoginForm />  : <PatientLoginForm/>}
          
          {role=="patient" ? <PatientInfoCard /> : <p></p>}
         

          
        </div>
      </div>
    </AuthLayout>
  );
}
