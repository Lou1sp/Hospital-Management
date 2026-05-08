type RegisterButtonProps = {
  loading: boolean;
};

export function RegisterButton({
  loading,
}: RegisterButtonProps) {
  return (
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-2xl font-semibold shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition">
      {loading
        ? 'Creating Account...'
        : 'Create Patient Account'}
    </button>
  );
}