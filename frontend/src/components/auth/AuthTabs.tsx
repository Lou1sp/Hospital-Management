interface AuthTabsProps {
  activeTab: string;
  setTab: (tab: string) => void
}

export function AuthTabs({ activeTab, setTab }: AuthTabsProps) {
  return (
    <div className="flex bg-slate-100 rounded-2xl p-1 mb-8">
      <button
        className={`flex-1 py-3 rounded-xl font-semibold transition ${
          activeTab === 'staff'
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-slate-600 hover:bg-white'
        }`}
        onClick={() => setTab("staff")}
      >
        Staff Login
      </button>

      <button
        className={`flex-1 py-3 rounded-xl font-semibold transition ${
          activeTab === 'patient'
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-slate-600 hover:bg-white'
        }`
      }
      onClick={() => setTab("patient")}
      >
        Patient Login
      </button>
    </div>
  );
}