'use client';

import { HospitalBranding } from '@/components/auth/login/HospitalBranding';
import { LoginHeader } from '@/components/auth/login/LoginHeader';
import { AuthTabs } from '@/components/auth/login/AuthTabs';
import { StaffLoginForm } from '@/components/auth/login/StaffLoginForm';
import { PatientInfoCard } from '@/components/auth/login/PatientInfoCard';
import { PatientLoginForm } from '@/components/auth/login/PatientLoginForm';

import { useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState('staff');

  return (
    <div className="min-h-screen flex">
      <div className="w-full h-full lg:w-1/2">
       <HospitalBranding />
      </div>
    
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full px-30">
          <LoginHeader />

          <AuthTabs
            activeTab={role}
            setTab={setRole}
          />

          {role === 'staff' ? (
            <StaffLoginForm />
          ) : (
            <PatientLoginForm />
          )}

          {role === 'patient' ? (
            <PatientInfoCard />
          ) : null}
        </div>
      </div>
    </div>
  );
}