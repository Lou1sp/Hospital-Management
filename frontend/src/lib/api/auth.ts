import { RegisterDTO } from '@/types/auth';

const API_URL = 'http://localhost:5000';

export async function registerPatient(
  dto: RegisterDTO,
) {
  const response = await fetch(
    `${API_URL}/auth/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || 'Registration failed',
    );
  }

  return data;
}