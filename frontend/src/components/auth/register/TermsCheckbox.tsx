export function TermsCheckbox() {
  return (
    <div className="flex items-center gap-3 text-gray-600">
      <input
        type="checkbox"
        className="w-5 h-5"
      />

      <p className="text-l">
        I agree to the{' '}
        <span className="text-blue-600">
          Terms of Service
        </span>{' '}
        and{' '}
        <span className="text-blue-600">
          Privacy Policy
        </span>
      </p>
    </div>
  );
}