// ToggleSwitch.jsx
// Reusable toggle component for enabling/disabling advanced mode
const ToggleSwitch = ({ label, enabled, setEnabled }) => {
  return (
    <div className="flex items-center">
      <span className="mr-3 text-sm font-medium text-gray-700">{label}</span>
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${enabled ? 'bg-indigo-600' : 'bg-gray-200'}`}
        onClick={() => setEnabled(!enabled)}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ease-in-out ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;