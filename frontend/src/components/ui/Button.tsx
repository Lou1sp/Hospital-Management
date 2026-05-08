interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-2xl font-semibold shadow-lg shadow-blue-200">
      {children}
    </button>
  );
}