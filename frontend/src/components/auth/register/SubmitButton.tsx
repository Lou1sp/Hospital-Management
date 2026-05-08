type SubmitButtonProps = {
  loading: boolean;
  text: string;
  loadingText: string;
};

export function SubmitButton({
  loading,
  text,
  loadingText,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 rounded-lg font-semibold transition"
    >
      {loading ? loadingText : text}
    </button>
  );
}