import { RegisterHero } from "@/components/auth/register/RegisterHero";
import { RegisterForm } from '@/components/auth/register/RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex">
      <RegisterHero />

      <section className="w-full lg:w-1/2 bg-[#f8f8f8] flex items-center justify-center px-6 py-10">
        <RegisterForm />
      </section>
    </main>
  );
}